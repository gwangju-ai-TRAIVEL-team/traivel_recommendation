import requests
from bs4 import BeautifulSoup
import csv
import pandas as pd

df = pd.read_csv('category.csv', encoding='utf-8')
code = [12, 14, 15, 28]
ct = ['관광', '문화', '축제/공연/행사', '레포츠']
# province = ['부산', '대구', '인천', '광주', '울산', '세종', '대전', '경기',
#             '강원', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주']
# province_er = ['Busan', 'Deagu', 'Incheon', 'Gwangju', 'Ulsan', 'Sejong', 'Deajeon', 'Gyeonggi',
#                'Gangwon', 'Choongbuk', 'Choongnam', 'Jenbuk', 'Jennam', 'Gyeongbuk', 'Gyeongnam', 'Jeju']
province = ['울산', '전라북도']
province_er = ['Ulsan', 'Jeonbuk']
for j, er in enumerate(province_er):
    ct_cnt = 0
    f = open(f"{er}.csv", "w")
    writer = csv.writer(f)
    writer.writerow(['address', "name", 'keyword',
                     'latitude', 'longitude', 'areacode'])
    for i in range(len(code)):
        open_api_key = 'Xo%2FnE0g0aac1l%2FzcggvqgOjmeUVljObV%2Fim9Z04UiPUlyGcE6QNBq6GC3kEdM2m0gyaSd7T8WINz2NwyDvdqxA%3D%3D'
        params = f'&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=200&listYN=Y&arrange=A&contentTypeId={code[i]}&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&keyword={province[j]}&'

        open_url = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword?serviceKey=' + \
            open_api_key + params

        res = requests.get(open_url)
        soup = BeautifulSoup(res.content, 'html.parser')

        data = soup.find_all('item')

        for item in data:
            try:
                keyword = []
                address = item.find('addr1').text
                name = item.find('title').text.split('(')[0]
                keyword.append(ct[ct_cnt])
                if 'A01' == item.find('cat1').text:
                    keyword.append('자연')
                elif 'A02' == item.find('cat1').text:
                    keyword.append('인문')
                elif 'A03' == item.find('cat1').text:
                    keyword.append('레포츠')
                mid = df[df['cat2'] == item.find('cat2').text]['중분류']
                keyword.append(mid.values[0])
                small = df[df['cat3'] == item.find('cat3').text]['소분류']
                keyword.append(small.values[0])
                latitude = item.find('mapy').text
                longitude = item.find('mapx').text
                # print(address, "/", name, keyword, latitude, longitude, province[j])
                writer.writerow(
                    [address, name, keyword, latitude, longitude, province[j]])
            except:
                continue

        # break
        ct_cnt += 1
    f.close()
    print(er, ' done!!!!!')
