import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-900 tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Entime <span className="text-sm font-normal text-slate-500 ml-2">Lark講座</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('method')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">学習メソッド</button>
            <button onClick={() => scrollToSection('outcomes')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">実績・データ</button>
            <button onClick={() => scrollToSection('plans')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">料金プラン</button>
            <button onClick={scrollToContact} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm hover:shadow-md">
              お問い合わせ
            </button>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;