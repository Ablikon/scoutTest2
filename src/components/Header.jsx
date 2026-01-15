import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="logo">
          <span className="logo-symbol">///</span> AlgoSeller
        </div>
        <nav className="nav">
          <a href="#technology">Как это работает</a>
          <a href="#results">Результаты</a>
          <a href="#pricing">Тарифы</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <div className="header-actions">
          <button className="btn-text">Войти</button>
          <button className="btn-primary small">Попробовать бесплатно</button>
        </div>
      </div>
    </header>
  )
}

export default Header
