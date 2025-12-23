import React from 'react';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip } from 'recharts';

const dataPie = [
  { name: '顧客・営業管理 (CRM)', value: 1349 },
  { name: '財務・会計', value: 1146 },
  { name: '業務効率化', value: 2187 },
  { name: '講座・コミュニティ', value: 1492 },
  { name: 'マーケティング', value: 400 },
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

const dataBar = [
  { name: '事務作業(月)', before: 100, after: 5 },
  { name: '進捗管理(週)', before: 100, after: 14 },
  { name: 'タスク管理工数', before: 100, after: 20 },
];

const OutcomesSection: React.FC = () => {
  return (
    <div id="outcomes" className="grid md:grid-cols-2 gap-8 scroll-mt-24">
      {/* Left: Deliverables Chart */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800">受講生が構築したシステム</h3>
          <p className="text-sm text-slate-500">卒業生が実際に作成・納品したLark Baseのカテゴリ内訳。</p>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPie}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <PieTooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: Efficiency Chart */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800">導入後の業務効率化実績</h3>
          <p className="text-sm text-slate-500">主要なケーススタディにおける作業時間削減の成果（Before/After %）。</p>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataBar}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <BarTooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
              <Bar dataKey="before" name="Before (基準)" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="after" name="After (削減後)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;