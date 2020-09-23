from rest_framework import serializers
from .models import place, Lda

class PlaceSerializer(serializers.ModelSerializer) :
    class Meta :
        model = place
        fields = ('address', 'name', 'keyword', 'latitude', 'longitude', 'areacode')

class LdaSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lda
        fields = ('name', 'region', 'tel', 'keyword', 'photo', 'address', 'latitude', 'longitude', 'region_2', 'topic', 'topic_rate', 'topic_list')




