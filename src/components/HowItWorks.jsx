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
      status: "ТОП-1",
      statusType: "success",
      log: "> СИТУАЦИЯ: Конкурент снизил цену (-500 ₸)\n> РЕАКЦИЯ: Снижаем вашу цену до 14 499 ₸\n> ИТОГ: Вы заняли 1-е место в выдаче"
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
      status: "ЗАЩИТА",
      statusType: "warning",
      log: "> ОПАСНОСТЬ: Цена конкурента ниже вашей закупки\n> РЕШЕНИЕ: Включаем защиту от убытка\n> ИТОГ: Держим 12 500 ₸. Вы не теряете деньги."
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
      status: "ПРИБЫЛЬ",
      statusType: "success",
      log: "> СИТУАЦИЯ: Конкурент распродался (нет в наличии)\n> ШАНС: Конкуренции нет, можно заработать больше\n> ИТОГ: Поднимаем цену до 18 000 ₸ (Максимум)"
    }
  ]

  const current = scenarios[activeScenario]

  return (
    <section className="algorithm-sim">
      <div className="container">
        <div className="section-header">
          <h2>Алгоритм принятия решений</h2>
          <p className="section-subtitle">
            TopPrice не просто меняет цифры, он анализирует ситуацию. Выберите сценарий, чтобы увидеть логику бота.
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
                  <IoTerminalOutline className="term-icon"/> TopPrice
                </div>
                <div className="monitor-status online">ONLINE</div>
              </div>

              {/* Тело монитора */}
              <div className="monitor-body">
                {/* Графическая зона */}
                <div className="chart-wrapper">
                  {current.showLimitLine && (
                    <div className="limit-line-dashed">
                      <span className="limit-label">Минимальный порог</span>
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
                      <div className="bar-name active">Вы</div>
                    </div>
                  </div>
                </div>

                {/* Консоль логов */}
                <div className="monitor-console">
                  <div className="console-header">ЖУРНАЛ ДЕЙСТВИЙ</div>
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
