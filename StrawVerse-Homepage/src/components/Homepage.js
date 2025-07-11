import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaEnvelope, FaCode, FaTachometerAlt, FaHeart, FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AboutStrawVerse from './AboutStrawVerse';
import AboutSRMS from './AboutSRMS';

const Homepage = ({ isDarkMode, toggleTheme, language, toggleLanguage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showAboutStrawVerse, setShowAboutStrawVerse] = useState(false);
  const [showAboutSRMS, setShowAboutSRMS] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // 视差动画变换
  const planetTransform1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const planetTransform2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const planetTransform3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const planetTransform4 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const planetTransform5 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const planetTransform6 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  
  const starsTransform = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const dotsTransform = useTransform(scrollYProgress, [0, 1], [0, -10]);
  
  // Logo旋转动画
  const logoRotationY = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 导航栏滚动到指定部分的函数
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 显示关于草莓宇宙页面的函数
  const showStrawVerseAbout = () => {
    window.scrollTo(0, 0); // 重置滚动位置到顶部
    setShowAboutStrawVerse(true);
  };
  
  // 返回主页的函数
  const backToHome = () => {
    window.scrollTo(0, 0); // 重置滚动位置到顶部
    setShowAboutStrawVerse(false);
    setShowAboutSRMS(false);
  };
  
  const showSRMSPage = () => {
    window.scrollTo(0, 0); // 重置滚动位置到顶部
    setShowAboutSRMS(true);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialIcons = [
    { icon: FaGithub, href: "https://github.com/TsukiLullaby", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:398670671@qq.com", label: "Email" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const projects = [
    {
      title: language === 'CN' ? "智慧餐饮管理系统（SRMS）" : "Smart Restaurant Management System (SRMS)",
      description: language === 'CN' ? "前后端分离设计，支持多门店、多角色权限管理，Redis缓存优化" : "Frontend-backend separated design with multi-store, multi-role support and Redis optimization.",
      tech: ["Vue", "Spring Boot", "Redis"],
      color: "from-blue-500 to-purple-600",
      clickable: true,
      onClick: showSRMSPage
    },
    {
      title: language === 'CN' ? "待开发项目A" : "Upcoming Project A",
      description: language === 'CN' ? "敬请期待..." : "Coming soon...",
      tech: ["WIP"],
      color: "from-gray-400 to-gray-600",
      clickable: false
    },
    {
      title: language === 'CN' ? "待开发项目B" : "Upcoming Project B",
      description: language === 'CN' ? "敬请期待..." : "Coming soon...",
      tech: ["WIP"],
      color: "from-gray-400 to-gray-600",
      clickable: false
    }
  ];

  const skills = [
    { name: language === 'CN' ? "前端开发" : "Frontend Development", icon: FaCode, level: 90, color: "text-blue-400" },
    { name: language === 'CN' ? "后端开发" : "Backend Development", icon: FaCode, level: 85, color: "text-green-400" },
    { name: language === 'CN' ? "光电智造" : "Laser Manufacturing", icon: FaHeart, level: 95, color: "text-pink-400" },
    { name: language === 'CN' ? "骑行" : "Motorcycle Riding", icon: FaTachometerAlt, level: 100, color: "text-yellow-400" }
  ];

  // 如果显示关于草莓宇宙页面，渲染该页面
  if (showAboutStrawVerse) {
    return (
      <AboutStrawVerse 
        isDarkMode={isDarkMode} 
        language={language} 
        onBack={backToHome}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
    );
  }

  // 如果显示SRMS页面，渲染该页面
  if (showAboutSRMS) {
    return (
      <AboutSRMS 
        isDarkMode={isDarkMode} 
        language={language} 
        onBack={backToHome}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />
    );
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} relative overflow-hidden transition-colors duration-300`}>
      {/* 导航栏 */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.jpg" 
                alt="StrawVerse Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className={`text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
                StrawVerse
              </span>
            </motion.div>

            {/* 导航链接 */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('welcome')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}
              >
                {language === 'CN' ? '首页' : 'Home'}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}
              >
                {language === 'CN' ? '关于' : 'About'}
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}
              >
                {language === 'CN' ? '技能' : 'Skills'}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}
              >
                {language === 'CN' ? '项目' : 'Projects'}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200 font-medium`}
              >
                {language === 'CN' ? '联系' : 'Contact'}
              </button>
            </div>

            {/* 右侧控制按钮 */}
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <motion.button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'CN' ? '中' : 'EN'}
              </motion.button>
              
              {/* 主题切换 */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'} transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <FaRegLightbulb className="w-4 h-4" /> : <FaLightbulb className="w-4 h-4" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 背景星球 - 带视差效果 */}
      <motion.div
        className="fixed top-10 left-10 w-40 h-40 opacity-30 z-0"
        style={{ y: planetTransform1 }}
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* 土星 */}
        <div className="relative w-full h-full">
          <div className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-600 shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-500 opacity-70"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-yellow-400 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-yellow-300 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-yellow-500 rounded-full opacity-50"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-1/4 right-20 w-28 h-28 opacity-40 z-0"
        style={{ y: planetTransform2 }}
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      >
        {/* 月球 */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500 shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-3 w-3 h-3 bg-gray-600 rounded-full opacity-60"></div>
          <div className="absolute top-6 right-4 w-2 h-2 bg-gray-700 rounded-full opacity-50"></div>
          <div className="absolute bottom-4 left-6 w-4 h-4 bg-gray-600 rounded-full opacity-40"></div>
          <div className="absolute bottom-6 right-2 w-2 h-2 bg-gray-700 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gray-600 rounded-full opacity-50"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-transparent to-gray-800 opacity-30"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-1/4 left-1/4 w-32 h-32 opacity-35 z-0"
        style={{ y: planetTransform3 }}
        animate={{
          rotate: 360,
          scale: [1, 1.08, 1]
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }
        }}
      >
        {/* 火星 */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40"></div>
          <div className="absolute top-3 left-4 w-6 h-2 bg-red-800 rounded-full opacity-50"></div>
          <div className="absolute bottom-5 right-3 w-4 h-3 bg-red-900 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-6 w-3 h-4 bg-red-800 rounded-full opacity-60"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-70"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-1/2 left-1/6 w-36 h-36 opacity-25 z-0"
        style={{ y: planetTransform4 }}
        animate={{
          rotate: -360,
          scale: [1, 1.12, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      >
        {/* 木星 */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 left-0 right-0 h-2 bg-orange-700 opacity-60"></div>
          <div className="absolute top-8 left-0 right-0 h-1 bg-orange-800 opacity-50"></div>
          <div className="absolute top-12 left-0 right-0 h-3 bg-orange-600 opacity-40"></div>
          <div className="absolute bottom-8 left-0 right-0 h-2 bg-orange-700 opacity-60"></div>
          <div className="absolute bottom-4 left-0 right-0 h-1 bg-orange-800 opacity-50"></div>
          <div className="absolute top-1/2 right-4 w-8 h-6 bg-red-600 rounded-full opacity-70 transform -translate-y-1/2"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-10 right-1/3 w-30 h-30 opacity-40 z-0"
        style={{ y: planetTransform5 }}
        animate={{
          rotate: 360,
          scale: [1, 1.15, 1]
        }}
        transition={{
          rotate: { duration: 24, repeat: Infinity, ease: "linear" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      >
        {/* 地球 */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-3 left-2 w-6 h-4 bg-green-500 rounded-full opacity-80"></div>
          <div className="absolute top-6 right-3 w-4 h-6 bg-green-600 rounded-full opacity-70"></div>
          <div className="absolute bottom-4 left-4 w-5 h-3 bg-green-500 rounded-full opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          <div className="absolute top-2 left-6 w-8 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-6 right-2 w-6 h-2 bg-white rounded-full opacity-25"></div>
        </div>
      </motion.div>

      <motion.div
        className="fixed top-1/3 left-1/2 w-20 h-20 opacity-35 z-0"
        style={{ y: planetTransform6 }}
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 5 }
        }}
      >
        {/* 海王星 */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
          <div className="absolute top-1/3 right-2 w-4 h-3 bg-blue-300 rounded-full opacity-60"></div>
        </div>
      </motion.div>

      {/* 背景星星 - 带视差效果 */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: starsTransform }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      {/* 背景小点点 */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: dotsTransform }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
            } opacity-60`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

      {/* 主要内容区域 */}
      <div className="relative z-10 pt-20">
        {/* 欢迎页面 */}
        <section id="welcome" className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="relative inline-block">
                <motion.img
                  src="/logo.jpg"
                  alt="StrawVerse Logo"
                  className="w-32 h-32 rounded-full object-cover shadow-2xl"
                  style={{
                    rotateY: logoRotationY
                  }}
                  animate={{
                    scale: [1, 1.1, 1, 1.05, 1]
                  }}
                  transition={{
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ scale: 1.15 }}
                />
              </div>
            </motion.div>

            {/* 欢迎文字 */}
            <motion.div className="mb-16" variants={itemVariants}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {language === 'CN' ? '欢迎来到草莓宇宙！' : 'Welcome to StrawVerse!'}
                </span>
              </h1>
              <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-8 py-4 rounded-2xl text-xl inline-block border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} shadow-lg mb-8`}>
                {language === 'CN' ? '一个充满创意与可能性的数字世界' : 'A digital world full of creativity and possibilities'}
              </div>
              
              {/* 关于草莓宇宙按钮 */}
              <motion.div className="mt-6">
                <motion.button
                  onClick={showStrawVerseAbout}
                  className={`${isDarkMode ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' : 'bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600'} text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  {language === 'CN' ? '关于草莓宇宙' : 'About StrawVerse'}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* 滚动提示 */}
            <motion.div
              className="mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg mb-4`}>
                {language === 'CN' ? '向下滚动了解更多' : 'Scroll down to learn more'}
              </div>
              <div className={`w-8 h-12 border-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-600'} rounded-full mx-auto relative`}>
                <motion.div
                  className={`w-2 h-4 ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'} rounded-full absolute top-2 left-1/2 transform -translate-x-1/2`}
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 关于我部分*/}
        <section id="about" className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 问候语和姓名 */}
            <motion.div className="mb-6" variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {language === 'CN' ? '你好, 我是XiaJia' : 'Hi, I\'m TsukiLullaby'}
                </span>
              </h1>
              <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} px-6 py-3 rounded-xl text-lg inline-block border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                {language === 'CN' ? '一名独立应用程序开发人员！' : 'An independent application developer!'}
              </div>
            </motion.div>

            {/* 头像 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <div className="relative inline-block">
                <motion.img
                  src="/101.jpg"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>

            {/* 职业描述 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <p className={`text-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Digital Craftsman</p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {language === 'CN' ? '计算机科学与技术学生 / 开发者 / 摩托车爱好者' : 'Computer Science Student / Developer / Motorcycle Enthusiast'}
              </p>
            </motion.div>

            {/* 简介 */}
            <motion.div className="mb-10" variants={itemVariants}>
              <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} max-w-3xl mx-auto`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                  {language === 'CN' ? (
                    <>
                    <p className="mb-2">我是一名热衷于构建数字世界的全栈开发者，专注于创造有意义的用户体验。</p>
                    <p>从前端设计到后端架构，我享受将创意转化为现实的每一个过程。</p>
                    <p>当不在编码时，我喜欢骑着摩托车探索不同的风景，感受速度与自由的魅力。</p>
                    </>):(<>
                    <p className="mb-4">I am a full-stack developer passionate about building digital worlds, focusing on creating meaningful user experiences.</p>
                    <p>From frontend design to backend architecture, I enjoy every process of turning creativity into reality. When not coding, I love riding my motorcycle to explore different landscapes and feel the charm of speed and freedom.</p>
                    </>
                )
                }
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">React</span>
                  <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">Node.js</span>
                  <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm border border-pink-500/30">Vue</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm border border-yellow-500/30">Java</span>
                  <span className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm border border-teal-500/30">Motorcycle</span>
                </div>
              </div>
            </motion.div>

            {/* 社交媒体图标 */}
            <motion.div className="flex justify-center space-x-8 mb-8" variants={itemVariants}>
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDarkMode ? 'bg-gray-800/50 text-gray-400 hover:text-white border-gray-700/50 hover:border-gray-500/50' : 'bg-white/50 text-gray-600 hover:text-gray-900 border-gray-300/50 hover:border-gray-400/50'} backdrop-blur-sm p-4 rounded-full border transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* 技能部分 */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'CN' ? '我的技能' : 'My Skills'}
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-300/50'} backdrop-blur-sm rounded-2xl p-6 border`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className={`w-8 h-8 ${skill.color} mr-4`} />
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-3 mb-2`}>
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color === 'text-blue-400' ? 'from-blue-400 to-blue-600' : skill.color === 'text-green-400' ? 'from-green-400 to-green-600' : skill.color === 'text-pink-400' ? 'from-pink-400 to-pink-600' : 'from-yellow-400 to-yellow-600'}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}%</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 项目展示部分 */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {language === 'CN' ? '我的项目' : 'My Projects'}
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`${isDarkMode ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-300/50'} backdrop-blur-sm rounded-2xl p-6 border hover:shadow-2xl transition-all duration-300 ${
                    project.clickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: project.clickable ? -10 : 0 }}
                  onClick={project.clickable ? project.onClick : undefined}
                >
                  <div className={`w-full h-32 bg-gradient-to-r ${project.color} rounded-xl mb-4 flex items-center justify-center`}>
                    <FaCode className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${isDarkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200/50 text-gray-700'} px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系部分 */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-8"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                {language === 'CN' ? '联系我' : 'Get In Touch'}
              </span>
            </motion.h2>
            
            <motion.p
              className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 leading-relaxed`}
              variants={itemVariants}
            >
              {language === 'CN' 
  ? (
      <>
        <p className="mb-2">我总是对新的机会和有趣的项目保持开放态度。</p>
        <p>如果你有想法想要讨论，或者只是想打个招呼，请随时联系我！</p>
      </>
    )
  : 'I\'m always open to new opportunities and interesting projects. Whether you have an idea to discuss or just want to say hello, feel free to reach out!'
}
            </motion.p>
            
            <motion.div
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:398670671@qq.com"
                className={`${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600'} text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5" />
                <span>{language === 'CN' ? '发送邮件' : 'Send Email'}</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/TsukiLullaby"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700' : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300'} px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 border`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;