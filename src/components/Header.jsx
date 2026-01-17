import { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { IoSunnyOutline, IoMoonOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

function Header() {
  const { t } = useTranslation()
  const progressBarRef = useRef(null)
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close menu on escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [mobileMenuOpen])

  // Close menu when clicking a nav link
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen, handleKeyDown])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

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

        {/* Desktop Navigation */}
        <nav className="nav nav-desktop">
          <a href="#technology">{t('header.howItWorks')}</a>
          <a href="#results">{t('header.results')}</a>
          <a href="#pricing">{t('header.pricing')}</a>
          <a href="#faq">{t('header.faq')}</a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('header.switchToLight') : t('header.switchToDark')}
          >
            <span className="toggle-track">
              <span className={`toggle-thumb ${theme}`}>
                {theme === 'dark' ? <IoMoonOutline /> : <IoSunnyOutline />}
              </span>
            </span>
          </button>
          <button className="btn-primary small header-cta-desktop">{t('header.tryFree')}</button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <nav
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <a href="#technology" onClick={handleNavClick}>{t('header.howItWorks')}</a>
          <a href="#results" onClick={handleNavClick}>{t('header.results')}</a>
          <a href="#pricing" onClick={handleNavClick}>{t('header.pricing')}</a>
          <a href="#faq" onClick={handleNavClick}>{t('header.faq')}</a>
          <button className="btn-primary mobile-cta">{t('header.tryFree')}</button>
        </div>
      </nav>

      <div
        ref={progressBarRef}
        className="scroll-progress-bar"
      ></div>
    </header>
  )
}

export default Header
