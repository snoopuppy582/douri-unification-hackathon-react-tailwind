import React, { createContext, useContext, useMemo, useState } from 'react';
import cow0Img from '../assets/cow0.jpg';
import cow1Img from '../assets/cow1.jpg';
import farmDailyImg from '../assets/farmdaily.png';
import dailyImg from '../assets/daily.jpg';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  // Core metrics for Tamagotchi-style UI (v5.4 baseline)
  const [happiness, setHappiness] = useState(80); // 초기 행복도 80%
  const [health, setHealth] = useState(95); // 초기 건강 95%

  // Investor dummy data
  const [investor, setInvestor] = useState({
    name: '김참여',
    totalInvestment: 0,
    myCowImage: cow0Img,
    currentProjectId: null,
    currentProjectName: null,
  });

  // Farmer dummy data and todo list
  const [farmer, setFarmer] = useState({
    name: '리철중',
    farmName: '세포등판 1호 농장',
    todoList: [
      { id: 'todo_01', type: 'gift', users: ['김참여', '외 50명'], text: '🍎 특식 간식 전달 (51명)', completed: false },
      { id: 'todo_02', type: 'gift', users: ['박투자', '외 10명'], text: '💊 영양제 전달 (11명)', completed: false },
    ],
  });

  // Shared diary feed (initial welcome message)
  const [diaries, setDiaries] = useState([
    {
      id: 'welcome_1',
      imageUrl: farmDailyImg,
      message: '우리 함께, 도우(牛)리 1호 농장에 오신 것을 환영합니다!',
      author: '리철중',
      timestamp: '2030-11-07T10:00:00Z',
    },
  ]);

  // Projects (Bang-Cow style)
  const [projects] = useState([
    {
      id: 'cow0',
      title: '령리한 통일소 1호',
      farmerName: '리철중',
      farmName: '세포등판 1호',
      fundingProgress: 0.75,
      pricePerPiece: 20000,
      imageUrl: cow0Img,
    },
    {
      id: 'cow1',
      title: '백두산 우량주 2호',
      farmerName: '김일군',
      farmName: '백두산 2호 농장',
      fundingProgress: 0.3,
      pricePerPiece: 20000,
      imageUrl: cow1Img,
    },
  ]);

  // Optional micro-invest actions (v5.4)
  const giveTreat = () => {
    alert("1,000원(특식)이 '리철중' 농장주에게 전달되었습니다!");
    setHappiness((prev) => Math.min(100, prev + 10)); // 80% → 90%
    setInvestor((prev) => ({ ...prev, totalInvestment: prev.totalInvestment + 1000 }));
  };

  const giveSupplement = () => {
    alert('5,000원(영양제) 투자가 완료되었습니다. 건강 상태가 개선됩니다.');
    setHealth((prev) => Math.min(100, prev + 5));
    setInvestor((prev) => ({ ...prev, totalInvestment: prev.totalInvestment + 5000 }));
  };

  const giveWinterGift = () => {
    alert('3,000원(목도리) 선물이 전달되었습니다. 송아지가 따뜻합니다!');
    setHappiness((prev) => Math.min(100, prev + 5));
    setInvestor((prev) => ({ ...prev, totalInvestment: prev.totalInvestment + 3000 }));
    // Add a farmer todo to reflect the gift action
    setFarmer((prev) => ({
      ...prev,
      todoList: [
        { id: `todo_winter_${Date.now()}`, type: 'gift', users: ['김참여'], text: '🧣 목도리 선물하기 (1명)', completed: false },
        ...prev.todoList,
      ],
    }));
  };

  const addDiaryEntry = ({ imageUrl, message, author = '리철중' }) => {
    // Phase 2: 농장주 피드백 액션 → 육아일기 업로드
    const entry = {
      id: `d_${Date.now()}`,
      imageUrl,
      message,
      author,
      timestamp: new Date().toISOString(),
    };
    setDiaries((prev) => [entry, ...prev]);
    alert("육아일기가 '김참여' 님 외 50명에게 전송되었습니다.");
    // '할 일' 목록에서 feed 유형 하나 제거 (해당 항목 처리)
    setFarmer((prev) => {
      const idx = prev.todoList.findIndex((t) => t.type === 'feed');
      if (idx === -1) return prev;
      const next = [...prev.todoList];
      next.splice(idx, 1);
      return { ...prev, todoList: next };
    });
  };

  const sendEncouragement = () => {
    alert("응원 메시지가 '리철중' 농장주에게 전달되었습니다!");
  };

  const completeTodo = (id) => {
    setFarmer((prev) => ({
      ...prev,
      todoList: prev.todoList.map((t) => (t.id === id ? { ...t, completed: true } : t)),
    }));
  };

  const selectProject = (projectId) => {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;
    setInvestor((prev) => ({
      ...prev,
      currentProjectId: proj.id,
      currentProjectName: proj.title,
      myCowImage: proj.imageUrl,
    }));
    // Baseline after initial investment: already covered essential costs
    setHappiness(80);
    setHealth(95);
  };

  const investInProject = (projectId, quantity = 1) => {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;
    const amount = proj.pricePerPiece * quantity;
    alert(`투자 완료! [${proj.title}]의 공동육아를 시작합니다.`);
    selectProject(projectId);
    setInvestor((prev) => ({ ...prev, totalInvestment: prev.totalInvestment + amount }));
    // Ensure welcome appears at top when investing
    setDiaries((prev) => [
      {
        id: `welcome_${Date.now()}`,
        imageUrl: dailyImg,
        message: '환영합니다! 공동육아를 시작합니다.',
        author: '리철중',
        timestamp: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const value = useMemo(
    () => ({
      // metrics
      happiness,
      health,
      // entities
      investor,
      farmer,
      diaries,
      projects,
      // actions
      giveTreat,
      giveSupplement,
      giveWinterGift,
      addDiaryEntry,
      sendEncouragement,
      completeTodo,
      selectProject,
      investInProject,
    }),
    [happiness, health, investor, farmer, diaries, projects]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}