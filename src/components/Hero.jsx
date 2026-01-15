import './Hero.css'
import { IoRocketOutline, IoTrendingUpOutline } from 'react-icons/io5'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="astana-hub-badge">
          <IoRocketOutline />
          <span>Резидент технопарка <strong>Astana Hub</strong></span>
        </div>
        
        <h1>Стань лидером продаж на Kaspi с автоматической корректировкой цен</h1>
        <p className="subtitle">
          Исследования показывают: почти 9 из 10 покупателей выбирают магазины, расположенные первыми в каталоге товаров.
        </p>
        
        <div className="cta-group">
          <button className="primary large pulse-btn">Начать бесплатный тест на 3 дня</button>
          <p className="cta-note">Карта не нужна • Настройка за 5 минут • Отмена в любой момент</p>
        </div>

        <div className="social-proof">
          <div className="proof-item">
            <div className="proof-number">1000+</div>
            <div className="proof-text">активных магазинов</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">20+ часов</div>
            <div className="proof-text">в топе каждые сутки</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">2.5x</div>
            <div className="proof-text">рост за первый месяц</div>
          </div>
        </div>

        <div className="hero-stat-card main-stat">
          <div className="stat-badge">Обновляется в реальном времени</div>
          <div className="big-stat-val">58.1 млрд ₸</div>
          <div className="stat-desc">Суммарный оборот клиентов за последние 30 дней</div>
        </div>

        <div className="market-share-box">
          <div className="share-header">
            <IoTrendingUpOutline />
            <h3>Распределение заказов на Kaspi</h3>
          </div>
          <div className="share-visual">
            <div className="share-bar">
              <div className="share-segment salescout" data-value="80%">
                <span className="segment-label">Клиенты SaleScout</span>
                <span className="segment-value">80%</span>
              </div>
              <div className="share-segment others" data-value="20%">
                <span className="segment-label">Остальные продавцы</span>
                <span className="segment-value">20%</span>
              </div>
            </div>
          </div>
          <p className="share-desc">Магазины с автоматизацией получают подавляющее большинство заказов в своей категории</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
