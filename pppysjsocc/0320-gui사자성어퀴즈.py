# import tkinter as tk
#tk.뭐시기에서 tk다 빼버림 tk.레이블 tk.버튼 tk.TK 이런거
from tkinter import *
from tkinter import messagebox
import pandas as pd
import random



print("사자성어 맞추기 퀴즈 스타트")

excel_file = "사자성어.xlsx" 

try:
    df = pd.read_excel(excel_file).drop_duplicates()
    if len(df) < 4:
        messagebox.showerror("에러", "단어가 부족해요!\n크롤링 로봇으로 단어를 4개 이상 모아주세요.")
        exit()
except FileNotFoundError:
    messagebox.showerror("에러", "단어장을 찾을 수 없습니다!\n먼저 엑셀 파일을 만들어주세요.")
    exit()

english_words = df['사자성어'].tolist()
korean_meanings = df['뜻'].tolist()

window = Tk()
window.title("🖥️ 나만의 영단어 마스터 앱")
window.geometry("500x550")

current_score = IntVar(value=0)
current_question_num = 0
correct_answer = ""
total_questions = len(english_words)

quiz_questions = random.sample(list(zip(english_words, korean_meanings)), total_questions)

def load_next_question():
    global current_question_num, correct_answer
    
    if current_question_num == total_questions:
        messagebox.showinfo("학습 완료!", f"축하합니다!\n총 {total_questions}문제 중 {current_score.get()}개를 맞춰 {total_questions * 10 //2} / {current_score.get() * 10 //2}점을 맞추셨습니다!")
        window.destroy()
        return

    question_data = quiz_questions[current_question_num] 
    correct_answer, question_meaning = question_data 
    
    current_question_num += 1
    
    title_label.config(text=f"✨ {current_question_num}/{total_questions}번째 문제 ✨")
    meaning_label.config(text=f"👀 다음 뜻을 가진 사자성어는?\n\n\"{question_meaning}\"")

    # 보기 생성 로직
    choices = [correct_answer]
    while len(choices) < 4:
        wrong_answer = random.choice(english_words)
        if wrong_answer not in choices:
            choices.append(wrong_answer)
            
    random.shuffle(choices)
    
    btn1.config(text=choices[0], command=lambda: check_answer(choices[0]))
    btn2.config(text=choices[1], command=lambda: check_answer(choices[1]))
    btn3.config(text=choices[2], command=lambda: check_answer(choices[2]))
    btn4.config(text=choices[3], command=lambda: check_answer(choices[3]))
    
    result_label.config(text="버튼을 눌러 정답을 맞춰보세요!", fg="black")

def check_answer(selected_word):
    global correct_answer
    
    if selected_word == correct_answer:
        current_score.set(current_score.get() + 1)
        result_label.config(text="🎉 정답입니다!!!", fg="blue")
    else:
        result_label.config(text=f"💥 땡! 정답은 [{correct_answer}]입니다.", fg="red")


    # 1.5초 뒤에 다음 문제로 자동 이동!
    window.after(1500, load_next_question)


# UI 구성
title_label = Label(window, text="✨ 문제 준비 중 ✨", font=("맑은 고딕", 16, "bold"), fg="blue")
title_label.pack(pady=20)

meaning_label = Label(window, text="👀 뜻:\n\n\"", font=("맑은 고딕", 14), bg="white", wraplength=400)
meaning_label.pack(pady=10, padx=20)

btn1 = Button(window, text="보기1", font=("맑은 고딕", 12, "bold"), bg="#FFDDC1", cursor="hand2")
btn1.pack(pady=5, fill="x", padx=80)

btn2 = Button(window, text="보기2", font=("맑은 고딕", 12, "bold"), bg="#FFDDC1", cursor="hand2")
btn2.pack(pady=5, fill="x", padx=80)

btn3 = Button(window, text="보기3", font=("맑은 고딕", 12, "bold"), bg="#FFDDC1", cursor="hand2")
btn3.pack(pady=5, fill="x", padx=80)

btn4 = Button(window, text="보기4", font=("맑은 고딕", 12, "bold"), bg="#FFDDC1", cursor="hand2")
btn4.pack(pady=5, fill="x", padx=80)

result_label = Label(window, text="", font=("맑은 고딕", 14, "bold"))
result_label.pack(pady=15)

score_label = Label(window, text="현재 점수: ", font=("맑은 고딕", 11))
score_label.pack()
score_display = Label(window, textvariable=current_score, font=("맑은 고딕", 14, "bold"), fg="darkgreen")
score_display.pack()

load_next_question()

window.mainloop()