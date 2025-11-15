import React from 'react';

const base = 'group inline-flex items-center justify-center gap-2 rounded-2xl shadow-md px-5 py-3.5 text-base font-bold cursor-pointer transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-3 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const map = {
  primary: `${base} bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white hover:shadow-lg hover:from-[#A68A5E] hover:to-[#8B6F47] focus:ring-[#8B6F47]/30`,
  secondary: `${base} bg-gradient-to-r from-[#5B8C5A] to-[#7CB342] text-white hover:shadow-lg hover:from-[#7CB342] hover:to-[#5B8C5A] focus:ring-[#5B8C5A]/30`,
  accent: `${base} bg-gradient-to-r from-[#FF8A65] to-[#FFB74D] text-white hover:shadow-lg hover:from-[#FFB74D] hover:to-[#FF8A65] focus:ring-[#FF8A65]/30`,
  outline: `${base} bg-white border-2 border-[#8B6F47] text-[#8B6F47] hover:bg-gradient-to-r hover:from-[#FFF5E8] hover:to-[#F5EDE0] hover:border-[#A68A5E] hover:shadow-lg focus:ring-[#8B6F47]/20`,
};

export default function StyledButton({ variant = 'primary', className = '', ...props }) {
  const cls = map[variant] || map.primary;
  return <button className={`${cls} ${className}`} {...props} />;
}