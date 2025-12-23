import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-blue-900 text-white pt-20 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-1 rounded-full text-blue-200 text-sm font-semibold mb-6 border border-blue-400/30">
          2025年 最新のビジネス常識
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          秘書を雇う時代から<br />
          <span className="text-blue-400">30日間で「創る」</span>時代へ
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Larkを活用し、あなたの業務を自動化する「IT秘書」を構築。<br />
          「わかる」だけでなく「<span className="text-white font-bold border-b-2 border-blue-400">プロとして選ばれる</span>」スキルに変える、実践型アウトプット講座。
        </p>

        {/* Quick Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-white">50<span className="text-sm">+</span></div>
            <div className="text-xs text-blue-200">構築事例見放題</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-white">9.4</div>
            <div className="text-xs text-blue-200">講座オススメ度 (10段階)</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-white">54<span className="text-sm">%</span></div>
            <div className="text-xs text-blue-200">月間作業削減率</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-white">30<span className="text-sm">日</span></div>
            <div className="text-xs text-blue-200">最短習得期間</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;