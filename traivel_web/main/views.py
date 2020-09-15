from django.shortcuts import render,redirect
from accounts.models import Userinfo
from django.contrib import messages
import ast
from django.http import HttpResponse
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

        
    
def getaddr(request):
    result = """{'result': [{'name':'남산1', lon:'127.35567', lan:'37.35455'},
    {'name':'남산2', lon:'127.35567', lan:'37.35455'},
    {'name':'남산3', lon:'127.35567', lan:'37.35455'},
    {'name':'남산4', lon:'127.35567', lan:'37.35455'}]
    }"""

    return HttpResponse(result)
    

    