import './Hero.css'
import { IoRocketOutline, IoFlashOutline, IoCheckmarkCircle, IoTrendingUpOutline, IoPersonOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'

function Hero() {
  const [revenue, setRevenue] = useState(0)
  const [activeUsers, setActiveUsers] = useState(847)
  
  useEffect(() => {
    // Анимация счетчика выручки
    const target = 1000000000 // 1 млрд
    const duration = 3000
    const increment = target / (duration / 50)
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setRevenue(target)
        clearInterval(timer)
      } else {
        setRevenue(Math.floor(current))
      }
    }, 50)
    
    // Анимация активных пользователей
    const usersTimer = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    
    return () => {
      clearInterval(timer)
      clearInterval(usersTimer)
    }
  }, [])

  return (
    <section className="hero-new">
      {/* Floating элементы на фоне */}
      <div className="hero-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        {/* Верхняя панель с бейджами */}
        <div className="hero-badges">
          <div className="badge-item glow">
            <IoRocketOutline />
            <span>Резидент Astana Hub</span>
          </div>
          <div className="badge-item">
            <span className="badge-dot"></span>
            <span>Draper University Alumni</span>
          </div>
          <div className="badge-item">
            <span className="badge-dot pulse"></span>
            <span>{activeUsers} активных продавцов онлайн</span>
          </div>
        </div>

        {/* Главный блок */}
        <div className="hero-main">
          <div className="hero-left">
            <div className="hero-tag">
              <IoRocketOutline className="tag-icon-svg" />
              <span>Первый казахстанский SaaS для маркетплейсов</span>
            </div>
            
            <h1 className="hero-title">
              Автопилот для<br/>
              <span className="title-highlight">продаж на Kaspi</span>
            </h1>
            
            <p className="hero-description">
              Пока конкуренты вручную меняют цены часами, <strong>SaleScout делает это каждые 3 минуты</strong>. 
              Результат? Вы в топе выдачи 20+ часов в сутки и забираете 80% заказов категории.
            </p>

            <div className="hero-cta">
              <button className="btn-primary mega">
                <IoFlashOutline className="btn-icon" />
                <span>Протестировать 3 дня бесплатно</span>
                <div className="btn-shine"></div>
              </button>
              
              <div className="cta-features">
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Без карты</span>
                </div>
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Готов за 5 минут</span>
                </div>
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Отмена в 1 клик</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* Живая статистика */}
            <div className="stats-card animated-card">
              <div className="stat-header">
                <span className="stat-badge live">
                  <span className="live-dot"></span>
                  LIVE
                </span>
                <span className="stat-title">Оборот за сегодня</span>
              </div>
              <div className="stat-value">
                {(revenue / 1000000).toFixed(1)}M ₸
              </div>
              <div className="stat-chart">
                <div className="chart-bar" style={{height: '60%'}}></div>
                <div className="chart-bar" style={{height: '80%'}}></div>
                <div className="chart-bar" style={{height: '45%'}}></div>
                <div className="chart-bar active" style={{height: '95%'}}></div>
                <div className="chart-bar" style={{height: '70%'}}></div>
                <div className="chart-bar" style={{height: '88%'}}></div>
              </div>
              <div className="stat-footer">
                <span className="trend-up">↗ +847% за последний год</span>
              </div>
            </div>

            {/* Карточка с фактом */}
            <div className="fact-card">
              <div className="fact-icon-svg">
                <IoTrendingUpOutline />
              </div>
              <p className="fact-text">
                <strong>История основания:</strong> В 2020 во время пандемии Рустам торговал смартфонами и заметил: 
                продажи уходят к тому, кто дешевле на 1₸. Попросил стажёра написать скрипт — выручка взлетела. 
                Так родился SaleScout.
              </p>
              <div className="fact-author">
                <div className="author-avatar">РЖ</div>
                <div className="author-info">
                  <div className="author-name">Рустам Жуаспаев</div>
                  <div className="author-title">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Визуальное сравнение */}
        <div className="comparison-block">
          <div className="comparison-title">Почему автоматизация побеждает ручную работу?</div>
          <div className="comparison-grid">
            <div className="comparison-item manual">
              <div className="comparison-icon-svg manual">
                <IoPersonOutline />
              </div>
              <div className="comparison-label">Ручное управление</div>
              <div className="comparison-metrics">
                <div className="metric">
                  <span className="metric-value bad">2-3 часа</span>
                  <span className="metric-label">на 100 товаров</span>
                </div>
                <div className="metric">
                  <span className="metric-value bad">~4 часа</span>
                  <span className="metric-label">в топе выдачи</span>
                </div>
                <div className="metric">
                  <span className="metric-value bad">20%</span>
                  <span className="metric-label">доля продаж</span>
                </div>
              </div>
            </div>

            <div className="vs-divider">
              <span>VS</span>
            </div>

            <div className="comparison-item auto">
              <div className="comparison-icon-svg auto">
                <IoFlashOutline />
              </div>
              <div className="comparison-label">SaleScout</div>
              <div className="comparison-metrics">
                <div className="metric">
                  <span className="metric-value good">3 минуты</span>
                  <span className="metric-label">постоянный мониторинг</span>
                </div>
                <div className="metric">
                  <span className="metric-value good">20+ часов</span>
                  <span className="metric-label">в топе выдачи</span>
                </div>
                <div className="metric">
                  <span className="metric-value good">80%</span>
                  <span className="metric-label">доля продаж</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
