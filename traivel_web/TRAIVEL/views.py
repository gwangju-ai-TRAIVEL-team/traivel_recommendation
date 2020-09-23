from django.shortcuts import render
from django.http import HttpResponse
from accounts.models import Userinfo
from django.contrib import auth
from .key import key
# Create your views here.

def index(request) :
    
   context = {}

   context['key'] = key
    
   if request.user.is_authenticated :

      username = str(request.user.username)

      userinfo = Userinfo.objects.get(user=username)
      context["userinfo"] = userinfo

   if request.method == "POST" :

      context["region"] = request.POST["region"]

   return render(request, 'main/index.html', context)

