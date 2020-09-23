from django.shortcuts import render,redirect
from accounts.models import Userinfo
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import place
from .serializers import PlaceSerializer, LdaSerializer
import ast
from django.http import HttpResponse
import re
import random
import joblib
import numpy as np
from .models import Lda
import pandas as pd
# from TRAIVEL import dictionary
# from TRAIVEL import model
# Create your views here.
dictionary = joblib.load("main\dictionary.pkl")
ldamodel = joblib.load("main\model.pkl")
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
                
                value = keyword+Type
                X = " ".join(value)
                documents_input = []
                keyword_input = X

                keyword_str = ""
                for i in range(len(dictionary)):
                    for k in keyword_input:
                        if k in dictionary[i]:
                            keyword_str += dictionary[i] + " "

                keyword_input = keyword_str.split()
                documents_input.append(keyword_input)
                corpus_input = [dictionary.doc2bow(text) for text in documents_input]
                topictable_input = make_topictable_per_doc(ldamodel, corpus_input)
                topictable_input.columns = ['topic', 'topic_rate', 'topic_list']
                topic_result = topictable_input['topic'][0]
                result = Lda.objects.order_by('region_2').filter(region_2=context['region'], topic=topic_result)[:10]
                print(result)
                if result == None :
                    result = Lda.objects.filter(region_2=context['region'])[:10]
                
                context['result'] = result                
               
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
    getplace = Lda.objects.filter(id=addr_id)
    result = LdaSerializer(getplace, many=True)
    return Response(result.data)

@api_view(['GET'])
def getaddr(request) :
    totalPlace = place.objects.all()
    result = PlaceSerializer(totalPlace, many=True)

    return Response(result.data)


def make_topictable_per_doc(ldamodel, corpus):
    topic_table = pd.DataFrame()

                    # 몇 번째 문서인지를 의미하는 문서 번호와 해당 문서의 토픽 비중을 한 줄씩 꺼내온다.
    for i, topic_list in enumerate(ldamodel[corpus]):
        doc = topic_list[0] if ldamodel.per_word_topics else topic_list            
        doc = sorted(doc, key=lambda x: (x[1]), reverse=True)
                        # 각 문서에 대해서 비중이 높은 토픽순으로 토픽을 정렬한다.
                        # EX) 정렬 전 0번 문서 : (2번 토픽, 48.5%), (8번 토픽, 25%), (10번 토픽, 5%), (12번 토픽, 21.5%), 
                        # Ex) 정렬 후 0번 문서 : (2번 토픽, 48.5%), (8번 토픽, 25%), (12번 토픽, 21.5%), (10번 토픽, 5%)
                        # 48 > 25 > 21 > 5 순으로 정렬이 된 것.

                        # 모든 문서에 대해서 각각 아래를 수행
        for j, (topic_num, prop_topic) in enumerate(doc): #  몇 번 토픽인지와 비중을 나눠서 저장한다.
            if j == 0:  # 정렬을 한 상태이므로 가장 앞에 있는 것이 가장 비중이 높은 토픽
                                topic_table = topic_table.append(pd.Series([int(topic_num), round(prop_topic,4), topic_list]), ignore_index=True)
                                # 가장 비중이 높은 토픽과, 가장 비중이 높은 토픽의 비중과, 전체 토픽의 비중을 저장한다.
            else:
                break
    return(topic_table)
