import { useTranslation } from 'react-i18next'
import './CTA.css'
import { IoLogoWhatsapp } from 'react-icons/io5'

function CTA() {
  const { t } = useTranslation()

  return (
    <section className="cta-slim">
      <div className="container">
        <div className="cta-bar">
          <div className="cta-text">
            <h3>{t('cta.title')}</h3>
            <p>{t('cta.subtitle')}</p>
          </div>
          <div className="cta-action">
            <button className="btn-primary">
              <IoLogoWhatsapp style={{ fontSize: '1.2em' }} /> {t('cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
