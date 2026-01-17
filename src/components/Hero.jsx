import { useTranslation } from 'react-i18next'
import './Hero.css'
import { IoArrowForward, IoTrendingDown } from 'react-icons/io5'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              {t('hero.title')}
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>

            <div className="hero-actions">
              <button className="btn-primary">
                {t('hero.tryFree3Days')}
              </button>
              <button className="btn-secondary">
                {t('hero.howItWorks')} <IoArrowForward />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="pricing-simulation">

              <div className="sim-card competitor dimmed">
                <div className="sim-info">
                  <span className="sim-pos">#2</span>
                  <span className="sim-name">{t('hero.competitor')}</span>
                </div>
                <div className="sim-price">20 000 ₸</div>
              </div>

              <div className="sim-action">
                <div className="action-line"></div>
                <div className="action-tag">
                   <IoTrendingDown />
                   {t('hero.botReduces')}
                </div>
              </div>

              <div className="sim-card us active">
                 <div className="sim-badge">{t('hero.you')}</div>
                <div className="sim-info">
                  <span className="sim-pos">#1</span>
                  <span className="sim-name">{t('hero.yourStore')}</span>
                </div>
                <div className="sim-price highlight">19 999 ₸</div>
                <div className="live-indicator">
                  <div className="pulse"></div> {t('hero.inTop')}
                </div>
              </div>

               <div className="sim-card competitor dimmed small">
                <div className="sim-info">
                  <span className="sim-pos">#3</span>
                  <span className="sim-name">{t('hero.otherSeller')}</span>
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
