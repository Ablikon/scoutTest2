import './Hero.css'
import { IoArrowForward, IoTrendingDown } from 'react-icons/io5'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Забирайте 95% продаж на Kaspi.kz
            </h1>
            <p className="hero-subtitle">
              Наш сервис — это бот автоснижения цен. Он проверяет конкурентов каждые 3 минуты и ставит вашу цену на 1 тенге ниже, чтобы вы всегда были первыми в списке продавцов. Без участия человека, 24/7.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary">
                Попробовать 3 дня бесплатно
              </button>
              <button className="btn-secondary">
                Как это работает <IoArrowForward />
              </button>
            </div>

            {/* <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">4000+</span>
                <span className="stat-desc">Магазинов</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">x2-x4</span>
                <span className="stat-desc">Рост продаж</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-desc">Работает пока вы спите</span>
              </div>
            </div> */}
          </div>

          <div className="hero-visual">
            <div className="pricing-simulation">
              
              {/* Конкурент */}
              <div className="sim-card competitor dimmed">
                <div className="sim-info">
                  <span className="sim-pos">#2</span>
                  <span className="sim-name">Конкурент</span>
                </div>
                <div className="sim-price">20 000 ₸</div>
              </div>

              {/* Действие бота */}
              <div className="sim-action">
                <div className="action-line"></div>
                <div className="action-tag">
                   <IoTrendingDown />
                   Бот снижает на 1 ₸
                </div>
              </div>

              {/* Мы (Вы) */}
              <div className="sim-card us active">
                 <div className="sim-badge">Вы</div>
                <div className="sim-info">
                  <span className="sim-pos">#1</span>
                  <span className="sim-name">Ваш магазин</span>
                </div>
                <div className="sim-price highlight">19 999 ₸</div>
                <div className="live-indicator">
                  <div className="pulse"></div> В топе
                </div>
              </div>

               {/* Другой конкурент */}
               <div className="sim-card competitor dimmed small">
                <div className="sim-info">
                  <span className="sim-pos">#3</span>
                  <span className="sim-name">Другой продавец</span>
                </div>
                <div className="sim-price">20 005 ₸</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
