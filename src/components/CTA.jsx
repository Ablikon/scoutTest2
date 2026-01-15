import './CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Хотите продавать в 3 раза больше?</h2>
        <p>Попробуйте робота прямо сейчас!</p>
        <p className="sub-desc">Зарегистрироваться и запустить робота можно за 3 минуты. Не нужны особые знания или навыки.</p>
        
        <div className="cta-buttons">
          <button className="primary large">Зарегистрироваться</button>
          <button className="secondary large">Показать в видеозвонке</button>
        </div>
        
        <div className="footer-note">
          Есть вопросы? Созвонимся по видео — покажем как всё работает и поможем настроить!
        </div>
        
      </div>
    </section>
  )
}

export default CTA
