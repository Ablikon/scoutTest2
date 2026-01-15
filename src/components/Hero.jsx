import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="astana-hub-badge">
          <span>Резидент <strong>Astana Hub</strong> — международного технопарка</span>
        </div>
        
        <h1>Увеличь продажи своего Kaspi магазина при помощи умной системы корректировки цен</h1>
        <p className="subtitle">
          По оценке независимого аналитического сервиса, более 90% всех продаж на Kaspi делают магазины, которые стоят в списке продавцов первыми.
        </p>
        
        <div className="cta-group">
          <button className="primary large pulse-btn">Попробовать 3 дня бесплатно</button>
        </div>

        <div className="hero-stats-row">
          <div className="hero-stat-card">
            <div className="big-stat-val">58,1 млрд ₸</div>
            <div className="stat-desc">Общая сумма заказов клиентов SaleScout за предыдущий месяц</div>
            <div className="stat-badge">данные обновляются каждые 10 минут</div>
          </div>
        </div>

        <div className="pie-analogy">
          <p><strong>Представьте пирог</strong> - общее количество заказов за день в Kaspi магазине. Клиенты SaleScout съедают более 80% всего пирога заказов. Остальные 20% пирога делят между собой другие продавцы.</p>
        </div>

        <div className="trust-section">
          <div className="trust-item">
            <span>Магазины, подключившие SaleScout, стоят первыми в товарах более 20 часов в сутки</span>
          </div>
          <div className="trust-item">
            <span>Продавцы с миллионными оборотами доверяют SaleScout</span>
          </div>
          <div className="trust-item">
            <span>Клиенты увеличивают свою прибыль в 2,5 раза уже в первый месяц</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
