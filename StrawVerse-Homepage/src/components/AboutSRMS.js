import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowLeft, FaLightbulb, FaRegLightbulb, FaDatabase, FaShieldAlt, FaChartBar, FaUsers, FaMobile, FaPalette } from 'react-icons/fa';

const AboutSRMS = ({ isDarkMode, language, onBack, toggleTheme, toggleLanguage }) => {
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
      {/* 背景星球效果 - 复用AboutStrawVerse的背景 */}
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

      {/* 其他背景星球... */}
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

      {/* 背景星星 */}
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
                StrawSRMS
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {language === 'CN' ? '🍓 智慧餐饮综合管理系统' : '🍓 Smart Restaurant Management System'}
              </span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              {language === 'CN' ? 'StrawSRMS - 多租户 SaaS 餐饮解决方案' : 'StrawSRMS - Multi-tenant SaaS Restaurant Solution'}
            </p>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                v0.0.3
              </span>
              <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                {language === 'CN' ? '专有许可' : 'Proprietary License'}
              </span>
            </div>
            <motion.a
              href="https://srms.strawverse.top"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'CN' ? '🌐 在线体验' : '🌐 Live Demo'}
            </motion.a>
          </motion.div>

          {/* 核心功能 */}
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {language === 'CN' ? '✨ 核心功能' : '✨ Core Features'}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaShieldAlt,
                  title: language === 'CN' ? '多租户架构' : 'Multi-tenant Architecture',
                  desc: language === 'CN' ? '账号数据物理隔离，保障商家数据安全' : 'Physical data isolation ensures merchant data security'
                },
                {
                  icon: FaChartBar,
                  title: language === 'CN' ? '智能数据看板' : 'Smart Dashboard',
                  desc: language === 'CN' ? '实时销售分析 + 菜品TOP5排名' : 'Real-time sales analysis + Top 5 dish rankings'
                },
                {
                  icon: FaUsers,
                  title: language === 'CN' ? '会员管理体系' : 'Membership System',
                  desc: language === 'CN' ? '自定义会员等级与权益规则' : 'Customizable membership levels and benefit rules'
                },
                {
                  icon: FaDatabase,
                  title: language === 'CN' ? 'JWT 安全认证' : 'JWT Security',
                  desc: language === 'CN' ? '基于 Spring Security 的权限控制' : 'Permission control based on Spring Security'
                },
                {
                  icon: FaMobile,
                  title: language === 'CN' ? '多渠道通知' : 'Multi-channel Notifications',
                  desc: language === 'CN' ? '邮件+短信推送服务（开发中）' : 'Email + SMS push service (in development)'
                },
                {
                  icon: FaPalette,
                  title: language === 'CN' ? '主题个性化' : 'Theme Customization',
                  desc: language === 'CN' ? '支持界面主题切换' : 'Support for interface theme switching'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-6 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 技术栈 */}
          <motion.div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} mb-12`} variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {language === 'CN' ? '🛠 技术栈' : '🛠 Tech Stack'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">{language === 'CN' ? '后端技术' : 'Backend'}</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java 8', 'Spring Boot 2.x', 'Spring Security', 'JWT', 'MyBatis-Plus', 'Lombok', 'Maven'].map((tech, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">{language === 'CN' ? '数据库与部署' : 'Database & Deployment'}</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL 8', 'Redis 6', 'Nginx'].map((tech, index) => (
                    <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 最新动态 */}
          <motion.div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} mb-12`} variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {language === 'CN' ? '🚩 最新动态' : '🚩 Latest Updates'}
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3">{language === 'CN' ? 'v0.0.3 亮点更新' : 'v0.0.3 Highlights'}</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• {language === 'CN' ? '会员权益自定义配置功能上线' : 'Member benefit customization feature launched'}</li>
                <li>• {language === 'CN' ? '消息推送服务框架搭建完成' : 'Message push service framework completed'}</li>
                <li>• {language === 'CN' ? '多主题支持优化' : 'Multi-theme support optimization'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{language === 'CN' ? '⏭ 下一版本预告' : '⏭ Next Version Preview'}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'CN' ? '登录安全增强 | 国际化支持 | 多角色权限' : 'Enhanced login security | Internationalization support | Multi-role permissions'}
              </p>
            </div>
          </motion.div>

          {/* 关于草莓宇宙 */}
          <motion.div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'} text-center`} variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              {language === 'CN' ? '🍓 关于草莓宇宙' : '🍓 About StrawVerse'}
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
              {language === 'CN'
                ? 'StrawVerse 是开发者构建的个人技术生态体系，SRMS 是首款落地应用'
                : 'StrawVerse is a personal technical ecosystem built by developers, and SRMS is the first application to be implemented'
              }
            </p>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} italic`}>
              {language === 'CN' ? '"程序员的宇宙，从一行代码开始"' : '"A programmer\'s universe starts with a single line of code"'}
            </p>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} text-sm mt-2`}>
              —— 2025.07.10 {language === 'CN' ? '正式上线' : 'Official Launch'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSRMS;