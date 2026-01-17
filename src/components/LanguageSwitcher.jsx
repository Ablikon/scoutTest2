import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IoChevronDown, IoGlobeOutline } from 'react-icons/io5'
import './LanguageSwitcher.css'

const languages = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'kk', label: 'KK', name: 'Қазақша' }
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className={`lang-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <IoGlobeOutline className="globe-icon" />
        <span className="current-lang">{currentLang.label}</span>
        <IoChevronDown className={`chevron ${isOpen ? 'rotated' : ''}`} />
      </button>

      {isOpen && (
        <div className="lang-dropdown" role="listbox" aria-label="Language selection">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${lang.code === currentLang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              role="option"
              aria-selected={lang.code === currentLang.code}
            >
              <span className="lang-code">{lang.label}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
