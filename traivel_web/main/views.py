from django.shortcuts import render
from .models import Input
# Create your views here.

def result(request) :
    context = {}

    if request.method == "POST" :

         region = request.POST['region']
         keyword = request.POST['keyword']
         Type = request.POST['type']

         input = Input(region=region, keyword=keyword, Type=Type)

         input.save()

         context["input"] = input

    return render(request, 'main/result.html', context)