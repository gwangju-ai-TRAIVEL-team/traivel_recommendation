from django.shortcuts import render, redirect
from accounts.models import Userinfo
from django.contrib.auth.models import User
from django.contrib import auth
# Create your views here.

def index(request) :
    context = {}
    
    if request.user.is_authenticated :
        userinfo = Userinfo.objects.filter(user=request.user.username)
        context['userinfo'] = userinfo

    return render(request, 'main/index.html', context)

