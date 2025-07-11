import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowLeft, FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const AboutStrawVerse = ({ isDarkMode, language, onBack, toggleTheme, toggleLanguage }) => {
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

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen relative overflow-hidden transition-colors duration-300`}>
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

      {/* 背景小点点 - 只在滚动时向上飘 */}
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

      {/* 导航栏 */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 返回按钮 */}
            <motion.button
              onClick={onBack}
              className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="font-medium">{language === 'CN' ? '返回首页' : 'Back to Home'}</span>
            </motion.button>

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

            {/* 右侧控制按钮 */}
            <div className="flex items-center space-x-4">
              {/* 语言切换 */}
              <motion.button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-200`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language}
              </motion.button>
              
              {/* 主题切换 */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors duration-200`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? <FaLightbulb className="w-5 h-5" /> : <FaRegLightbulb className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 主要内容 */}
      <div className="relative z-10 pt-24 px-6 pb-12">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 标题 */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {language === 'CN' ? '草莓宇宙 StrawVerse' : 'StrawVerse'}
              </span>
            </h1>
          </motion.div>

          {/* 内容区域 */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* 介绍 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN' 
                  ? 'StrawVerse，中文名"草莓宇宙"，是一个由开发者 TsukiLullaby 独立构建的数字创意生态系统。它不仅是一个技术实验场，更是一个承载理想与热情的个人数字宇宙。'
                  : 'StrawVerse is a digital creative ecosystem independently built by developer TsukiLullaby. It is not only a technical experimental field, but also a personal digital universe that carries ideals and passion.'
                }
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {language === 'CN'
                  ? '草莓宇宙的诞生，源于一个简单却坚定的信念：代码不仅是工具，它也可以承载创造力与梦想。'
                  : 'The birth of StrawVerse stems from a simple yet firm belief: code is not just a tool, it can also carry creativity and dreams.'
                }
              </p>
            </div>

            {/* 核心构想 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🌌 核心构想' : '🌌 Core Vision'}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {language === 'CN'
                  ? '这个宇宙的核心构想是自洽的技术生态：每一个项目都是一颗"星球"，围绕着开发者的技能栈和兴趣自转公转，最终构建出一个有生命、有温度、有逻辑闭环的数字世界。'
                  : 'The core concept of this universe is a self-consistent technical ecosystem: each project is a "planet" that rotates around the developer\'s skill stack and interests, ultimately building a digital world with life, warmth, and logical closure.'
                }
              </p>
            </div>

            {/* 第一颗星球 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🌍 第一颗星球' : '🌍 First Planet'}
              </h2>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'CN' ? 'StrawSRMS：智慧餐饮综合管理系统' : 'StrawSRMS: Smart Restaurant Management System'}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {language === 'CN'
                  ? 'StrawSRMS 是草莓宇宙中首个落地的系统化产品，基于 Spring Boot + Vue 技术栈开发，旨在为中小型餐饮商户提供智能化、模块化、低门槛的 SaaS 解决方案。项目实现了多租户架构、会员系统、数据可视化、权限控制等关键功能，具备良好的扩展性与可商业化潜力。'
                  : 'StrawSRMS is the first systematic product launched in StrawVerse, developed based on Spring Boot + Vue technology stack, aiming to provide intelligent, modular, and low-threshold SaaS solutions for small and medium-sized catering merchants. The project implements key functions such as multi-tenant architecture, membership system, data visualization, and permission control, with good scalability and commercial potential.'
                }
              </p>
            </div>

            {/* 设计理念 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🌱 设计理念' : '🌱 Design Philosophy'}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN' ? '草莓宇宙不仅是代码的集合，更是理念的表达。它倡导：' : 'StrawVerse is not just a collection of code, but an expression of philosophy. It advocates:'}
              </p>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed space-y-2 ml-6`}>
                <li>• {language === 'CN' ? '独立创造：一个人也能完成从需求分析到系统部署的闭环实践' : 'Independent Creation: One person can complete the closed-loop practice from requirement analysis to system deployment'}</li>
                <li>• {language === 'CN' ? '极简设计：界面美观，交互简洁，功能可控' : 'Minimalist Design: Beautiful interface, simple interaction, controllable functions'}</li>
                <li>• {language === 'CN' ? '可生长性：每一个系统都可以不断进化，从玩具级原型走向成熟产品' : 'Growability: Every system can continuously evolve from toy-level prototypes to mature products'}</li>
                <li>• {language === 'CN' ? '技术审美：代码应该有架构的节奏，也该有审美的温度' : 'Technical Aesthetics: Code should have the rhythm of architecture and the warmth of aesthetics'}</li>
              </ul>
            </div>

            {/* 未来规划 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🔭 未来规划' : '🔭 Future Plans'}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN' ? 'StrawVerse 将逐步拓展多个项目模块，包括但不限于：' : 'StrawVerse will gradually expand multiple project modules, including but not limited to:'}
              </p>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed space-y-2 ml-6`}>
                <li>🧾 {language === 'CN' ? '个人文档站系统（StrawDocs）' : 'Personal Documentation System (StrawDocs)'}</li>
                <li>👨‍💻 {language === 'CN' ? '开发者博客引擎（StrawBlog）' : 'Developer Blog Engine (StrawBlog)'}</li>
                <li>🧠 {language === 'CN' ? 'AI 生产力工具集成平台' : 'AI Productivity Tools Integration Platform'}</li>
                <li>🧾 {language === 'CN' ? '电子发票与收银系统' : 'Electronic Invoice and POS System'}</li>
                <li>🔒 {language === 'CN' ? '店铺级权限 SaaS 管理后台' : 'Store-level Permission SaaS Management Backend'}</li>
              </ul>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mt-4`}>
                {language === 'CN' ? '每一个系统，都是宇宙的一部分，它们彼此独立，又彼此联动。' : 'Each system is part of the universe, they are independent of each other, yet interconnected.'}
              </p>
            </div>

            {/* 宇宙理念 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🪐 我想做的，是宇宙，而不是一个项目' : '🪐 What I Want to Build is a Universe, Not Just a Project'}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN'
                  ? '草莓宇宙不是某个"项目集合"的代称，它是我在数字时代的身份表达。它代表我对世界的思考方式、对技术的理解方式、对美与秩序的追求方式。'
                  : 'StrawVerse is not a synonym for some "project collection", it is my identity expression in the digital age. It represents my way of thinking about the world, my way of understanding technology, and my way of pursuing beauty and order.'
                }
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {language === 'CN'
                  ? '在这个宇宙中，没有 KPI，没有模板，也没有"做出来能赚钱吗"这种问题。它是我对技术的信仰，也是我与现实和解的一种方式。'
                  : 'In this universe, there are no KPIs, no templates, and no questions like "can this make money?". It is my faith in technology and my way of reconciling with reality.'
                }
              </p>
            </div>

            {/* 结语 */}
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🧑‍🚀 写在最后' : '🧑‍🚀 Final Words'}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN'
                  ? '或许它还很小，也许并不完美，但它是真实的，是活的，是生长着的。'
                  : 'Perhaps it is still small, maybe not perfect, but it is real, alive, and growing.'
                }
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                {language === 'CN'
                  ? '草莓宇宙不是终点，它只是我作为一名开发者，向这个世界发出的第一束信号。在这个数字宇宙里，每一行代码，都是我与世界对话的语言。'
                  : 'StrawVerse is not the end, it is just the first signal I send to the world as a developer. In this digital universe, every line of code is my language for dialogue with the world.'
                }
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                {language === 'CN'
                  ? '如果你也有自己的"宇宙计划"，欢迎一起探索。'
                  : 'If you also have your own "universe plan", welcome to explore together.'
                }
              </p>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-right italic`}>
                <p>—— TsukiLullaby · 2025.07.10</p>
                <p>{language === 'CN' ? '草莓宇宙正式上线纪念日' : 'StrawVerse Official Launch Anniversary'}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutStrawVerse;