import styled from 'styled-components';
import TodoTaskList from './TodoTaskList.jsx';
import UploadDiaryForm from './UploadDiaryForm.jsx';
import { useAppState } from '../../context/AppState.jsx';

const Section = styled.section`
  display: grid;
  gap: 24px;
`;

export default function FarmerDashboard() {
  const { farmer, completeTodo } = useAppState();

  return (
    <Section>
      <div className="bg-gradient-to-br from-[#8B6F47] to-[#A68A5E] rounded-3xl p-6 shadow-lg border-2 border-[#6D5635]">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-4xl">🌾</span>
          </div>
          <div>
            <h2 className="text-white text-2xl font-extrabold m-0">농장주 대시보드</h2>
            <p className="text-white/80 text-sm font-semibold m-0">{farmer.name} 님 환영합니다</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FFF5E8] to-[#F5EDE0] rounded-3xl p-5 border-2 border-[#E8DDD0]">
        <h3 className="text-xl font-bold text-[#2C2C2C] flex items-center gap-2 mb-4">
          <span className="text-2xl">✅</span>
          <span>오늘의 할 일</span>
        </h3>
        <TodoTaskList
          tasks={farmer.todoList.map((t) => ({ id: t.id, label: t.text, completed: t.completed }))}
          onComplete={completeTodo}
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#2C2C2C] flex items-center gap-2 mb-4">
          <span className="text-2xl">📸</span>
          <span>육아일기 업로드</span>
        </h3>
        <UploadDiaryForm />
      </div>
    </Section>
  );
}