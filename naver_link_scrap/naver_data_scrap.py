import pandas as pd
from bs4 import BeautifulSoup as bs4
import requests
import time
import os


cookies = {
    'NNB': 'JS2SEHLD4H7F4',
    'ASID': '774d6445000001738f9aa63d0000006c',
    'MM_NEW': '1',
    'NFS': '2',
    'MM_NOW_COACH': '1',
    '_ga': 'GA1.1.720151847.1594254508',
    '_ga_7VKFYR6RV1': 'GS1.1.1597108382.5.1.1597108395.47',
    'NRTK': 'ag^#all_gr^#4_ma^#2_si^#2_en^#2_sp^#2',
    'nx_ssl': '2',
    'BMR': 's=1599552595055^&r=https^%^3A^%^2F^%^2Fm.blog.naver.com^%^2Fkiddwannabe^%^2F221310063239^&r2=https^%^3A^%^2F^%^2Fwww.google.com^%^2F',
    'page_uid': 'U1O6+sprvA4ssbhwMmGssssstZ8-334927',
    '_naver_usersession_': 'LlKyYWRT53x4Zl0ngcYpf8pg',
}

headers = {
    'authority': 'm-place.pstatic.net',
    'cache-control': 'no-cache',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    'accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'image',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': 'NNB=JS2SEHLD4H7F4; ASID=774d6445000001738f9aa63d0000006c; MM_NEW=1; NFS=2; MM_NOW_COACH=1; _ga=GA1.1.720151847.1594254508; _ga_7VKFYR6RV1=GS1.1.1597108382.5.1.1597108395.47; NRTK=ag^#all_gr^#4_ma^#2_si^#2_en^#2_sp^#2; nx_ssl=2; BMR=s=1599552595055^&r=https^%^3A^%^2F^%^2Fm.blog.naver.com^%^2Fkiddwannabe^%^2F221310063239^&r2=https^%^3A^%^2F^%^2Fwww.google.com^%^2F; page_uid=U1O6+sprvA4ssbhwMmGssssstZ8-334927; _naver_usersession_=LlKyYWRT53x4Zl0ngcYpf8pg',
    'Referer': 'https://m.place.naver.com/place/11685515/home',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    'if-modified-since': 'Thu, 11 Jul 2019 08:43:14 GMT',
    'referer': 'https://m.place.naver.com/place/11685515/home',
    'pragma': 'no-cache',
    'Connection': 'keep-alive',
    'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Dest': 'image',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
}
path = os.getcwd()+ '\\naver_link_scrap\\data\\'
search_word = input('지명 입력 : ')
df = pd.read_csv(f'{path}naver_link_{search_word}.csv')
size = df.value_counts().sum()
link_title = []
link_location = []
link_stars = []
link_key_words = []

for i in range(0, size):
    plz = df['link'][i]
    response = requests.get(f"{plz}", headers=headers, cookies=cookies)
    response.encoding='utf-8'

    soup = bs4(response.text, 'html.parser')
    title = soup.select('span#_title > span._3XamX')[0].text
    location = soup.select('div._1h3B_ > span._2yqUQ')[0].text
    stars = soup.select('span._1Y6hi > em')[0].text
    
    key_words = soup.select('ul._2CguG > li._3Ryhx > span._2irYJ')
    key_word_list = []
    for key_word in key_words:
        key_word=key_word.text.replace(", ","")
        key_word_list.append(key_word)

    link_title.append(title)
    link_location.append(location)
    link_stars.append(stars)
    link_key_words.append(key_word_list)
    print(f'{i+1}번째 진행중')

# 데이터프레임으로 만들기위한 리스트
link = []
length = len(link_title)

for i in range(0, length):
    link_data = {}
    link_data["title"] = link_title[i]
    link_data["location"] = link_location[i]
    link_data['stars'] = link_stars[i]
    link_data["key_words"] = link_key_words[i]
    link.append(link_data)
# csv로 저장
df = pd.DataFrame(link, columns=['title', 'location','stars','key_words'])
df.to_csv(r"naver_link_scrap/data/link_data_{}.csv".format(search_word),header=True, index=False)