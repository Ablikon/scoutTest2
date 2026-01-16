import { useEffect, useRef, useState } from 'react'
import './Header.css'

function Header() {
  const progressBarRef = useRef(null)
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to dark
    return localStorage.getItem('theme') || 'dark'
  })

  // Apply theme to document
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    let requestRunning = null;

    const handleScroll = () => {
      // Если кадр уже запрошен, не перегружаем очередь
      if (requestRunning) return;

      requestRunning = requestAnimationFrame(() => {
        if (progressBarRef.current) {
          const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
          // Защита от деления на 0
          const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0
          
          // Используем transform: scaleX для максимальной производительности (Hardware Acceleration)
          progressBarRef.current.style.transform = `scaleX(${scroll})`
        }
        requestRunning = null;
      });
    }

    // passive: true улучшает производительность скролла на мобильных
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Инициализация при загрузке
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (requestRunning) cancelAnimationFrame(requestRunning)
    }
  }, [])

  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <span className="logo-symbol">///</span> TopPrice
        </div>
        <nav className="nav">
          <a href="#technology">Как это работает</a>
          <a href="#results">Результаты</a>
          <a href="#pricing">Тарифы</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="btn-primary small">Попробовать бесплатно</button>
        </div>
      </div>
      
      {/* Полоса прокрутки управляется через ref */}
      <div 
        ref={progressBarRef}
        className="scroll-progress-bar" 
      ></div>
    </header>
  )
}

export default Header
