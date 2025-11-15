export default function HappinessBar({ value }) {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#F5EDE0] to-[#FFF5E8] rounded-xl overflow-hidden h-[14px] border border-[#E8DDD0] shadow-inner">
      <div
        className="h-full bg-gradient-to-r from-[#FF8A65] to-[#FFB74D] transition-all duration-500 shadow-sm relative"
        style={{ width: `${value}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </div>
  );
}