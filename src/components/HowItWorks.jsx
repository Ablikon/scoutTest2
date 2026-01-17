import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './HowItWorks.css'
import { IoFlashOutline, IoShieldCheckmarkOutline, IoTrendingUpOutline, IoTerminalOutline } from 'react-icons/io5'

function HowItWorks() {
  const { t } = useTranslation()
  const [activeScenario, setActiveScenario] = useState(0)

  const icons = [
    <IoFlashOutline key="flash" />,
    <IoShieldCheckmarkOutline key="shield" />,
    <IoTrendingUpOutline key="trending" />
  ]

  const scenarioMeta = [
    { compHeight: 60, yourHeight: 58, statusType: 'success', showLimitLine: false },
    { compHeight: 30, yourHeight: 45, statusType: 'warning', showLimitLine: true },
    { compHeight: 0, yourHeight: 90, statusType: 'success', showLimitLine: false }
  ]

  const translatedScenarios = t('howItWorks.scenarios', { returnObjects: true })

  const scenarios = translatedScenarios.map((scenario, index) => ({
    id: index,
    icon: icons[index],
    title: scenario.title,
    description: scenario.description,
    competitorPrice: scenario.competitorPrice,
    yourPrice: scenario.yourPrice,
    status: scenario.status,
    log: scenario.log,
    ...scenarioMeta[index]
  }))

  const current = scenarios[activeScenario]

  return (
    <section className="algorithm-sim">
      <div className="container">
        <div className="section-header">
          <h2>{t('howItWorks.title')}</h2>
          <p className="section-subtitle">
            {t('howItWorks.subtitle')} <span className="interactive-hint">{t('howItWorks.selectScenario')}</span>{t('howItWorks.toSeeLogic')}
          </p>
        </div>

        <div className="sim-grid">
          <div className="sim-controls">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                className={`sim-btn ${activeScenario === index ? 'active' : ''}`}
                onClick={() => setActiveScenario(index)}
              >
                <div className="sb-icon-wrap">
                  {scenario.icon}
                </div>
                <div className="sb-text">
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
                {activeScenario === index && <div className="active-indicator"></div>}
              </button>
            ))}
          </div>

          <div className="sim-visual">
            <div className="monitor-frame">
              <div className="monitor-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="monitor-title">
                  <IoTerminalOutline className="term-icon"/> TopPrice
                </div>
                <div className="monitor-status online">ONLINE</div>
              </div>

              <div className="monitor-body">
                <div className="chart-wrapper">
                  <div className="chart-bars">
                    {current.showLimitLine && (
                      <div className="limit-line-dashed">
                        <span className="limit-label">{t('howItWorks.minThreshold')}</span>
                      </div>
                    )}

                    <div className="bar-column">
                      <div className="bar-val-wrapper" style={{ height: `${current.compHeight}%` }}>
                        <div className="bar-value competitor">{current.competitorPrice}</div>
                        <div className="bar-fill competitor"></div>
                      </div>
                      <div className="bar-name">{t('howItWorks.competitor')}</div>
                    </div>

                    <div className="bar-column">
                       <div className="bar-val-wrapper" style={{ height: `${current.yourHeight}%` }}>
                        <div className="bar-value you">{current.yourPrice}</div>
                        <div className="bar-fill you">
                           <div className="bar-glow"></div>
                        </div>
                      </div>
                      <div className="bar-name active">{t('howItWorks.you')}</div>
                    </div>
                  </div>
                </div>

                <div className="monitor-console">
                  <div className="console-header">{t('howItWorks.actionLog')}</div>
                  <div className="console-content">
                    {current.log.split('\n').map((line, i) => (
                      <div key={i} className="log-line">
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className={`status-badge-overlay ${current.statusType}`}>
                    {current.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
