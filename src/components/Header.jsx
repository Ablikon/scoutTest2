import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import './Header.css'

function Header() {
  const progressBarRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    let requestRunning = null;

    const handleScroll = () => {
      if (requestRunning) return;

      requestRunning = requestAnimationFrame(() => {
        if (progressBarRef.current) {
          const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0
          progressBarRef.current.style.transform = `scaleX(${scroll})`
        }
        requestRunning = null;
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="toggle-track">
              <span className={`toggle-thumb ${theme}`}>
                {theme === 'dark' ? <IoMoonOutline /> : <IoSunnyOutline />}
              </span>
            </span>
          </button>
          <button className="btn-primary small">Попробовать бесплатно</button>
        </div>
      </div>

      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
      ></div>
    </header>
  )
}

export default Header
