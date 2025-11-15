import { useNavigate } from 'react-router-dom';
import StyledButton from '../StyledButton.jsx';
import farm3d from '../../assets/main.png';

export default function ConceptCaption() {
  const navigate = useNavigate();
  return (
    <section className="mb-6">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-[#E8DDD0]">
        <div className="relative">
          <img src={farm3d} alt="3D Farm" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/30 via-transparent to-[#A68A5E]/20" />
        </div>
        <div className="relative bg-gradient-to-br from-[#FFF5E8] via-white to-[#F5EDE0] p-8">
          <div className="mb-5">
            <h1 className="text-4xl font-extrabold text-[#2C2C2C] leading-tight mb-2 flex items-center gap-3">
              <span className="text-5xl">🐮</span>
              <span className="bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] bg-clip-text text-transparent">
                도우리
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-[#8B6F47] leading-tight mb-2">
              게임처럼 키우면
            </h2>
            <h2 className="text-2xl font-bold text-[#A68A5E] leading-tight mb-4">
              진짜 투자가 됩니다
            </h2>
            <p className="text-base text-[#666666] leading-relaxed">
              세포등판에서 함께 키우는 우리의 첫 송아지
            </p>
          </div>
          <StyledButton
            variant="accent"
            className="w-full text-lg"
            onClick={() => navigate('/projects')}
          >
            <span>지금 시작하기</span>
            <span className="text-2xl">🚀</span>
          </StyledButton>
        </div>
      </div>
    </section>
  );
}