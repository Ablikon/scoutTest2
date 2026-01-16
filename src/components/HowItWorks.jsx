import { useState } from 'react'
import './HowItWorks.css'
import { IoFlashOutline, IoShieldCheckmarkOutline, IoTrendingUpOutline, IoTerminalOutline } from 'react-icons/io5'

function HowItWorks() {
  const [activeScenario, setActiveScenario] = useState(0)

  const scenarios = [
    {
      id: 0,
      title: "Мгновенная реакция",
      icon: <IoFlashOutline />,
      description: "Конкурент снизил цену. Бот замечает это за 3 минуты и ставит вашу цену ровно на 1 шаг ниже.",
      competitorPrice: "14 500 ₸",
      yourPrice: "14 499 ₸",
      compHeight: 60,
      yourHeight: 58,
      status: "TOP-1",
      statusType: "success",
      log: "> DETECTED: Competitor price drop (-500 ₸)\n> ACTION: Adjusting price to 14 499 ₸\n> RESULT: Position #1 secured"
    },
    {
      id: 1,
      title: "Защита от убытка",
      icon: <IoShieldCheckmarkOutline />,
      description: "Цена конкурента упала ниже вашей себестоимости. Бот активирует Stop-Loss и не уходит в минус.",
      competitorPrice: "11 000 ₸",
      yourPrice: "12 500 ₸",
      compHeight: 30,
      yourHeight: 45, // Застрял выше
      showLimitLine: true,
      status: "STOP-LOSS",
      statusType: "warning",
      log: "> ALERT: Competitor price below minlimit\n> LOGIC: Stop-loss protection activated\n> ACTION: Holding price at 12 500 ₸"
    },
    {
      id: 2,
      title: "Умный подъем",
      icon: <IoTrendingUpOutline />,
      description: "Конкурент распродал товар. Бот видит это и мгновенно поднимает цену до максимума для увеличения прибыли.",
      competitorPrice: "Нет в наличии",
      yourPrice: "18 000 ₸",
      compHeight: 0,
      yourHeight: 90,
      status: "MAX PROFIT",
      statusType: "success",
      log: "> SCAN: Competitor out of stock\n> OPPORTUNITY: Low competition detected\n> ACTION: Increasing price to Max Limit"
    }
  ]

  const current = scenarios[activeScenario]

  return (
    <section className="algorithm-sim">
      <div className="container">
        <div className="section-header">
          <h2>Алгоритм принятия решений</h2>
          <p className="section-subtitle">
            SaleScout не просто меняет цифры, он анализирует ситуацию. Выберите сценарий, чтобы увидеть логику бота.
          </p>
        </div>

        <div className="sim-grid">
          {/* Левая часть: Управление */}
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

          {/* Правая часть: Экран мониторинга */}
          <div className="sim-visual">
            <div className="monitor-frame">
              {/* Header окна */}
              <div className="monitor-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="monitor-title">
                  <IoTerminalOutline className="term-icon"/> SALE_SCOUT_CORE_V2.1
                </div>
                <div className="monitor-status online">ONLINE</div>
              </div>

              {/* Тело монитора */}
              <div className="monitor-body">
                {/* Графическая зона */}
                <div className="chart-wrapper">
                  {current.showLimitLine && (
                    <div className="limit-line-dashed">
                      <span className="limit-label">Min Threshold</span>
                    </div>
                  )}
                  
                  <div className="chart-bars">
                    {/* Бар Конкурента */}
                    <div className="bar-column">
                      <div className="bar-val-wrapper" style={{ height: `${current.compHeight}%` }}>
                        <div className="bar-value competitor">{current.competitorPrice}</div>
                        <div className="bar-fill competitor"></div>
                      </div>
                      <div className="bar-name">Конкурент</div>
                    </div>

                    {/* Бар Клиента */}
                    <div className="bar-column">
                       <div className="bar-val-wrapper" style={{ height: `${current.yourHeight}%` }}>
                        <div className="bar-value you">{current.yourPrice}</div>
                        <div className="bar-fill you">
                           <div className="bar-glow"></div>
                        </div>
                      </div>
                      <div className="bar-name active">Вы (SaleScout)</div>
                    </div>
                  </div>
                </div>

                {/* Консоль логов */}
                <div className="monitor-console">
                  <div className="console-header">SYSTEM LOG</div>
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
