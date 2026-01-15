import './Pricing.css'
import { useState } from 'react'
import { IoCheckmarkCircleOutline, IoFlashOutline, IoRocketOutline, IoTrophyOutline } from 'react-icons/io5'

function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const plans = [
    {
      name: "Мини",
      price: "35 000",
      period: "месяц",
      icon: IoFlashOutline,
      color: "#3B82F6",
      features: [
        "До 50 товаров",
        "Скорость x2",
        "Все фишки SaleScout",
        "Базовая аналитика"
      ],
      badge: null
    },
    {
      name: "Стандарт",
      price: "50 000",
      period: "месяц",
      icon: IoRocketOutline,
      color: "#2563EB",
      features: [
        "До 500 товаров",
        "История продаж",
        "Для небольших магазинов",
        "Email поддержка"
      ],
      badge: null
    },
    {
      name: "Бизнес",
      price: "80 000",
      period: "месяц",
      icon: IoTrophyOutline,
      color: "#3B82F6",
      features: [
        "До 800 товаров",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Персональный менеджер"
      ],
      badge: "Популярный"
    },
    {
      name: "PRO",
      price: "100 000",
      period: "месяц",
      icon: IoTrophyOutline,
      color: "#1D4ED8",
      features: [
        "До 1300 товаров",
        "Для опытных",
        "VIP поддержка 24/7",
        "Индивидуальные настройки"
      ],
      badge: null
    }
  ]

  return (
    <section className="pricing-new">
      <div className="pricing-bg">
        <div className="pricing-glow"></div>
      </div>

      <div className="container">
        <div className="pricing-header">
          <h2>Выберите свой план роста</h2>
          <p className="pricing-intro">Все тарифы включают защиту от архивации, фильтры и синхронизацию остатков</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div 
                key={index}
                className={`plan-card ${plan.badge ? 'popular' : ''} ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{'--plan-color': plan.color}}
              >
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                
                <div className="plan-icon" style={{background: `linear-gradient(135deg, ${plan.color}22, ${plan.color}11)`}}>
                  <IconComponent style={{color: plan.color}} />
                </div>

                <h3 className="plan-name">{plan.name}</h3>
                
                <div className="plan-price-wrapper">
                  <div className="plan-price" style={{color: plan.color}}>
                    {plan.price}
                    <span className="currency">₸</span>
                  </div>
                  <div className="plan-period">в {plan.period}</div>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <IoCheckmarkCircleOutline style={{color: plan.color}} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="plan-btn" style={{background: plan.color}}>
                  Попробовать бесплатно
                </button>

                <div className="plan-shine"></div>
              </div>
            )
          })}
        </div>

        <div className="pricing-footer">
          <p>Не уверены какой тариф выбрать? <strong>Мы поможем!</strong></p>
          <button className="consult-btn">Получить консультацию</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
