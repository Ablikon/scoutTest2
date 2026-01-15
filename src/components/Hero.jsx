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
            <span>Работает с 2020 года</span>
          </div>
          <div className="badge-item">
            <span className="badge-dot"></span>
            <span>Меняет цены 24/7</span>
          </div>
          <div className="badge-item">
            <span className="badge-dot pulse"></span>
            <span>{activeUsers} магазинов уже пользуются</span>
          </div>
        </div>

        {/* Главный блок */}
        <div className="hero-main">
          <div className="hero-left">
            <div className="hero-tag">
              <IoRocketOutline className="tag-icon-svg" />
              <span>Умный помощник для продавцов на Kaspi</span>
            </div>
            
            <h1 className="hero-title">
              Робот следит за ценами<br/>
              <span className="title-highlight">пока вы спите</span>
            </h1>
            
            <p className="hero-description">
              Ваши конкуренты тратят часы, чтобы вручную менять цены. <strong>Наш робот делает это каждые 3 минуты сам</strong>. 
              Результат? Вы целый день на первом месте в выдаче и получаете больше всех заказов.
            </p>

            <div className="hero-cta">
              <button className="btn-primary mega">
                <IoFlashOutline className="btn-icon" />
                <span>Попробовать 3 дня бесплатно</span>
                <div className="btn-shine"></div>
              </button>
              
              <div className="cta-features">
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Карта не нужна</span>
                </div>
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Запустится за 5 минут</span>
                </div>
                <div className="feature-check">
                  <IoCheckmarkCircle />
                  <span>Отключить можно в любой момент</span>
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
                  СЕЙЧАС
                </span>
                <span className="stat-title">Продали за сегодня</span>
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
                <span className="trend-up">↗ В 8 раз больше чем год назад</span>
              </div>
            </div>

            {/* Карточка с фактом */}
            <div className="fact-card">
              <div className="fact-icon-svg">
                <IoTrendingUpOutline />
              </div>
              <p className="fact-text">
                <strong>Как работает:</strong> Робот каждые 3 минуты проверяет цены у конкурентов
                и сразу же меняет вашу цену, чтобы вы были первым в списке. 
                Вам ничего делать не нужно — всё происходит само.
              </p>
              <div className="fact-author">
                <div className="author-avatar">AI</div>
                <div className="author-info">
                  <div className="author-name">Умный робот</div>
                  <div className="author-title">Работает круглосуточно</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Визуальное сравнение */}
        <div className="comparison-block">
          <div className="comparison-title">Почему робот лучше человека?</div>
          <div className="comparison-grid">
            <div className="comparison-item manual">
              <div className="comparison-icon-svg manual">
                <IoPersonOutline />
              </div>
              <div className="comparison-label">Меняете цены сами</div>
              <div className="comparison-metrics">
                <div className="metric">
                  <span className="metric-value bad">2-3 часа</span>
                  <span className="metric-label">на 100 товаров</span>
                </div>
                <div className="metric">
                  <span className="metric-value bad">~4 часа</span>
                  <span className="metric-label">на первом месте</span>
                </div>
                <div className="metric">
                  <span className="metric-value bad">20%</span>
                  <span className="metric-label">от всех продаж</span>
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
              <div className="comparison-label">Робот делает всё сам</div>
              <div className="comparison-metrics">
                <div className="metric">
                  <span className="metric-value good">3 минуты</span>
                  <span className="metric-label">следит постоянно</span>
                </div>
                <div className="metric">
                  <span className="metric-value good">20+ часов</span>
                  <span className="metric-label">на первом месте</span>
                </div>
                <div className="metric">
                  <span className="metric-value good">80%</span>
                  <span className="metric-label">от всех продаж</span>
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
