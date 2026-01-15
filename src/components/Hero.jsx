import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="astana-hub-badge">
          <span className="badge-icon">🚀</span>
          <span>Резидент <strong>Astana Hub</strong> — международного технопарка</span>
        </div>
        
        <h1>Продавай на Kaspi больше всех конкурентов</h1>
        <p className="subtitle">
          Мы следим за ценами других продавцов каждые 3 минуты и делаем твои товары чуть дешевле.<br/>
          <strong>Ты всегда первый → покупатели выбирают тебя</strong>
        </p>
        
        <div className="cta-group">
          <button className="primary large pulse-btn">Попробовать 3 дня бесплатно</button>
          <p className="cta-note">Без карты • Без обязательств • Работает сразу</p>
        </div>

        <div className="hero-stats-row">
          <div className="hero-stat-card shine">
            <div className="stat-icon">💰</div>
            <div className="big-stat-val">58,1 млрд ₸</div>
            <div className="stat-desc">Продали наши клиенты за прошлый месяц</div>
            <div className="stat-badge">Обновляется каждые 10 минут</div>
          </div>
          <div className="hero-stat-card shine">
            <div className="stat-icon">📈</div>
            <div className="big-stat-val">в 2.5 раза</div>
            <div className="stat-desc">Больше заказов уже в первый месяц</div>
            <div className="stat-badge">Реальный результат</div>
          </div>
        </div>

        <div className="trust-section">
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>Более 1000 магазинов уже увеличили продажи</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>Полностью безопасно для твоего магазина</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
