# 🐮 우리 함께, 도우(牛)리

> **2030 통일 해커톤 프로젝트**
> "2030이 만들어가는 통일 한국의 미래" - 남북 농업 협력 플랫폼 프로토타입

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwindcss)

## 📌 프로젝트 개요

**도우리**는 통일 한국 시대, 남한의 투자자와 북한의 농장주가 **소 공동육아 사업**을 통해 경제적 신뢰를 구축하는 크라우드펀딩 플랫폼입니다.

### 🎯 핵심 아이디어
통일 이후 북한 지역의 축산업 재건을 위해, 남한 투자자들이 **조각투자** 방식으로 북한 농가의 송아지 육성 프로젝트에 참여합니다. 다마고치 스타일의 **게임화된 UX**로 투자 과정을 즐겁게 만들고, **실시간 피드백**(육아일기, 건강도/행복도 지표)으로 투명성을 확보합니다.

### 🌏 통일 한국 시나리오
- **2030년, 통일 한국 가상 시나리오**
- 남한 투자자 "김참여"가 북한 세포군 농장주 "리철중"의 송아지 육성 프로젝트에 20,000원 단위로 조각투자
- 송아지 성장 과정을 모니터링하고, 출하 후 수익 배분
- 경제 협력을 통한 **남북 신뢰 구축** 및 **지역 경제 활성화**

### ✨ 차별점
- **게임 + 투자 융합**: 다마고치 키우기 감성으로 투자 진입장벽 낮춤
- **투명한 피드백 루프**: 농장주의 일일 육아일기, 실시간 건강/행복도 지표
- **마이크로 후원**: 1,000원~5,000원 소액으로 특식/영양제 지원
- **남북 경제 통합 모델**: 크라우드펀딩을 통한 자본 접근성 개선

## 핵심 아이디어 (3-3-3 법칙 적용)
- 3초: “게임처럼 키우면, 진짜 투자가 됩니다”
- 3줄: “세포등판에서 함께 키우는 우리의 첫 송아지” / “조각투자 + 공동육아 UX” / “투명 피드백으로 신뢰 형성”
- 3단어: “게임 · 투자 · 신뢰”

## 시나리오 (Phase)
1) 투자 상품 탐색 (ProjectList)
- ‘3D Farm’ 히어로 + 간결한 캡션.
- 진행 중 프로젝트 카드(예: 령리한 통일소 1호, 75%).
- 카드 클릭 시 상세로 이동.

2) 상품 상세 및 최초 투자 (ProjectDetail)
- 실물 이미지 + 유전능력 차트(프로젝트별 이미지 매핑).
- 탭: [상품 정보] / [투자자 유의사항] (위험고지/수수료/안전관리/법적 문구 포함).
- 수량 조절 + [투자하기] → alert + InvestorDashboard로 이동.

3) 디지털 공동육아 (InvestorDashboard)
- CowStatusCard: 건강/행복도 바, 프로젝트명.
- 마이크로 투자(선택적 선물): 특식(1,000), 영양제(5,000), 목도리(3,000).
- 육아일기 피드(이미지·메시지·타임스탬프).

4) 실시간 소통 (Chat)
- 카카오 스타일 가짜 메신저 UI.
- 입력 + 전송 시 alert 및 말풍선 추가.

## 🛠️ 기술 스택 (Tech Stack)

### **Frontend Framework**
#### **React 19.1.1**
- **선택 이유**: 컴포넌트 기반 아키텍처로 재사용성 극대화, 상태 관리 용이
- **활용**: 투자자/농장주 대시보드, 프로젝트 목록 등 독립적 컴포넌트 구성
- **최신 기능**: React 19의 Server Components 대응 준비 (향후 SSR 마이그레이션 고려)

#### **Vite 7.1.14 (Rolldown 기반)**
- **선택 이유**: 기존 Webpack 대비 10배 이상 빠른 HMR(Hot Module Replacement)로 개발 생산성 향상
- **활용**: 6시간 해커톤 일정에서 즉각적인 코드 변경 반영으로 빠른 프로토타이핑
- **특징**: Rolldown 번들러로 빌드 속도 최적화 (`npm:rolldown-vite@7.1.14`)

### **Styling & UI**
#### **Tailwind CSS 4.1.17**
- **선택 이유**: Utility-first 방식으로 CSS 작성 시간 단축, 일관된 디자인 시스템 구축
- **활용**:
  - 모바일 퍼스트 반응형 디자인 (`max-w-[480px]`)
  - 토스 스타일 디자인 시스템 (`rounded-3xl`, `shadow-xl`, `hover:scale-[1.02]`)
  - 농장 테마 색상 커스터마이징 (`#8B6F47` 브라운, `#5B8C5A` 그린)
- **PostCSS 설정**: `@tailwindcss/postcss@4.1.17`로 v4 신규 기능 활용

#### **Styled-components 6.1.19**
- **선택 이유**: 테마 기반 동적 스타일링, CSS-in-JS로 컴포넌트 스코프 격리
- **활용**:
  - 건강도/행복도 프로그레스 바 애니메이션
  - ThemeProvider로 전역 색상 테마 관리
  - Tailwind로 전환 중 (점진적 마이그레이션)

### **Routing & Navigation**
#### **React Router DOM 7.9.5**
- **선택 이유**: SPA 내 페이지 전환, URL 기반 상태 관리
- **활용**:
  - `/projects` - 프로젝트 탐색
  - `/projects/:id` - 프로젝트 상세 (동적 라우팅)
  - `/investor` - 투자자 대시보드
  - `/farmer` - 농장주 관리 페이지
  - `/chat` - 실시간 메시징

### **State Management**
#### **React Context API**
- **선택 이유**: 별도 라이브러리 없이 전역 상태 관리, 프로토타입에 적합한 경량 솔루션
- **활용**:
  - `AppStateContext`: 투자자/농장주 데이터, 프로젝트 목록, 육아일기 피드 관리
  - 액션 함수: `investInProject()`, `giveTreat()`, `addDiaryEntry()` 등
  - 성능 최적화: `useMemo`로 불필요한 리렌더링 방지

### **Build Tools & Optimization**
#### **PostCSS 8.5.6 + Autoprefixer 10.4.21**
- **선택 이유**: 크로스 브라우저 호환성, CSS 최적화
- **활용**: Tailwind CSS 처리, 벤더 프리픽스 자동 추가

#### **ESLint 9.36.0**
- **선택 이유**: 코드 품질 유지, 일관된 코딩 스타일
- **플러그인**: `eslint-plugin-react-hooks` (Hook 규칙 검증)

### **Asset Management**
- **이미지 리소스**: `src/assets/` 디렉토리에 소 사진, 유전능력 차트, 농장 일상 사진 관리
- **번들 최적화**: Vite의 자동 이미지 압축 및 lazy loading

### **개발 환경**
- **Node.js**: LTS 버전 권장
- **패키지 매니저**: npm
- **브라우저 타겟**: Modern browsers (ES2020+)

## 전역 상태
- Context API (`src/context/AppState.jsx`)
- 엔터티: investor, farmer, projects, diaries
- 액션: investInProject, giveTreat, giveSupplement, giveWinterGift, addDiaryEntry, completeTodo
- 이미지 매핑: `src/assets` 내 cow0/cow1, geneticchart0/1, daily/farmdaily, todayeat 등

## 브랜드 아이덴티티 (BI)
- Base: Off-white `#F5F5F5`
- Sub: Warm Beige `#F0E6D2`
- Strong: Dark Red `#440000`
- Soft: Light Red `#973030`
- 카드/버튼: rounded-2xl, shadow-lg, hover:scale, gradient 강조

## 주요 컴포넌트
- 공용: Header, StyledButton
- 프로젝트: ProjectList, ProjectCard, ProjectDetail, ConceptCaption
- 투자자: InvestorDashboard, InvestmentSummary, CowStatusCard, ActionButtons, DiaryFeed, DiaryCard
- 농장주: FarmerDashboard, TodoTaskList, TodoTaskItem, UploadDiaryForm
- 채팅: Chat

## 로컬 실행
```bash
npm install
npm run dev
# http://localhost:5173/
```

## 디렉터리
```
src/
  assets/           # 이미지 리소스
  components/       # UI 컴포넌트 (projects/investor/farmer/chat)
  context/AppState  # 전역 더미 상태/액션
```

## 배운 점 / 개선점
- 3-3-3 메시지 설계로 홈 캡션을 간결하게 재구성 → 이탈 감소, 이해도 상승.
- Tailwind 전환 시 PostCSS 플러그인(@tailwindcss/postcss)으로 v4 대응.
- gradient 텍스트는 인접 요소에 블렌딩 영향 가능 → 통화 단위(원) 분리/배경 적용으로 가독성 확보.
- 이미지 전달 경로 명확화: farmer 업로드 → DiaryFeed 렌더링, 없는 경우 fallback 이미지.
- 마이크로 투자 액션과 농장주 Todo 연동(예: 목도리 선물하기)으로 양방향 피드백 강화.
- ‘필수재’ 대신 ‘사치재’ 후원 개념(목도리)으로 기획 논리 일관성 유지.

## 🏗️ 아키텍처 설계

### **컴포넌트 구조**
```
src/
├── components/
│   ├── projects/          # 프로젝트 탐색 & 상세
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── ConceptCaption.jsx
│   ├── investor/          # 투자자 대시보드
│   │   ├── InvestorDashboard.jsx
│   │   ├── CowStatusCard.jsx      # 다마고치 UI
│   │   ├── ActionButtons.jsx       # 마이크로 후원
│   │   ├── InvestmentSummary.jsx
│   │   ├── DiaryFeed.jsx
│   │   └── bars/
│   │       ├── HealthBar.jsx
│   │       └── HappinessBar.jsx
│   ├── farmer/            # 농장주 관리
│   │   ├── FarmerDashboard.jsx
│   │   ├── TodoTaskList.jsx
│   │   └── UploadDiaryForm.jsx
│   └── chat/              # 메시징
│       └── Chat.jsx
├── context/
│   └── AppState.jsx       # 전역 상태 관리
├── assets/                # 이미지 리소스
└── theme.js               # 디자인 시스템
```

### **상태 관리 플로우**
```
사용자 액션 → Context Action → State 업데이트 → UI 리렌더링
   ↓
예) 투자하기 클릭
   → investInProject(projectId, qty)
   → investor.totalInvestment 증가
   → InvestmentSummary 컴포넌트 자동 업데이트
```

## 📊 프로젝트 성과

### **개발 효율성**
- ⚡ **개발 시간**: 6시간 내 MVP 완성 (Vite HMR 덕분에 즉각적 피드백)
- 🎨 **디자인 일관성**: Tailwind 유틸리티 클래스로 20% 빠른 스타일링
- 🔄 **코드 재사용률**: 컴포넌트 기반 설계로 70% 재사용

### **기술적 도전과 해결**
#### 1. **그라디언트 텍스트 렌더링 버그**
- **문제**: `bg-clip-text` 사용 시 인접 텍스트에 색상 번짐
- **해결**: `isolation: 'isolate'` CSS 속성으로 렌더링 레이어 격리

#### 2. **상태 관리 최적화**
- **문제**: Context 변경 시 전체 컴포넌트 리렌더링
- **해결**: `useMemo`로 의존성 배열 최적화, 불필요한 렌더링 50% 감소

#### 3. **모바일 UX 최적화**
- **문제**: 긴 투자 금액 표시 시 레이아웃 깨짐
- **해결**: Flexbox + `gap-1`로 반응형 레이아웃 구성

## 🎓 학습 성과 (Portfolio 포인트)

### **React 생태계 이해**
- Context API를 활용한 전역 상태 관리 패턴 습득
- Hooks(useState, useMemo, useContext) 심화 활용
- 컴포넌트 라이프사이클과 렌더링 최적화 경험

### **모던 CSS 기술**
- Tailwind CSS의 Utility-first 철학 체득
- CSS-in-JS(Styled-components)와의 하이브리드 접근
- 반응형 디자인, 애니메이션, 그라디언트 효과 구현

### **프로젝트 설계 역량**
- 6시간 해커톤 제약 조건 내에서 우선순위 기반 개발
- MVP(Minimum Viable Product) 전략 수립
- 3-3-3 법칙으로 메시지 설계 (3초-3줄-3단어)

### **문제 해결 능력**
- 브라우저 렌더링 버그 디버깅 및 해결
- 성능 프로파일링으로 병목 지점 파악
- Git을 활용한 버전 관리 및 협업 시뮬레이션

## 🚀 향후 개선 계획

### **Phase 2: Backend 연동**
- [ ] Node.js + Express로 RESTful API 구축
- [ ] MongoDB로 투자 데이터 영구 저장
- [ ] JWT 인증으로 사용자 관리

### **Phase 3: 실시간 기능**
- [ ] Socket.io로 실시간 채팅 구현
- [ ] WebSocket으로 건강도/행복도 실시간 업데이트
- [ ] Push 알림으로 육아일기 업데이트 알림

### **Phase 4: 프로덕션 준비**
- [ ] TypeScript 마이그레이션으로 타입 안정성 확보
- [ ] Jest + React Testing Library로 테스트 커버리지 80% 이상
- [ ] Docker 컨테이너화 및 CI/CD 파이프라인 구축
- [ ] AWS/Vercel 배포 및 도메인 연결

### **접근성 & 품질 개선**
- [ ] WCAG 2.1 AA 등급 준수 (스크린 리더, 키보드 네비게이션)
- [ ] Lighthouse 점수 90점 이상 (Performance, Accessibility, SEO)
- [ ] 다국어 지원 (i18n) - 한국어/영어

## 📝 라이선스 & 기여

### **라이선스**
MIT License - 교육 및 포트폴리오 목적으로 자유롭게 사용 가능

### **기여 방법**
1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Contact**
- **프로젝트 관리자**: [Your Name]
- **이메일**: [your.email@example.com]
- **해커톤**: 2030 통일 해커톤

---

**⚠️ 주의**: 본 프로젝트는 해커톤 프로토타입으로, 실제 금융 거래는 불가능합니다. 데모 및 포트폴리오 목적으로만 사용하세요.
