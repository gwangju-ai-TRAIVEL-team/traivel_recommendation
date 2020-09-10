from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Userinfo

# Create your views here.

def sign_up(request) :
    context = {}

    if request.method =="POST" :

        if (request.POST['username'] and
            request.POST['password'] and
            request.POST['password'] == request.POST['password_check']) :

            if not Userinfo.objects.filter(nickname=request.POST['nickname']) :
                
                if not Userinfo.objects.filter(email=request.POST['email']) :
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
                    context['error'] = '이미 가입된 이메일입니다.'

            else :
                context['error'] = '중복된 닉네임입니다.'
        
        else :
            context['error'] = '중복된 아이디이거나 패스워드가 일치하지 않습니다.'

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