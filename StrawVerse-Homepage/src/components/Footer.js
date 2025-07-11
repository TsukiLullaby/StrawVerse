import React from 'react';

const Footer = ({ language, isDarkMode }) => {
  return (
    <footer className={`w-full py-6 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-300' 
        : 'bg-white text-gray-600'
    }`}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          {language === 'CN' 
            ? '© 2025 TsukiLullaby 保留所有权利。' 
            : '© 2025 TsukiLullaby All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;