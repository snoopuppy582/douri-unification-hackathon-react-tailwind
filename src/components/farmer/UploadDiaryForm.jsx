import StyledButton from '../StyledButton.jsx';
import { useState } from 'react';
import { useAppState } from '../../context/AppState.jsx';
import todayEatImg from '../../assets/todayeat.jpg';

export default function UploadDiaryForm() {
  const { addDiaryEntry } = useAppState();
  const [message, setMessage] = useState('오늘 사료 맛있게 먹었습니다!');
  const imageUrl = todayEatImg;

  const onSubmit = (e) => {
    e.preventDefault();
    addDiaryEntry({ imageUrl, message });
  };

  return (
    <div className="bg-white border-2 border-[#E8DDD0] rounded-3xl shadow-lg p-6">
      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="grid gap-3">
          <label className="text-sm font-bold text-[#666666] flex items-center gap-2">
            <span>🖼️</span>
            <span>사진 미리보기</span>
          </label>
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8DDD0]">
            <img src={imageUrl} alt="미리보기" className="w-full h-48 object-cover" />
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border-2 border-[#E8DDD0] shadow-md">
              <span className="text-xs font-bold text-[#8B6F47]">미리보기</span>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <label className="text-sm font-bold text-[#666666] flex items-center gap-2">
            <span>✍️</span>
            <span>투자자에게 보낼 메시지</span>
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border-2 border-[#E8DDD0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47] transition-all resize-none"
            placeholder="오늘의 소식을 투자자들과 공유해보세요..."
          />
        </div>
        <StyledButton variant="primary" type="submit" className="w-full">
          <span>📸</span>
          <span>육아일기 업로드</span>
        </StyledButton>
      </form>
    </div>
  );
}