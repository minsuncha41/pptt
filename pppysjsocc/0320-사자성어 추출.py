from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import pandas as pd
import time
import pyautogui
import pyperclip

chromeoptions = Options()

chromeoptions.add_experimental_option("detach", True)  
chromeoptions.add_experimental_option("excludeSwitches", 
["enable-automation"])  
chromeoptions.add_experimental_option("useAutomationExtension", False)

prefs = {
    "credentials_enable_service": False,  
    "profile.password_manager_enabled": False  
}
chromeoptions.add_experimental_option("prefs", prefs)


# browser.maximize_window()

headers = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print("사자성어 추출")

num = 20
textlist = []
namelist = []

# 고진감래 타산지석 과유불급 조삼모사 새옹지마
# 결초보은 다다익선 온고지신 사필귀정 역지사지
# 풍수지탄 우공이산 전화위복 각주구검 사면초가
# 호가호위 낭중지추 가렴주구 마부위침 와신상담
# namelist11 = [
# "고진감래", "타산지석", "과유불급", "조삼모사", "새옹지마",
# "결초보은", "다다익선", "온고지신", "사필귀정", "역지사지",
# "풍수지탄", "우공이산", "전화위복", "각주구검", "사면초가",
# "호가호위", "낭중지추", "가렴주구", "마부위침", "와신상담"
# ]
# namelist11 = [
# "고진감래", "타산지석", "과유불급", "조삼모사"
# ]



print("고진감래 타산지석 과유불급 조삼모사 새옹지마")
namein = input("뜻을 알고싶은 사자성어를 적어주세요 (여러게일 경우 ,를 써주세요").split(",")
#, 으로 나누기
for w in namein:
    clname = w.strip()
    #공백제거
    namelist.append(clname)
print(namein)
print(namelist)



# namein = input("뜻을 알고싶은 사자성어를 적어주세요 (여러게일 경우 한칸띄우고 써주세요").split(" ")
#print("고진감래 타산지석 과유불급 조삼모사 새옹지마")
#고진감래, 타산지석, 과유불급, 조삼모사, 새옹지마
# print(namein)
# numb = len(namein) // 4
# print(numb, type(numb))
# ii = 1
# for i in range(0,numb):
#     namelist.append(namein[(i * 4):(4 * ii)])
#     ii += 1
# time.sleep(3)
# print(namelist)


browser = webdriver.Chrome(options=chromeoptions)
browser.implicitly_wait(10)

for num in range(0,len(namelist)):
    url = f"https://hanja.dict.naver.com/#/main"
    browser.get(url)
    time.sleep(3)
    browser.find_element(By.CSS_SELECTOR, "body").click()
    
    itinput = browser.find_element(By.CSS_SELECTOR, "#ac_input").click()
    pyperclip.copy(f"{namelist[num]}")
    
    print(f"{num + 1}. {namelist[num]}")
    pyautogui.hotkey("ctrl","v")
    time.sleep(1)
    
    pyautogui.hotkey("enter")
    time.sleep(2)
    
    texts = browser.find_element(By.CSS_SELECTOR, "#searchPage_entry > div > div.row > ul > li > p").text
    texts = texts.split(".")[0]
    if texts[0] == "‘":
        texts = texts.split("‘")[1]
    textlist.append(f"{texts}.")
    
    print(f"{namelist[num]} \n {texts}.")
    
print(f"수집완료 총{len(namelist)}개의 사자성어를찾아 수집했습니다")

df = pd.DataFrame({"사자성어": namelist, "뜻": textlist})
df.to_excel(f"사자성어.xlsx", index=False)
print(f"사자성어.xlsx 파일로 저장이 완료되었습니다")

    
