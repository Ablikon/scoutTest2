import './FAQ.css'

function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>А это безопасно? Магазин не заблокируют?</h4>
            <p>Абсолютно безопасно. Мы работаем через официальные методы и соблюдаем правила Kaspi.</p>
          </div>
          <div className="faq-item">
            <h4>Мои данные никто не узнает?</h4>
            <p>Ваши данные зашифрованы и доступны только вам.</p>
          </div>
          <div className="faq-item">
             <h4>Как быстро бот обновляет цены?</h4>
             <p>Каждые 3-10 минут в зависимости от тарифа.</p>
          </div>
           <div className="faq-item">
             <h4>Если конкуренты тоже используют систему?</h4>
             <p>Вы можете настроить минимальную цену, ниже которой не упадете. Выигрывает тот, у кого стратегия лучше настроена.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
