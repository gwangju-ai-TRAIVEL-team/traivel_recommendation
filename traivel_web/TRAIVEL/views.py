from django.shortcuts import render
from django.http import HttpResponse
from accounts.models import Userinfo
# Create your views here.

def index(request) :
    
    if request.user.is_authenticated :

    return render(request, 'main/index.html')

