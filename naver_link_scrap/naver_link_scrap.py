import pandas as pd
from bs4 import BeautifulSoup as bs4
from selenium import webdriver as wb
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
import time

path='C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe'
driver = wb.Chrome(path)
URL = 'https://m.naver.com/'
driver.get(URL)
search_word = input('시/도 : ')


# 검색
search_bar = driver.find_element_by_id('MM_SEARCH_FAKE')
search_bar.send_keys(search_word)
search_bar = driver.find_element_by_id('query')
search_bar.send_keys(Keys.ENTER)
time.sleep(2)
# 전체보기
data = driver.find_elements_by_css_selector('div.cs_attraction > a')
data[0].click()
time.sleep(2)
soup = bs4(driver.page_source, 'html.parser')

# 전체보기 페이지 스크롤
count = 0
while True:
    count += 1
    try:
        driver.find_element_by_xpath("/html/body/layered-page/div/page-stack-view/lp-page-stack-view-template/div/page-view/div/div[2]/lp-component/component-html/section/div/div[3]/div[2]/a")
    except Exception as ex:
        print(f"에러 발생 {ex}")
        print("selenium.common.exceptions.NoSuchElementException 인 경우 성공적인 종료")
        break
    else:
        data = driver.find_element_by_xpath("/html/body/layered-page/div/page-stack-view/lp-page-stack-view-template/div/page-view/div/div[2]/lp-component/component-html/section/div/div[3]/div[2]/a")
    data.click()
    time.sleep(2)
    # 멈추고 싶은 구간 활성화
    # if count == 4 :
    #     break
    print(f"현재 진행 중")

# 페이지 주소 가져오기
# link들을 담기위한 리스트
time.sleep(5)
link_list = []
links = driver.find_elements_by_css_selector('body > layered-page > div > page-stack-view > lp-page-stack-view-template > div > page-view > div > div.api_content._lp_content > lp-component > component-html > section > div > div.attraction_list_bridge._hiding_element._content > ul > li > a')
for link in links:
    link = link.get_attribute('href')
    link_list.append(link)


# 데이터프레임으로 만들기위한 리스트
link = []
length = len(link_list)
for i in range(0, length):
    link_data = {}
    link_data["link"] = link_list[i]
    link.append(link_data)
# csv로 저장
df = pd.DataFrame(link, columns=['link'])
df.to_csv(r"naver_link_scrap/data/naver_link_{}.csv".format(search_word),header=True, index=False)