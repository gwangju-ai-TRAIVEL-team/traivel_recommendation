from django.shortcuts import render,redirect
from .models import Input
import ast
# Create your views here.

def result(request) :
    context = {}

    if request.method == "POST" :

        region = request.POST['region']
        keyword = request.POST.getlist('keyword')
        Type = request.POST.getlist('type')

        while ("" in keyword) :
            keyword.remove("")

        while ("" in Type) :
            Type.remove("")

        if region:
            context["region"] = region
            if keyword :
                context["keyword"] = keyword
                if Type :
                    context["Type"] = Type
                    return render(request, 'main/result.html', context)
                else :
                    context["error"] = '사진을 선택해주세요'
                    return render(request, 'main/index.html', context)
            else :
                context["error"] = '키워드를 선택해주세요'
                return render(request, 'main/index.html', context)

        else :
            context["error"] = '지역을 입력한 후 돋보기 버튼을 눌러주세요'
            return render(request, 'main/index.html', context)

        
        
            
    

    