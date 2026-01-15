import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Готовы увеличить продажи в 3 раза?</h2>
        <p>Попробуйте автоматизацию прямо сейчас!</p>
        <p className="sub-desc">Регистрация и запуск займёт ~3 минуты. Не нужны специальные навыки или технические знания.</p>
        
        <div className="cta-buttons">
          <button className="primary large">Пройти регистрацию</button>
          <button className="secondary large">Хочу видеозвонок</button>
        </div>
        
        <div className="footer-note">
          Остались вопросы? Проведём демонстрацию в видеозвонке — покажем все возможности и поможем с настройкой!
        </div>
        
      </div>
    </section>
  )
}

export default CTA
