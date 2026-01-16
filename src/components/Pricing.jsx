import { useState } from 'react'
import './Pricing.css'
import { IoCheckmark } from 'react-icons/io5'

function Pricing() {
  const [period, setPeriod] = useState(1)

  const periods = [
    { value: 1, label: '1 месяц', discount: 0 },
    { value: 3, label: '3 месяца', discount: 0.10 },
    { value: 6, label: '6 месяцев', discount: 0.15 },
    { value: 12, label: '1 год', discount: 0.25 },
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(Math.round(price))
  }

  const getPrice = (basePrice) => {
    if (basePrice === 'Custom') return 'Custom'
    const discount = periods.find(p => p.value === period).discount
    const discounted = basePrice * (1 - discount)
    // Округляем до сотен
    return formatPrice(Math.round(discounted / 100) * 100)
  }

  const tiers = [
    {
      name: "Start",
      basePrice: 35000,
      desc: "Для небольших магазинов",
      features: ["До 50 товаров мониторинга"]
    },
    {
      name: "Standard",
      basePrice: 50000,
      desc: "Оптимальный для роста",
      features: ["До 500 товаров мониторинга"],
      highlight: true
    },
    {
      name: "Pro",
      basePrice: 80000,
      desc: "Для крупных игроков",
      features: ["До 800 товаров мониторинга"]
    },
    {
      name: "Индивидуальный",
      basePrice: 'Custom',
      desc: "Более 1300 товаров?",
      features: ["Безлимит товаров"]
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Тарифы</h2>
          <p className="subtitle">
            Честная цена за рост продаж. Платите только за то количество товаров, которое нужно мониторить.
          </p>
        </div>

        <div className="period-selector-wrapper">
          <div className="period-selector">
            {periods.map((p) => (
              <button
                key={p.value}
                className={`period-btn ${period === p.value ? 'active' : ''}`}
                onClick={() => setPeriod(p.value)}
              >
                {p.label}
                {p.discount > 0 && (
                  <span className="discount-badge">-{p.discount * 100}%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.highlight ? 'highlight' : ''}`}>
              <div className="tier-header">
                <h3>{tier.name}</h3>
                <p>{tier.desc}</p>
              </div>
              <div className="tier-price">
                <span className="amount">{getPrice(tier.basePrice)}</span>
                {tier.basePrice !== 'Custom' && <span className="currency">₸ / мес</span>}
              </div>
              
              {period > 1 && tier.basePrice !== 'Custom' && (
                <div className="price-saving">
                  Экономия {formatPrice((tier.basePrice - parseInt(getPrice(tier.basePrice).replace(/\s/g, ''))) * period)} ₸
                </div>
              )}

              <div className="tier-features">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <IoCheckmark className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`tier-btn ${tier.highlight ? 'primary' : 'outline'}`}>
                {tier.basePrice === 'Custom' ? 'Связаться' : 'Выбрать'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
