import StyledButton from '../StyledButton.jsx';

export default function ProjectCard({ title, imageUrl, fundingProgress, pricePerPiece, onClick }) {
  const percent = Math.round((fundingProgress || 0) * 100);

  return (
    <article
      className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.02] border-2 border-[#E8DDD0] group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border-2 border-[#E8DDD0] shadow-md">
          <span className="text-xs font-bold text-[#8B6F47]">{percent}% 달성</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-[#2C2C2C] mb-2 flex items-center gap-2">
          <span className="text-2xl">🐄</span>
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-[#666666]">1조각 가격</span>
          <span className="text-lg font-extrabold text-[#8B6F47]">
            {pricePerPiece.toLocaleString()}
            <span className="text-sm font-semibold text-[#999999]">원</span>
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#666666]">펀딩 진행률</span>
            <span className="text-xs font-bold text-[#8B6F47]">{percent}%</span>
          </div>
          <div className="relative w-full h-3 bg-gradient-to-r from-[#F5EDE0] to-[#FFF5E8] rounded-full overflow-hidden border border-[#E8DDD0]">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <StyledButton
          variant="primary"
          className="w-full"
          onClick={(e) => { e.stopPropagation(); onClick?.(); }}
        >
          <span className="text-base">프로젝트 자세히 보기</span>
          <span className="text-lg">→</span>
        </StyledButton>
      </div>
    </article>
  );
}
