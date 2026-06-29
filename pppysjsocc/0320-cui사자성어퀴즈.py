import pandas as pd
import random
import time

print("사자성어 맞추기 퀴즈 스타트")

execlefile = "사자성어.xlsx"

try:
    df = pd.read_excel(execlefile).drop_duplicates()
    print(f"{execlefile} 데이터를 성공적으로 불러왔습니다")
    
    if len(df) == 0:
        raise FileNotFoundError
except FileNotFoundError:
    print("에러: 데이터를 불러올 수 없습니다. 먼저 크롤링을 통해 엑셀을 만들어주세요")
    exit()
    

# print("사자성어 맞추기 퀴즈 스타트")

# excel_file = "사자성어.xlsx" 

# try:
#     df = pd.read_excel(excel_file).drop_duplicates()
#     if len(df) < 4:
#         messagebox.showerror("에러", "단어가 부족해요!\n크롤링 로봇으로 단어를 4개 이상 모아주세요.")
#         exit()
# except FileNotFoundError:
#     messagebox.showerror("에러", "단어장을 찾을 수 없습니다!\n먼저 엑셀 파일을 만들어주세요.")
#     exit()

    
authors = df["사자성어"].tolist()
quotes = df["뜻"].tolist()

score = 0
totalquestions = 5

quizquestions = random.sample(list(zip(quotes, authors)), totalquestions)

print("\n" + "🍕"*25 + "\n")
print("사자성어 퀴즈")
print(f"총 {totalquestions} 문제를 냅니다. 준비?")
print("\n" + "🍕"*25 + "\n")

for i, questiondata in enumerate(quizquestions, 1):
    
    questionquote, correctanswer = questiondata
    
    print(f"\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ {i}번째 문제 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
    print(f"사자성어뜻: {questionquote} ")
    print("\n 이 뜻인 사자성어는 무었일까요? (보기)")
    
    choices = [correctanswer]
    
    while len(choices) < 4:
        wronganswer = random.choice(authors)
        if wronganswer not in choices:
            choices.append(wronganswer)
            
    random.shuffle(choices)
    
    for num, choice in enumerate(choices):
        print(f"    ({num + 1}) {choice}")
        
    try:
        userinput = int(input(f"\n 정답 번호를 입력해주세요! (1 ~ 4):  \n {correctanswer} ")) - 1
    except ValueError:
        print("\n 잘못된 입력입니다. 숫자를 입력해주세요.")
        continue
    
    if choices[userinput] == correctanswer:
        print("\n 정답입니다!! +1 점!")
        score += 1
    else:
        print(f"\n 앗 오답이에요 ㅠㅠ. 정답은 {correctanswer}")
        
    time.sleep(1)
    
print(f"\n {totalquestions} 문제가 끝났습니다. 당신의 점수는 {score} / {totalquestions} 점입니다")
