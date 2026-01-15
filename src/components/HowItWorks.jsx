import './HowItWorks.css'

// This component now handles "Use Cases"
function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>Решения для любого этапа</h2>
        <div className="steps-grid">
          <div className="work-step">
            <div className="work-number">🐣</div>
            <h3>Начинающий продавец?</h3>
            <p>Мы подберем <strong>высокопродаваемые товары</strong> для твоего быстрого старта на Kaspi. Подскажем с чего начать.</p>
            <button className="text-btn">Оставить заявку</button>
          </div>
          <div className="work-step">
            <div className="work-number">🏢</div>
            <h3>Крупный бизнес?</h3>
            <p>Интеграция с вашей системой учета, персональный менеджер и анализ остатков для максимизации прибыли.</p>
            <button className="text-btn">Связаться</button>
          </div>
          <div className="work-step">
            <div className="work-number">📦</div>
            <h3>Товары под заказ?</h3>
            <p>Настройте кол-во дней предзаказа на сайте. SaleScout меняет цены, а предзаказ не сбивается.</p>
            <button className="text-btn">Попробовать</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
