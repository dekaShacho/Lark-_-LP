import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Play } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredStudies = filter === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.industry === filter);

  const getIndustryColor = (industry: string) => {
    switch(industry) {
      case 'finance': return 'bg-green-100 text-green-600';
      case 'marketing': return 'bg-purple-100 text-purple-600';
      case 'consulting': return 'bg-orange-100 text-orange-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">受講生の声・事例</h2>
          <p className="text-slate-500 mt-1">実際のインタビュー動画で、具体的な成果をご確認いただけます。</p>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
          >
            <option value="all">全ての業種を表示</option>
            <option value="marketing">マーケティング・広告</option>
            <option value="consulting">コンサルティング</option>
            <option value="finance">税理士・社労士</option>
            <option value="other">その他 (エンジニア等)</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((c, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-0 hover:shadow-md transition duration-300 overflow-hidden flex flex-col h-full group">
            {c.youtubeId ? (
              <a 
                href={`https://www.youtube.com/watch?v=${c.youtubeId}`} 
                target="_blank" 
                rel="noreferrer"
                className="block relative h-48 w-full bg-black overflow-hidden"
              >
                <img 
                  src={`https://img.youtube.com/vi/${c.youtubeId}/hqdefault.jpg`} 
                  alt={`Interview with ${c.name}`} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-red-600 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                  YouTubeで再生
                </div>
              </a>
            ) : (
              <div className="h-2 bg-slate-200 w-full"></div>
            )}
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${getIndustryColor(c.industry)} rounded-full flex items-center justify-center font-bold mr-3 text-lg flex-shrink-0`}>
                  {c.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-800 leading-tight">{c.role}</div>
                  <div className="text-xs text-slate-500">{c.name}</div>
                </div>
              </div>
              <div className="space-y-3 mb-4 flex-1">
                <div className="text-sm border-l-2 border-red-300 pl-3">
                  <span className="text-xs text-slate-400 block">課題</span>
                  <span className="text-slate-600">{c.before}</span>
                </div>
                <div className="text-sm border-l-2 border-blue-400 pl-3">
                  <span className="text-xs text-slate-400 block">効果</span>
                  <span className="font-bold text-blue-700">{c.after}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-3">"{c.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;