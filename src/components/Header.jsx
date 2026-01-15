import './Header.css'
import { useEffect, useState } from 'react'

function Header() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = (totalScroll / windowHeight) * 100
      setScrollProgress(scroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">SmartSolutions</div>
        <nav className="nav">
          <a href="#analytics">Что умеет</a>
          <a href="#reviews">Кто пользуется</a>
          <a href="#pricing">Сколько стоит</a>
          <a href="#consultation">Помощь</a>
          <a href="#blog">Блог</a>
        </nav>
        <button className="primary header-btn">Попробовать</button>
      </div>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    </header>
  )
}

export default Header
