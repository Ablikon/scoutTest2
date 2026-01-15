import './Hero.css'
import { IoArrowForward } from 'react-icons/io5'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">Работает с 2022 года</div>
            <h1 className="hero-title">
              Забирайте 95% продаж на Kaspi.kz
            </h1>
            <p className="hero-subtitle">
              AlgoSeller — это бот автоснижения цен. Он проверяет конкурентов каждые 3 минуты и ставит вашу цену на 1 тенге ниже, чтобы вы всегда были первыми в списке продавцов. Без участия человека, 24/7.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary">
                Попробовать 3 дня бесплатно
              </button>
              <button className="btn-secondary">
                Как это работает <IoArrowForward />
              </button>
            </div>

            <div className="hero-stats">
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
            </div>
          </div>

          <div className="hero-visual">
            <div className="system-diagram">
              <div className="diagram-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="diagram-body">
                <div className="code-line">
                  <span className="code-comment">// Мониторинг рынка</span>
                </div>
                <div className="code-line">
                  <span className="code-purple">if</span> (competitorPrice &lt; myPrice) &#123;
                </div>
                <div className="code-line indent">
                   <span className="code-comment">// Если цена конкурента ниже</span>
                </div>
                <div className="code-line indent">
                   newPrice = competitorPrice - <span className="code-yellow">1 ₸</span>;
                </div>
                 <div className="code-line indent">
                   <span className="code-purple">if</span> (newPrice &gt;= minPrice) &#123;
                </div>
                <div className="code-line indent indent">
                   kaspi.<span className="code-func">updatePrice</span>(newPrice);
                </div>
                <div className="code-line indent">
                   &#125;
                </div>
                <div className="code-line">
                  &#125;
                </div>
                
                <div className="live-status">
                  <div className="status-indicator active"></div>
                  Статус: Вы на 1 месте (19 995 ₸)
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
