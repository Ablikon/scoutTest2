import { useTranslation } from 'react-i18next'
import './Footer.css'
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-symbol">///</span> TopPrice
            </div>
            <p className="footer-desc">
              {t('footer.description')}
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><IoLogoInstagram /></a>
              <a href="#" className="social-link"><IoLogoWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>{t('footer.product')}</h4>
              <a href="#technology">{t('footer.features')}</a>
              <a href="#pricing">{t('footer.pricing')}</a>
              <a href="#faq">FAQ</a>
            </div>

            <div className="footer-col">
              <h4>{t('footer.company')}</h4>
              <a href="#">{t('footer.aboutUs')}</a>
              <a href="#">{t('footer.contacts')}</a>
              <a href="#">{t('footer.affiliate')}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            {t('footer.copyright')}
          </div>
          <div className="legal-links">
            <a href="#">{t('footer.publicOffer')}</a>
            <a href="#">{t('footer.privacyPolicy')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
