# coding: utf-8

import csv
read_list = []

f = open('../ipynb/LDA_gensim_topic.csv', 'r', encoding='utf-8-sig')
reader = csv.DictReader(f)
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "TRAIVEL.settings")
import django
django.setup()

from main.models import Lda
if __name__=='__main__':
    for row in reader:
        Lda(name = row['name'], region = row['region'], tel = row['tel'], keyword = row['keyword'], photo = row['photo'], address = row['address'], latitude = row['lat'], longitude = row['lon'], region_2 = row['region_2'], topic = row['topic'], topic_rate = row['topic_rate'], topic_list = row['topic_list']).save()
        print(row['name'] + 'is saved!')
