from django.shortcuts import render,redirect
from accounts.models import Userinfo
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import place
from .serializers import PlaceSerializer
import ast
from django.http import HttpResponse
import re
import random
# Create your views here.

def result(request) :
    context = {}
    
    if request.user.is_authenticated :

        username = str(request.user.username)

        userinfo = Userinfo.objects.get(user=username)
        context["userinfo"] = userinfo



    if request.method == "GET" :

        context["region"] = request.GET["region"]
        
        keyword = request.GET.getlist('keyword')
        Type = request.GET.getlist('type')

        while ("" in keyword) :
            keyword.remove("")

        while ("" in Type) :
            Type.remove("")


        if keyword :
            context["keyword"] = keyword
            if Type :
                context["Type"] = Type
                return render(request, 'main/result.html', context)
            else :
                messages.success(request, "사진을 선택해주세요.")
                return redirect('index')
        else :
            messages.success(request, '키워드를 선택해주세요.')
            return redirect('index')

def recommend(request) :
    totalPlace = place.objects.all()
    randomPlace = random.sample(list(totalPlace), 5)

    context = {
        'place': randomPlace
    }

    return render(request, 'main/recommend.html', context)

def mainajax(request) :
    return render(request, 'main/mainajax.html')

def mainfooterbox(request) :
    return render(request, 'main/mainfooterbox.html')

@api_view(['GET'])
def addrdesc(request, addr_id) :
    getplace = place.objects.filter(id=addr_id)
    result = PlaceSerializer(getplace, many=True)
    return Response(result.data)

@api_view(['GET'])
def getaddr(request) :
    totalPlace = place.objects.all()
    result = PlaceSerializer(totalPlace, many=True)

    return Response(result.data)
