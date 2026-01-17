import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Results.css'
import { IoTrendingUpOutline, IoTimeOutline, IoWalletOutline } from 'react-icons/io5'

function Results() {
  const { t, i18n } = useTranslation()
  const [margin, setMargin] = useState(3000)
  const [sales, setSales] = useState(5)

  const getLocale = () => {
    switch (i18n.language) {
      case 'en': return 'en-US'
      case 'kk': return 'kk-KZ'
      default: return 'ru-RU'
    }
  }

  const monthlyLoss = (margin * sales * 30 * 0.95).toLocaleString(getLocale())

  const icons = [IoTrendingUpOutline, IoWalletOutline, IoTimeOutline]
  const resultClasses = ['growth', 'highlight', 'savings']

  const translatedCases = t('results.cases', { returnObjects: true })

  const cases = translatedCases.map((item, index) => ({
    role: item.role,
    result: item.result,
    resultClass: resultClasses[index],
    desc: item.description,
    icon: icons[index]
  }))

  return (
    <section className="results">
      <div className="container">
        <div className="results-header">
          <h2>{t('results.title')}</h2>
          <p className="subtitle">{t('results.subtitle')}</p>
        </div>

        <div className="cases-grid">
          {cases.map((item, index) => (
            <div key={index} className="case-card">
              <div className="case-header">
                <span className="case-role">{item.role}</span>
                <div className="res-icon">
                  <item.icon />
                </div>
              </div>
              <div className={`case-result ${item.resultClass}`}>{item.result}</div>
              <p className="case-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="calculator-wrapper">
          <div className="calc-card">
            <div className="calc-content">
              <h3>{t('results.calculator.title')}</h3>
              <p>{t('results.calculator.subtitle')}</p>

              <div className="sliders-group">
                <div className="slider-row">
                  <div className="slider-label">
                    <span>{t('results.calculator.margin')}</span>
                    <span className="val">{margin.toLocaleString(getLocale())} ₸</span>
                  </div>
                  <input
                    type="range" min="500" max="50000" step="500"
                    value={margin} onChange={e => setMargin(Number(e.target.value))}
                  />
                </div>
                <div className="slider-row">
                  <div className="slider-label">
                    <span>{t('results.calculator.salesPerDay')}</span>
                    <span className="val">{sales} {t('results.calculator.pieces')}</span>
                  </div>
                  <input
                    type="range" min="1" max="50" step="1"
                    value={sales} onChange={e => setSales(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            <div className="calc-result">
              <span className="loss-label">{t('results.calculator.lostProfit')}</span>
              <span className="loss-amount">-{monthlyLoss} ₸</span>
              <span className="loss-period">{t('results.calculator.perMonth')}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Results
