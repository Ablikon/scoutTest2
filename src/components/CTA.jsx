import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Хочешь быть в числе быстрорастущих магазинов на Kaspi?</h2>
        <p>Попробуй SaleScout прямо сейчас!</p>
        <p className="sub-desc">Регистрация и запуск сервиса займет ~3 минуты. Не нужно иметь специальные навыки или знать технические термины.</p>
        
        <div className="cta-buttons">
          <button className="primary large">Пройти регистрацию</button>
          <button className="secondary large">Хочу видеозвонок</button>
        </div>
        
        <div className="footer-note">
          Терзают сомнения? С удовольствием сделаем видеозвонок, всё покажем, расскажем, подключим и настроим за тебя!
        </div>
        
        <div className="copyright">© SaleScout 2025</div>
      </div>
    </section>
  )
}

export default CTA
