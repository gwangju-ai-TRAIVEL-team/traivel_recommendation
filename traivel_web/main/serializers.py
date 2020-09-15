from rest_framework import serializers
from .models import place

class PlaceSerializer(serializers.ModelSerializer) :
    class Meta :
        model = place
        fields = ('address', 'name', 'keyword', 'latitude', 'longitude', 'areacode')



