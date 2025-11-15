import StyledButton from '../StyledButton.jsx';
import { useAppState } from '../../context/AppState.jsx';

export default function ActionButtons() {
  const { giveTreat, giveSupplement, giveWinterGift } = useAppState();
  return (
    <div className="bg-gradient-to-br from-[#FFF5E8] to-[#F5EDE0] rounded-3xl p-5 border-2 border-[#E8DDD0]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#2C2C2C] flex items-center gap-2">
          <span className="text-2xl">💝</span>
          <span>우리 송아지 돌보기</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <StyledButton variant="accent" onClick={giveTreat} className="text-left justify-start">
          <div className="flex items-center gap-3 w-full">
            <span className="text-3xl">🍎</span>
            <div className="flex-1">
              <div className="font-bold text-base">특식 간식 주기</div>
              <div className="text-sm opacity-90">맛있는 사과로 행복도 UP!</div>
            </div>
            <div className="text-sm font-bold bg-white/30 px-3 py-1 rounded-full">1,000원</div>
          </div>
        </StyledButton>
        <StyledButton variant="secondary" onClick={giveSupplement} className="text-left justify-start">
          <div className="flex items-center gap-3 w-full">
            <span className="text-3xl">💊</span>
            <div className="flex-1">
              <div className="font-bold text-base">영양제 먹이기</div>
              <div className="text-sm opacity-90">건강한 성장을 위한 필수 영양!</div>
            </div>
            <div className="text-sm font-bold bg-white/30 px-3 py-1 rounded-full">5,000원</div>
          </div>
        </StyledButton>
        <StyledButton variant="outline" onClick={giveWinterGift} className="text-left justify-start">
          <div className="flex items-center gap-3 w-full">
            <span className="text-3xl transition-transform group-hover:scale-110">🧣</span>
            <div className="flex-1">
              <div className="font-bold text-base transition-colors group-hover:text-[#6D5635]">따뜻한 목도리 선물</div>
              <div className="text-sm opacity-70 transition-colors group-hover:opacity-90">추운 겨울을 따뜻하게!</div>
            </div>
            <div className="text-sm font-bold text-[#8B6F47] bg-[#FFF5E8] px-3 py-1 rounded-full border border-[#8B6F47] transition-colors group-hover:bg-[#F5EDE0] group-hover:text-[#6D5635] group-hover:border-[#A68A5E]">3,000원</div>
          </div>
        </StyledButton>
      </div>
    </div>
  );
}