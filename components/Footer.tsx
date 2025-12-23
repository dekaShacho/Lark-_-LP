import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 rounded-2xl mb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">株式会社Entime</h4>
            <p className="text-sm mb-2">Larkを活用した業務改善コンサルティング、教育事業を展開。</p>
            <p className="text-sm">&copy; 2025 Entime Co., Ltd. All Rights Reserved.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">特定商取引法に基づく表記</h4>
            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr>
                  <th className="py-2 w-32 font-medium text-slate-500 align-top">運営統括責任者</th>
                  <td className="py-2 text-slate-300">寺山 大夢</td>
                </tr>
                <tr>
                  <th className="py-2 font-medium text-slate-500 align-top">所在地</th>
                  <td className="py-2 text-slate-300">宮崎県宮崎市跡江1358-11</td>
                </tr>
                <tr>
                  <th className="py-2 font-medium text-slate-500 align-top">電話番号</th>
                  <td className="py-2 text-slate-300">080-5248-4253</td>
                </tr>
                <tr>
                  <th className="py-2 font-medium text-slate-500 align-top">メールアドレス</th>
                  <td className="py-2 text-slate-300">info@miyazaki-entime.jp</td>
                </tr>
                <tr>
                  <th className="py-2 font-medium text-slate-500 align-top">支払方法</th>
                  <td className="py-2 text-slate-300">クレジットカード / 銀行振込</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600">
          本ページは提案資料に基づき作成されたデモンストレーション用アプリケーションです。
        </div>
      </div>
    </footer>
  );
};

export default Footer;