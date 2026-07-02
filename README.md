페이지 미리보기 https://minsuncha41.github.io/pptt/

# 🎨 AI-Powered Frontend Developer Portfolio

## 📋 개요

생성형 AI를 활용하는 신입 프론트엔드 개발자를 위한 **모던하고 세련된 포트폴리오 웹사이트**입니다.

**특징:**
- ✨ Bento Grid 레이아웃 기반 최신 디자인 트렌드
- 🎯 Intersection Observer를 활용한 부드러운 fade-in 애니메이션
- 🖱️ 호버 효과와 카드 인터랙션
- 📱 완벽한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ⚡ Vanilla JavaScript로 빠른 로딩 속도
- 🎭 SEO 친화적 구조

---

## 🚀 빠른 시작

### 파일 구조

```
portfolio/
├── index.html       # 메인 HTML 파일
├── styles.css       # 커스텀 CSS 스타일
├── script.js        # Vanilla JavaScript
└── README.md        # 이 파일
```

### 사용 방법

1. 세 파일(`index.html`, `styles.css`, `script.js`)을 같은 폴더에 저장합니다.
2. `index.html`을 브라우저에서 열면 포트폴리오가 표시됩니다.
3. 각 섹션을 아래 가이드에 따라 커스터마이징합니다.

---

## 🎯 섹션별 커스터마이징 가이드

### 1. **Hero Section (소개 섹션)**

```html
<!-- index.html에서 찾기 -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
    생성형 AI를 <br>
    <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        활용하는
    </span>
    <br>
    프론트엔드 개발자
</h1>
```

**커스터마이징:**
- 제목 텍스트 변경 가능
- 배경 색상 변경: `bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600` 수정
- 부제목 텍스트 변경 가능

---

### 2. **About Me Section**

```html
<!-- 각 카드의 내용 수정 -->
<p class="text-gray-600 leading-relaxed">
    대우능력개발원 생성형 AI 프론트엔드 개발자 과정을 성공적으로 수료했습니다...
</p>
```

**커스터마이징:**
- 각 카드의 소개글 텍스트 변경
- 아이콘 변경 (SVG 아이콘 코드 수정)
- 배경 색상 변경

---

### 3. **Tech Stack Section**

```html
<!-- 기술 배지 추가/제거 -->
<span class="badge">HTML5</span>
<span class="badge">CSS3</span>
<span class="badge">JavaScript</span>
```

**커스터마이징:**
- 배지 텍스트 추가/삭제
- 새로운 기술 추가: `<span class="badge">새기술</span>`
- 배지 색상 변경: `styles.css`에서 `.badge` 클래스 수정

---

### 4. **Projects Section**

```html
<!-- 프로젝트 카드 수정 -->
<h3 class="text-2xl font-bold mb-2">포트폴리오 웹사이트</h3>
<p class="text-gray-600 text-sm mb-4">
    프로젝트 설명...
</p>
<a href="https://github.com" target="_blank">
    GitHub에서 보기
</a>
```

**커스터마이징:**
- 프로젝트명, 설명, GitHub 링크 변경
- 배경 색상 변경: `bg-gradient-to-br from-blue-500 to-blue-600`
- 아이콘 변경: `💼`, `🎨`, `📱` 등 이모지 변경
- 프로젝트 카드 추가/삭제

---

### 5. **Contact Section**

```html
<!-- 연락처 정보 수정 -->
<a href="mailto:your.email@example.com" class="text-blue-600">
    your.email@example.com
</a>
```

**커스터마이징:**
- 이메일 주소 변경
- GitHub 프로필 URL 변경
- LinkedIn 프로필 URL 변경
- 추가 연락처 추가 가능

---

## 🎨 색상 팔레트 변경

### 주요 색상 코드

| 색상 | 용도 | 코드 |
|------|------|------|
| 파랑 | 주요 악센트 | `#3b82f6` |
| 보라 | 보조 악센트 | `#8b5cf6` |
| 핑크 | 강조 색상 | `#ec4899` |
| 그레이 | 배경, 텍스트 | `#f9fafb`, `#1f2937` |

### 색상 변경 방법

```html
<!-- HTML에서 -->
from-blue-600 to-purple-600  <!-- Tailwind 클래스 변경 -->
```

```css
/* CSS에서 */
.badge {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6); /* 색상 코드 변경 */
}
```

---

## 🎬 애니메이션 및 효과

### Fade-in 효과
- 스크롤할 때 각 섹션이 부드럽게 나타남
- `Intersection Observer API` 사용
- `script.js`에서 동작 조정 가능

### 호버 효과
- 카드 위에 마우스를 올리면 위로 떠오름
- 텍스트 링크에 밑줄 애니메이션 추가
- `styles.css`의 `.card-hover` 클래스에서 조정

### 애니메이션 속도 조정

```css
/* styles.css */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);  /* 20px → 원하는 값 */
    }
}

.card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* 0.3s 조정 */
}
```

---

## 📱 반응형 디자인

### 브레이크포인트

- **모바일**: 640px 이하
- **태블릿**: 641px - 1024px
- **데스크톱**: 1025px 이상

### Tailwind CSS 반응형 클래스

```html
<!-- 모바일에서 작은 텍스트, 데스크톱에서 큰 텍스트 -->
<h1 class="text-4xl sm:text-5xl lg:text-6xl">제목</h1>

<!-- 모바일에서 1열, 데스크톱에서 2열 -->
<div class="grid grid-cols-1 md:grid-cols-2">
```

---

## ⌨️ 키보드 네비게이션

- **Tab**: 다음 요소로 이동
- **Shift + Tab**: 이전 요소로 이동
- **Enter**: 링크/버튼 실행
- **Escape**: 모바일 메뉴 닫기
- **S 키**: 프로젝트 섹션으로 스크롤

---

## 🔧 고급 커스터마이징

### 네비게이션 바 변경

```html
<nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <!-- 네비게이션 링크 수정 -->
</nav>
```

### 섹션 배경색 변경

```html
<section class="py-20 px-4 bg-gray-50">  <!-- bg-gray-50 → 다른 색상 -->
```

### 폰트 변경

`index.html`의 Google Fonts CDN 링크 변경:
```html
<link href="https://fonts.googleapis.com/css2?family=원하는폰트:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## ✅ 성능 최적화

### 이미지 최적화
- 이미지는 WebP 형식 권장
- 1MB 이하 크기 유지
- 레이지 로딩 구현 (script.js 포함)

### 캐싱
- 정적 파일(CSS, JS)은 버전 관리
- 브라우저 캐싱 활용

### 번들 크기
- Tailwind CDN 사용으로 가볍게 유지
- JavaScript는 최소한의 기능만 구현

---

## 🌐 배포 방법

### GitHub Pages
```bash
1. GitHub 저장소 생성
2. index.html, styles.css, script.js 업로드
3. Settings → Pages → Main 브랜치 선택
```

### Vercel
```bash
1. Vercel 가입 (vercel.com)
2. GitHub 연동
3. 저장소 선택 후 배포
```

### Netlify
```bash
1. Netlify 가입 (netlify.com)
2. 파일 드래그 앤 드롭
3. 자동 배포
```

### 전통적인 웹 호스팅
```bash
FTP를 통해 파일 업로드
```

---

## 🐛 문제 해결

### 스타일이 적용되지 않음
- `styles.css` 파일이 같은 폴더에 있는지 확인
- 브라우저 캐시 삭제 (Ctrl+Shift+Delete)

### 자바스크립트가 작동하지 않음
- `script.js` 파일이 같은 폴더에 있는지 확인
- 브라우저 콘솔에서 에러 메시지 확인 (F12)

### 반응형이 깨짐
- 브라우저 창 크기 조정
- 개발자 도구 → 반응형 디자인 모드 활성화

---

## 📚 참고 자료

- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/en-US/
- **Intersection Observer**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

## 📞 연락처

포트폴리오가 마음에 드시나요? 수정이나 추가 기능이 필요하면 연락해주세요!

- **이메일**: your.email@example.com
- **GitHub**: github.com/yourprofile
- **LinkedIn**: linkedin.com/in/yourprofile

---

## 📄 라이선스

이 포트폴리오 템플릿은 자유롭게 사용, 수정, 배포할 수 있습니다.

---

## 🙏 감사합니다!

대우능력개발원에서의 학습 여정을 응원합니다! 🚀

**마지막 수정**: 2024년
**버전**: 1.0
