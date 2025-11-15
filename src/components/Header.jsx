import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#FFF8F0] to-[#FFF5E8] border-b-2 border-[#E8DDD0] backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between h-16 px-5 max-w-[480px] mx-auto">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 group"
          aria-label="홈으로 이동"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#A68A5E] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            <span className="text-2xl">🐮</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] bg-clip-text text-transparent font-extrabold tracking-tight text-lg leading-tight">
              도우리
            </span>
            <span className="text-xs text-[#999999] font-medium">우리 함께, 도우(牛)리</span>
          </div>
        </button>
        <div className="relative">
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="w-10 h-10 rounded-full bg-white border-2 border-[#E8DDD0] flex items-center justify-center hover:bg-[#F5EDE0] hover:border-[#8B6F47] transition-all duration-200 shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          {open && (
            <>
              <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-12 bg-white border-2 border-[#E8DDD0] rounded-2xl shadow-xl p-3 min-w-[220px] animate-fadeIn">
                <button
                  className="flex items-center gap-3 w-full text-left rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-[#FFF5E8] hover:to-[#F5EDE0] transition-all duration-200 group"
                  onClick={() => { setOpen(false); navigate('/projects'); }}
                >
                  <span className="text-xl">🏠</span>
                  <span className="font-semibold text-[#2C2C2C] group-hover:text-[#8B6F47]">조각 투자 탭</span>
                </button>
                <button
                  className="flex items-center gap-3 w-full text-left rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-[#FFF5E8] hover:to-[#F5EDE0] transition-all duration-200 group"
                  onClick={() => { setOpen(false); navigate('/investor'); }}
                >
                  <span className="text-xl">💰</span>
                  <span className="font-semibold text-[#2C2C2C] group-hover:text-[#8B6F47]">투자자 육아 탭</span>
                </button>
                <button
                  className="flex items-center gap-3 w-full text-left rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-[#FFF5E8] hover:to-[#F5EDE0] transition-all duration-200 group"
                  onClick={() => { setOpen(false); navigate('/farmer'); }}
                >
                  <span className="text-xl">🌾</span>
                  <span className="font-semibold text-[#2C2C2C] group-hover:text-[#8B6F47]">농장주 관리 탭</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;