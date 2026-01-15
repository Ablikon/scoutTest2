import './Hero.css'
import { IoRocketOutline } from 'react-icons/io5'

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

        <div className="analogy-box">
          <div className="analogy-visual">
            <div className="pie-chart">
              <div className="pie-slice main"></div>
              <div className="pie-slice small"></div>
            </div>
          </div>
          <p><strong>Представь торт</strong> — это все заказы за день. Клиенты SaleScout забирают <strong>80% торта</strong>, остальные продавцы делят между собой уже остатки.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
