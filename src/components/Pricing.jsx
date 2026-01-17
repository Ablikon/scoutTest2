import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Pricing.css'
import { IoCheckmark } from 'react-icons/io5'

function Pricing() {
  const { t, i18n } = useTranslation()
  const [period, setPeriod] = useState(1)

  const getLocale = () => {
    switch (i18n.language) {
      case 'en': return 'en-US'
      case 'kk': return 'kk-KZ'
      default: return 'ru-RU'
    }
  }

  const periods = [
    { value: 1, label: t('pricing.periods.1month'), discount: 0 },
    { value: 3, label: t('pricing.periods.3months'), discount: 0.10 },
    { value: 6, label: t('pricing.periods.6months'), discount: 0.15 },
    { value: 12, label: t('pricing.periods.1year'), discount: 0.25 },
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat(getLocale()).format(Math.round(price))
  }

  const getPrice = (basePrice) => {
    if (basePrice === 'Custom') return 'Custom'
    const discount = periods.find(p => p.value === period).discount
    const discounted = basePrice * (1 - discount)
    return formatPrice(Math.round(discounted / 100) * 100)
  }

  const tierKeys = ['start', 'standard', 'pro', 'custom']
  const basePrices = [35000, 50000, 80000, 'Custom']

  const tiers = tierKeys.map((key, index) => ({
    name: t(`pricing.tiers.${key}.name`),
    basePrice: basePrices[index],
    desc: t(`pricing.tiers.${key}.description`),
    features: t(`pricing.tiers.${key}.features`, { returnObjects: true }),
    highlight: key === 'standard'
  }))

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>{t('pricing.title')}</h2>
          <p className="subtitle">
            {t('pricing.subtitle')}
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
                {tier.basePrice !== 'Custom' && <span className="currency">₸ {t('pricing.perMonth')}</span>}
              </div>

              {period > 1 && tier.basePrice !== 'Custom' && (
                <div className="price-saving">
                  {t('pricing.savings')} {formatPrice((tier.basePrice - parseInt(getPrice(tier.basePrice).replace(/\s/g, ''))) * period)} ₸
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
                {tier.basePrice === 'Custom' ? t('pricing.contact') : t('pricing.select')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
