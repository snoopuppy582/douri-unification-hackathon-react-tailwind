import { useParams, useNavigate } from 'react-router-dom';
import { useAppState } from '../../context/AppState.jsx';
import StyledButton from '../StyledButton.jsx';
import chart0 from '../../assets/geneticchart0.jpg';
import chart1 from '../../assets/geneticchart1.jpg';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, investInProject } = useAppState();
  const project = projects.find((p) => p.id === id);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('info');
  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  const onInvest = () => {
    investInProject(project.id, qty);
    navigate('/investor');
  };

  return (
    <section className="grid gap-5 max-w-[900px] mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DDD0] shadow-xl">
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 text-white/90">
            <span className="text-lg">🌾</span>
            <span className="font-semibold">{project.farmerName}</span>
            <span>•</span>
            <span className="font-medium">{project.farmName}</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-[#FFF5E8] border-2 border-[#E8DDD0] rounded-3xl p-6 shadow-md">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-white rounded-2xl p-4 border-2 border-[#E8DDD0]">
            <div className="text-sm text-[#666666] mb-1">평균 육아비</div>
            <div className="text-2xl font-extrabold text-[#8B6F47]">867만원</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border-2 border-[#E8DDD0]">
            <div className="text-sm text-[#666666] mb-1">목표 판매가</div>
            <div className="text-2xl font-extrabold text-[#5B8C5A]">947~1,090만원</div>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            className={`flex-1 px-5 py-3.5 rounded-2xl font-bold transition-all duration-200 ${
              tab === 'info'
                ? 'bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white shadow-md'
                : 'bg-white border-2 border-[#E8DDD0] text-[#666666] hover:border-[#8B6F47]'
            }`}
            onClick={() => setTab('info')}
          >
            📋 상품 정보
          </button>
          <button
            className={`flex-1 px-5 py-3.5 rounded-2xl font-bold transition-all duration-200 ${
              tab === 'note'
                ? 'bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white shadow-md'
                : 'bg-white border-2 border-[#E8DDD0] text-[#666666] hover:border-[#8B6F47]'
            }`}
            onClick={() => setTab('note')}
          >
            ⚠️ 유의사항
          </button>
        </div>
        {tab === 'info' ? (
          <div className="mt-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border-2 border-[#E8DDD0]">
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                <span className="text-xl">📊</span>
                <span>투자 개요</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-[#F0E8DC]">
                  <span className="text-[#666666]">모집 기간</span>
                  <span className="font-semibold text-[#2C2C2C]">2030.11.01 ~ 2030.11.15</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#F0E8DC]">
                  <span className="text-[#666666]">1조각(1C) 금액</span>
                  <span className="font-bold text-[#8B6F47] text-lg">{project.pricePerPiece.toLocaleString()}원</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#F0E8DC]">
                  <span className="text-[#666666]">농장 모집총액</span>
                  <span className="font-semibold text-[#2C2C2C]">434,200,000원</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#F0E8DC]">
                  <span className="text-[#666666]">거래 금융기관</span>
                  <span className="font-semibold text-[#2C2C2C]">통일미래은행 (NH)</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#666666]">수익구조</span>
                  <span className="font-semibold text-[#2C2C2C]">송아지 취득, 사육, 출하, 경매</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 border-2 border-[#E8DDD0]">
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-4 flex items-center gap-2">
                <span className="text-xl">🧬</span>
                <span>유전능력 (모형)</span>
              </h3>
              <img src={project.id === 'cow0' ? chart0 : chart1} alt="유전능력 차트" className="w-full h-48 object-cover rounded-2xl border-2 border-[#E8DDD0]" />
              {/* 능력치 그래프 바로 아래 */}
              <div className="mt-4 space-y-2">
                {/* 항목 1 */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">🥩 냉도체중 (고기량)</span>
                  <div>
                    <span className="text-blue-600 font-bold">A등급</span>
                    <span className="text-xs text-gray-500 ml-2">+20%</span>
                  </div>
                </div>
                {/* 항목 2 */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">💪 근단면적 (등심)</span>
                  <div>
                    <span className="text-green-600 font-bold">B등급</span>
                    <span className="text-xs text-gray-500 ml-2">+15%</span>
                  </div>
                </div>
                {/* 항목 3 */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">✨ 근내지방도 (마블링)</span>
                  <div>
                    <span className="text-yellow-600 font-bold">C등급</span>
                    <span className="text-xs text-gray-500 ml-2">평균</span>
                  </div>
                </div>
                {/* 항목 4 */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">📏 등지방두께</span>
                  <div>
                    <span className="text-green-600 font-bold">B등급</span>
                    <span className="text-xs text-gray-500 ml-2">최적</span>
                  </div>
                </div>
                {/* 한줄 요약 */}
                <div className="mt-3 pt-3 border-t text-center text-xs text-gray-600">
                  💡 평균 대비 <span className="font-bold text-blue-600">+17% 프리미엄</span> 예상
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="notice-section mt-3">
            <h3 className="font-semibold text-lg mb-4">투자자 유의사항</h3>

            {/* 1. 위험 고지 */}
            <div className="mb-6">
              <h4 className="font-semibold text-red-600 mb-2">⚠️ 투자 위험 고지</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>이 상품은 <strong>예금자보호법에 따라 보호되지 않습니다.</strong></li>
                <li>송아지 폐사, 질병, 시장가격 변동 등으로 <strong>원금 손실(0~100%)</strong>이 발생할 수 있습니다.</li>
                <li>투자 원금 및 수익을 보장하지 않으며, 투자에 따른 손익은 투자자에게 귀속됩니다.</li>
              </ul>
            </div>

            {/* 2. 수수료 안내 */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">💰 수수료 안내</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>플랫폼 이용료: <strong>200원/건</strong></li>
                <li>청약 취소 수수료: <strong>1,000원/건</strong></li>
                <li>성과 보수: 투자 수익 발생 시 <strong>10%</strong> (손실 시 미적용)</li>
              </ul>
            </div>

            {/* 3. 안전 관리 */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">🛡️ 안전 관리 체계</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>남한 축산 연구원의 기술 지원 및 긴급 대응</li>
                <li>사고 발생 시 상세 보고서 제공</li>
                <li>투명한 보상 절차 및 진행 상황 공개</li>
              </ul>
            </div>

            {/* 4. 법적 문구 */}
            <div className="text-sm text-gray-500 border-t pt-4">
              <p>본 투자는 「자본시장과 금융투자업에 관한 법률」에 따른 투자계약증권에 해당하지 않으며, 크라우드펀딩 중개업자는 투자 권유 및 투자 판단에 대한 조언을 하지 않습니다.</p>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-4 bg-gradient-to-br from-white to-[#FFF5E8] border-2 border-[#E8DDD0] rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#666666] font-semibold">투자 수량</span>
            <div className="inline-flex items-center gap-3 bg-white border-2 border-[#E8DDD0] rounded-2xl px-4 py-2.5 shadow-sm">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white font-bold flex items-center justify-center hover:scale-110 transition-transform"
              >
                -
              </button>
              <strong className="text-xl font-extrabold text-[#2C2C2C] min-w-[40px] text-center">{qty}</strong>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8B6F47] to-[#A68A5E] text-white font-bold flex items-center justify-center hover:scale-110 transition-transform"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-sm text-[#666666] mb-1">총 투자금액</div>
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-extrabold text-black">
              {(project.pricePerPiece * qty).toLocaleString()}
            </div>
            <span className="text-lg font-bold text-black">원</span>
          </div>
        </div>
        <StyledButton variant="primary" onClick={onInvest} className="w-full text-lg">
          <span>💰</span>
          <span>지금 투자하기</span>
          <span>→</span>
        </StyledButton>
      </div>
    </section>
  );
}

import React from 'react';