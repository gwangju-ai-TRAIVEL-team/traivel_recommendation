from django.shortcuts import render,redirect
from accounts.models import Userinfo
from django.contrib import messages
import ast
# Create your views here.

def result(request) :
    context = {}
    
    if request.user.is_authenticated :

        username = str(request.user.username)

        userinfo = Userinfo.objects.get(user=username)
        context["userinfo"] = userinfo


    if request.method == "POST" :

        keyword = request.POST.getlist('keyword')
        Type = request.POST.getlist('type')

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

        
    
        
            
    

    