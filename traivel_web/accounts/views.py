from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import Userinfo
from django.contrib import auth

# Create your views here.
def login(request) :
    return render(request, 'accounts/login.html')

def sign_up(request) :
    context = {}

    if request.method =="POST" :
        if (request.POST['username'] and
            request.POST['password'] and
            request.POST['password'] == request.POST['password_check']) :

            new_user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password'],
            )

            user = request.POST['username']
            nickname = request.POST['nickname']
            age = request.POST['age']
            address = request.POST['address']
            sex = request.POST['sex']
            email = request.POST['email']
    
            userinfo = Userinfo(user=user,
                                nickname=nickname,
                                age=age,
                                address=address,
                                sex=sex,
                                email=email)

            userinfo.save()

            auth.login(request, new_user)
            
            return redirect('index')
        
        else :
            context['error'] = '아이디와 비밀번호를 다시 확인해주세요'

    return render(request, 'accounts/sign_up.html', context)

def login(request) :
    context = {}

    if request.method == "POST" :

        if request.POST['username'] and request.POST['password'] :

            user = auth.authenticate(
                request,
                username=request.POST['username'],
                password=request.POST['password'],
            )

            if user is not None :
                auth.login(request, user)
                return redirect('index')
            else :
                context['error'] = '아이디와 비밀번호를 다시 확인해주세요'

        else :
            context['error'] = '아이디와 비밀번호를 모두 입력해주세요'

    return render(request, 'accounts/login.html', context)

def logout(request) :
    if request.method == 'POST' :
        auth.logout(request)

    return redirect('index')