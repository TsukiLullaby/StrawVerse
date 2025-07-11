import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('CN');

  // 主题切换函数
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 语言切换函数
  const toggleLanguage = () => {
    setLanguage(language === 'CN' ? 'EN' : 'CN');
  };

  return (
    <div className={`App min-h-screen flex flex-col ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="flex-grow">
        <Homepage 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
      </div>
      <Footer 
        language={language}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
