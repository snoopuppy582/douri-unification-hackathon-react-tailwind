# 우리 함께, 도우(牛)리

실물 연동형 다마고치 + 조각투자 UX를 결합한 웹 목업. 남한 투자자(김참여)와 북한 농장주(리철중)가 “즐거운 투자 경험”을 통해 투명하게 소통하고 신뢰를 쌓도록 설계했습니다. 이 레포는 6시간 내 시연 영상 제작을 목표로 한 프런트엔드 목업입니다.

## 개요
- 목표: 6시간 내 시연 가능한 핵심 기능 목업(Phase 1~4)
- 백엔드: 없음 (더미 데이터/하드코딩, alert/페이지 이동으로 대체)
- 플랫폼: 웹 (모바일 퍼스트)

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

## 기술 스택
- React (Vite)
- Tailwind CSS (토스 스타일: rounded-2xl, shadow, hover scale)
- react-router-dom
- 일부 styled-components (커스텀 바 등, 점진적으로 Tailwind로 통합 중)

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

## 향후 작업
- styled-components 잔존 바/컴포넌트 Tailwind로 통합.
- 접근성(A11y) 개선: 포커스 링, 키보드 네비, 명도 대비 보정.
- 배포 스크립트 추가(버전 태그, 간단 프리뷰 호스팅).

## 라이선스
사전 고지 없이 변경될 수 있습니다. 데모/시연 목적.
