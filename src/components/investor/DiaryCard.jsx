import fallbackImg from '../../assets/daily.jpg';

export default function DiaryCard({ imageUrl, message, author, timestamp }) {
  const date = new Date(timestamp);
  return (
    <article className="bg-white rounded-3xl shadow-md overflow-hidden border-2 border-[#E8DDD0] hover:shadow-lg transition-all duration-200">
      <img
        src={imageUrl || fallbackImg}
        alt="농장 일상"
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🌾</span>
          <span className="text-sm font-bold text-[#2C2C2C]">{author}</span>
        </div>
        <p className="text-[#2C2C2C] leading-relaxed mb-3 whitespace-pre-wrap break-words">{message}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#999999] font-medium">
          <span>📅</span>
          <span>{date.toLocaleDateString()}</span>
          <span>•</span>
          <span>🕐</span>
          <span>{date.toLocaleTimeString()}</span>
        </div>
      </div>
    </article>
  );
}