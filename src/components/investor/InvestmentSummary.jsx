import { useAppState } from '../../context/AppState.jsx';

export default function InvestmentSummary() {
  const { investor } = useAppState();
  return (
    <div className="bg-gradient-to-br from-[#8B6F47] to-[#A68A5E] rounded-3xl p-6 shadow-lg border-2 border-[#6D5635]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-3xl">💎</span>
          </div>
          <div>
            <p className="text-white/80 text-sm font-semibold">{investor.name} 님의</p>
            <h2 className="text-white text-lg font-extrabold">총 투자액</h2>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 border-2 border-white/50 shadow-md">
            <div className="flex items-baseline gap-1">
              <div className="text-2xl font-extrabold text-black">
                {investor.totalInvestment.toLocaleString()}
              </div>
              <span className="text-base font-bold text-black">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}