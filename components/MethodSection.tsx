import React, { useState } from 'react';
import { STEPS_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const MethodSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = STEPS_DATA[activeStep];

  return (
    <div id="method" className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 scroll-mt-24">
      <div className="mb-8 border-b border-slate-100 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">実務マスターまでの5ステップ</h2>
        <p className="text-slate-500 mt-2">「家づくり」に例えた独自の習得プロセス。多くの講座が「理解」で終わる中、Entimeは「検証」まで伴走し、確かな技術を定着させます。</p>
      </div>

      {/* Step Navigation */}
      <div className="grid grid-cols-5 gap-2 mb-8 overflow-x-auto min-w-full">
        {STEPS_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200
              ${activeStep === index
                ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105'
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:shadow-sm'
              }
            `}
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 opacity-70">Step 0{index + 1}</span>
            <span className="font-bold text-sm md:text-lg whitespace-nowrap">{STEPS_DATA[index].title}</span>
          </button>
        ))}
      </div>

      {/* Step Content Display */}
      <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col md:flex-row gap-8 items-center transition-opacity duration-300 animate-fade-in">
        <div className="md:w-1/2">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
            {currentStep.subtitle}
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">{currentStep.title}</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {currentStep.desc}
          </p>
          <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
            <span className="text-blue-600 font-bold flex items-center mb-1">
              <span className="mr-2">★</span> プロの着眼点
            </span>
            <p className="text-sm text-slate-500">{currentStep.point}</p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center w-full">
          <div className="w-full h-48 bg-white rounded-xl shadow-inner border border-slate-200 flex items-center justify-center text-6xl text-blue-200 font-black select-none">
            {currentStep.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodSection;