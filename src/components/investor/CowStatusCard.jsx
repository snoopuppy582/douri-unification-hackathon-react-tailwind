import { useAppState } from '../../context/AppState.jsx';
import HealthBar from './bars/HealthBar.jsx';
import HappinessBar from './bars/HappinessBar.jsx';

export default function CowStatusCard() {
  const { health, happiness, investor } = useAppState();

  const getHealthEmoji = (value) => {
    if (value >= 80) return '💚';
    if (value >= 50) return '💛';
    return '❤️';
  };

  const getHappinessEmoji = (value) => {
    if (value >= 80) return '😊';
    if (value >= 50) return '😌';
    return '😢';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#E8DDD0]">
      <img
        alt="소 사진"
        src={investor.myCowImage}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 bg-gradient-to-b from-white to-[#FFF8F0]">
        {/* 프로젝트 이름을 이미지 아래로 이동하여 겹침 방지 */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🐮</span>
          <h3 className="text-xl font-extrabold text-[#8B6F47]">
            {investor.currentProjectName || '나의 송아지'}
          </h3>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border-2 border-[#E8DDD0] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getHealthEmoji(health)}</span>
                <strong className="text-base text-[#2C2C2C]">건강 퍼텐셜</strong>
              </div>
              <span className="text-sm font-bold text-[#5B8C5A] bg-[#F5EDE0] px-3 py-1 rounded-full">
                {health}%
              </span>
            </div>
            <HealthBar value={health} />
          </div>

          <div className="bg-white rounded-2xl p-4 border-2 border-[#E8DDD0] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getHappinessEmoji(happiness)}</span>
                <strong className="text-base text-[#2C2C2C]">행복 퍼텐셜</strong>
              </div>
              <span className="text-sm font-bold text-[#FF8A65] bg-[#F5EDE0] px-3 py-1 rounded-full">
                {happiness}%
              </span>
            </div>
            <HappinessBar value={happiness} />
          </div>
        </div>
      </div>
    </div>
  );
}