import './Solution.css'
import { useState, useEffect } from 'react'
import { IoSearchOutline, IoPricetagOutline, IoRocketOutline, IoCheckmarkCircleOutline, IoMoonOutline, IoStorefrontOutline, IoEyeOutline, IoStatsChartOutline } from 'react-icons/io5'

function Solution() {
  const [activeStep, setActiveStep] = useState(0)
  const [checkedCount, setCheckedCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedCount(prev => (prev >= 480 ? 0 : prev + 8))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      icon: IoSearchOutline,
      title: "Постоянно проверяет цены",
      description: "Робот каждые 3 минуты смотрит, что делают конкуренты. Работает круглосуточно без выходных и праздников.",
      metric: `${checkedCount}/480 проверок за день`,
      color: "#3B82F6"
    },
    {
      icon: IoPricetagOutline,
      title: "Мгновенно меняет вашу цену",
      description: "Увидел, что кто-то стал дешевле? Сразу же делает вас ещё дешевле. Реагирует быстрее любого человека.",
      metric: "Ответ меньше 3 минут",
      color: "#2563EB"
    },
    {
      icon: IoRocketOutline,
      title: "Умеет поднимать цены",
      description: "Когда рынок позволяет, цены растут сами. Вы зарабатываете больше при той же скорости продаж.",
      metric: "До +40% к прибыли",
      color: "#1D4ED8"
    }
  ]

  return (
    <section className="solution-new">
      <div className="solution-bg">
        <div className="glow-circle"></div>
      </div>

      <div className="container">
        <div className="solution-header">
          <div className="success-badge">
            <span className="badge-pulse"></span>
            <span>Проверено на деле</span>
          </div>
          <h2>Как это работает на практике?</h2>
          <p className="solution-intro">
            Три процесса работают одновременно круглые сутки
          </p>
        </div>

        {/* Интерактивный процесс */}
        <div className="process-flow">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flow-step ${activeStep === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="step-visual">
                <div className="step-ring" style={{borderColor: step.color}}>
                  <step.icon className="step-icon" style={{color: step.color}} />
                </div>
                <div className="step-line"></div>
              </div>
              
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-metric-box">
                  <IoStatsChartOutline />
                  <span>{step.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Живая демонстрация */}
        <div className="live-demo">
          <h3>Смотрите, как работает в реальной жизни</h3>
          <div className="demo-timeline">
            <div className="timeline-event">
              <div className="event-time">00:00</div>
              <div className="event-card start">
                <div className="event-status">Робот начал проверку</div>
                <div className="event-detail">Ваша цена: 45,000 ₸</div>
              </div>
            </div>
            
            <div className="timeline-event">
              <div className="event-time">00:03</div>
              <div className="event-card danger">
                <div className="event-status">Увидел изменение</div>
                <div className="event-detail">Конкурент снизил до: 44,990 ₸</div>
              </div>
            </div>
            
            <div className="timeline-event">
              <div className="event-time">00:04</div>
              <div className="event-card success">
                <div className="event-status">Цена изменена</div>
                <div className="event-detail">Новая цена: 44,980 ₸ | Вы первый!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества с визуализацией */}
        <div className="advantages-showcase">
          <h3>Почему робот лучше, чем делать самому</h3>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <IoCheckmarkCircleOutline />
              </div>
              <h4>Топ 20+ часов</h4>
              <div className="advantage-visual">
                <div className="time-bars">
                  <div className="time-bar salescout" style={{width: '83%'}}>
                    <span>Автоматизация</span>
                  </div>
                  <div className="time-bar manual" style={{width: '17%'}}>
                    <span>Ручное</span>
                  </div>
                </div>
              </div>
              <p>Вы в лидерах почти круглосуточно. Конкуренты физически не успевают.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <IoMoonOutline />
              </div>
              <h4>Работа без выходных</h4>
              <div className="advantage-visual">
                <div className="days-grid">
                  {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map(day => (
                    <div key={day} className="day-cell active">{day}</div>
                  ))}
                </div>
              </div>
              <p>Система не знает праздников. Каждый день = деньги.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <IoStorefrontOutline />
              </div>
              <h4>Все магазины сразу</h4>
              <div className="advantage-visual">
                <div className="stores-stack">
                  <div className="store-layer"></div>
                  <div className="store-layer"></div>
                  <div className="store-layer"></div>
                </div>
              </div>
              <p>Управляйте неограниченным количеством точек из одной панели.</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <IoEyeOutline />
              </div>
              <h4>Рентген конкурентов</h4>
              <div className="advantage-visual">
                <div className="competitor-radar">
                  <div className="radar-ring"></div>
                  <div className="radar-ring"></div>
                  <div className="radar-ping"></div>
                </div>
              </div>
              <p>Видите действия соперников в режиме реального времени.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
