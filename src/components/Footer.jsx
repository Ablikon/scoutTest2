import './Footer.css'
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-symbol">///</span> AlgoSeller
            </div>
            <p className="footer-desc">
                Сервис управления продажами на маркетплейсах
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><IoLogoInstagram /></a>
              <a href="#" className="social-link"><IoLogoWhatsapp /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Продукт</h4>
              <a href="#technology">Возможности</a>
              <a href="#pricing">Тарифы</a>
              <a href="#faq">FAQ</a>
            </div>
            
            <div className="footer-col">
              <h4>Компания</h4>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Партнерская программа</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © 2024 AlgoSeller. Все права защищены.
          </div>
          <div className="legal-links">
            <a href="#">Публичная оферта</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
