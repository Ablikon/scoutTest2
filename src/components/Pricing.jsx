import './Pricing.css'
import { IoCheckmark } from 'react-icons/io5'

function Pricing() {
  const tiers = [
    {
      name: "Start",
      price: "35 000",
      desc: "Для небольших магазинов",
      features: ["До 50 товаров мониторинга", "Проверка каждые 3 мин", "Техподдержка", "История цен"]
    },
    {
      name: "Standard",
      price: "50 000",
      desc: "Оптимальный для роста",
      features: ["До 500 товаров мониторинга", "Проверка каждые 3 мин", "Массовое управление", "Приоритетная поддержка"],
      highlight: true
    },
    {
      name: "Pro",
      price: "80 000",
      desc: "Для крупных игроков",
      features: ["До 800 товаров мониторинга", "Проверка каждые 3 мин", "Персональный менеджер", "Все функции бота"]
    },
    {
      name: "Индивидуальный",
      price: "Custom",
      desc: "Более 1300 товаров?",
      features: ["Безлимит товаров", "Скорость x2 (опционально)", "Скидки при оплате за год", "Скидка на 2-й магазин"]
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Тарифы</h2>
          <p className="subtitle">
            Честная цена за рост продаж. Платите только за то количество товаров, которое нужно мониторить.
            <br/>Скидки при оплате за 3, 6 и 12 месяцев.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.highlight ? 'highlight' : ''}`}>
              <div className="tier-header">
                <h3>{tier.name}</h3>
                <p>{tier.desc}</p>
              </div>
              <div className="tier-price">
                <span className="amount">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="currency">₸ / мес</span>}
              </div>
              <div className="tier-features">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <IoCheckmark className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`tier-btn ${tier.highlight ? 'primary' : 'outline'}`}>
                {tier.price === 'Custom' ? 'Связаться' : 'Выбрать'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
