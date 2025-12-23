import React, { useState } from 'react';
import { PLANS } from '../constants';
import { Check, X } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [paymentMode, setPaymentMode] = useState<'full' | 'installment'>('full');

  return (
    <div id="plans" className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">料金プラン</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          あなたの目的に合わせた3つのプラン。全てのプランで「会員サイト無制限閲覧」「個別質問チャット無制限」が利用可能です。
        </p>

        {/* Installment Toggle */}
        <div className="mt-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button 
              onClick={() => setPaymentMode('full')} 
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${paymentMode === 'full' ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              一括払い
            </button>
            <button 
              onClick={() => setPaymentMode('installment')} 
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${paymentMode === 'installment' ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              分割 (最大24回)
            </button>
          </div>
          {paymentMode === 'installment' && (
            <div className="mt-2 text-xs text-orange-600 font-medium animate-fade-in">
              ※ 分割払いはクレジットカードのみ対応。手数料が含まれます。
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {PLANS.map((plan, idx) => {
          const isPrimary = plan.buttonStyle === 'primary';
          const isOutline = plan.buttonStyle === 'outline';
          
          return (
            <div 
              key={idx} 
              className={`
                rounded-xl p-6 transition relative 
                ${plan.popular 
                  ? 'border-2 border-blue-600 shadow-xl bg-white transform md:-translate-y-4' 
                  : 'border border-slate-200 hover:shadow-lg bg-white'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              <div className={`text-lg font-bold mb-2 ${plan.popular ? 'text-slate-800' : 'text-slate-700'}`}>
                {plan.name}
              </div>
              <div className="text-xs text-slate-500 mb-4 h-8">{plan.target}</div>
              
              <div className={`text-3xl font-bold mb-1 ${plan.popular ? 'text-blue-700 text-4xl' : 'text-slate-900'}`}>
                ¥{paymentMode === 'full' ? plan.price.full : plan.price.installment}
              </div>
              
              <div className="text-xs text-slate-400 mb-6">
                {paymentMode === 'full' ? '税別 / 一括' : '税込 / 月々 (24回目安)'}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className={plan.popular ? 'font-medium text-slate-700' : ''}>{feature}</span>
                  </li>
                ))}
                {/* Visual placeholder for missing features compared to higher tiers could go here if needed */}
                {plan.name === "スタートプラン" && (
                   <li className="flex items-start opacity-50">
                     <X className="w-4 h-4 text-slate-300 mr-2 mt-0.5" />
                     <span className="text-slate-400 line-through">個別コンサル</span>
                   </li>
                )}
              </ul>

              <button className={`
                w-full py-3 rounded-lg font-bold transition shadow-sm
                ${isPrimary ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30' : ''}
                ${isOutline ? 'border border-blue-600 text-blue-600 hover:bg-blue-50' : ''}
                ${!isPrimary && !isOutline ? 'border border-slate-400 text-slate-600 hover:bg-slate-100' : ''}
              `}>
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>特典:</strong> 過去の講座閲覧権利 (50万円相当) + 個別質問チャット (20万円相当) + オフ会優先案内 (9万円相当) など、<br className="hidden md:inline" />
          総額300万円相当の実践環境が含まれています。
        </p>
      </div>
    </div>
  );
};

export default PricingSection;