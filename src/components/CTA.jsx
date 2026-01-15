import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Хочешь быть в числе быстрорастущих магазинов?</h2>
        <p>Регистрация и запуск сервиса займет ~3 минуты. Не нужно специальных навыков.</p>
        
        <div className="cta-buttons">
            <button className="primary large">Попробовать бесплатно</button>
            <button className="secondary large">Хочу видеозвонок</button>
        </div>
        
        <div className="footer-note">
          Терзают сомнения? С удовольствием сделаем видеозвонок, всё покажем и настроим за тебя!
        </div>
        
        <div className="copyright">© SaleScout 2025</div>
      </div>
    </section>
  )
}

export default CTA
