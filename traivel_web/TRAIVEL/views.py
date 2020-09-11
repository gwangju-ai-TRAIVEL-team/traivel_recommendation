from django.shortcuts import render
from django.http import HttpResponse
from accounts.models import Userinfo
from django.contrib import auth
# Create your views here.

def index(request) :
    
    context = {}


    
    if request.user.is_authenticated :
       user = Userinfo.objects.filter(user=request.user)
       context["userinfo"] = user
    return render(request, 'main/index.html', context)

