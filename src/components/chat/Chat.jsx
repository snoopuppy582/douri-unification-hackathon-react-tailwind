import React, { useState } from 'react';
import StyledButton from '../StyledButton.jsx';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 'm1', from: 'farmer', text: '김참여 동무, 투자 감사합네다! 우리 통일소 잘 키워봅세다.' },
    { id: 'm2', from: 'investor', text: '네! 방금 특식 간식 보냈습니다. 잘 먹여주세요~' },
  ]);
  const [input, setInput] = useState('방한복도 곧 보내드릴게요!');

  const send = () => {
    if (!input.trim()) return;
    alert('메시지 전송 성공!');
    setMessages((prev) => [...prev, { id: `m_${Date.now()}`, from: 'investor', text: input }]);
    setInput('');
  };

  return (
    <section className="grid gap-5">
      <header className="bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] rounded-3xl shadow-lg p-6 border-2 border-[#6D5635]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl">🌾</span>
          </div>
          <div>
            <h2 className="text-white text-xl font-extrabold m-0">리철중 농장주</h2>
            <p className="text-white/80 text-sm font-semibold m-0">세포등판 1호</p>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-[#E8DDD0] min-h-96">
        <div className="flex flex-col gap-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.from === 'farmer' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[75%] px-5 py-3.5 rounded-2xl shadow-sm ${
                  m.from === 'farmer'
                    ? 'bg-white border-2 border-[#E8DDD0] text-[#2C2C2C]'
                    : 'bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white'
                }`}
              >
                <p className="m-0 leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-4 bg-white rounded-3xl shadow-xl p-4 border-2 border-[#E8DDD0]">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            className="flex-1 rounded-2xl border-2 border-[#E8DDD0] px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]/30 focus:border-[#8B6F47] transition-all"
            placeholder="메시지를 입력하세요..."
          />
          <StyledButton variant="primary" onClick={send} className="px-6">
            <span>전송</span>
            <span>📤</span>
          </StyledButton>
        </div>
      </div>
    </section>
  );
}