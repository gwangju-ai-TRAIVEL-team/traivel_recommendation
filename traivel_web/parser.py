# coding: utf-8

import csv
read_list = []

f = open('../data/api_data/Seoul.csv', 'r')
reader = csv.DictReader(f)
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "TRAIVEL.settings")
import django
django.setup()

from main.models import place
if __name__=='__main__':
    for row in reader:
        place(address = row['address'], name = row['name'], keyword = row['keyword'], latitude = row['latitude'], longitude = row['longitude'], areacode = row['areacode']).save()
        print(row['name'] + 'is saved!')
