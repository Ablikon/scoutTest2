import './Problem.css'
import { useState } from 'react'
import { IoTrendingDownOutline, IoTimeOutline, IoPersonOutline, IoMoonOutline, IoWarningOutline } from 'react-icons/io5'

function Problem() {
  const [activeCard, setActiveCard] = useState(0)
  
  const problems = [
    {
      title: "Война за первую позицию",
      stat: "90%",
      description: "покупателей выбирают первого продавца в выдаче",
      details: "Пока вы спите или обедаете, конкурент снизил цену на 1₸ и забрал ВСЕ заказы. На Kaspi алгоритм жесток: дешевле = первый. Второй = никто.",
      icon: IoTrendingDownOutline,
      lost: "До 500 заказов в день"
    },
    {
      title: "Время = деньги, которые вы теряете",
      stat: "2-3ч",
      description: "на ручное обновление 100 товаров",
      details: "Пока менеджер 2 часа меняет цены вручную, автоматизированные конкуренты уже 40 раз обновили свои позиции. Вы физически не успеваете.",
      icon: IoTimeOutline,
      lost: "40+ циклов обновления"
    },
    {
      title: "Человек ≠ робот",
      stat: "100%",
      description: "вероятность ошибки или усталости",
      details: "Менеджер устал, ошибся в нуле, забыл про товар, ушёл на обед. Бизнес стоит. Конкуренты с ботами работают без остановки и ошибок.",
      icon: IoPersonOutline,
      lost: "Риск простоя 24/7"
    },
    {
      title: "Ночь — время конкурентов",
      stat: "18-23",
      description: "пик покупок на маркетплейсах",
      details: "После работы люди массово заходят на Kaspi. В 22:00 конкурент снизил цены и получил 100 заказов. Вы узнаете об этом только утром.",
      icon: IoMoonOutline,
      lost: "40% упущенной выручки"
    }
  ]

  return (
    <section className="problem-new">
      <div className="problem-bg">
        <div className="warning-glow"></div>
      </div>

      <div className="container">
        <div className="problem-header">
          <div className="alert-badge">
            <IoWarningOutline className="alert-icon-svg" />
            <span>Критические проблемы</span>
          </div>
          <h2>Почему вы теряете деньги каждый день?</h2>
          <p className="problem-intro">
            4 причины, по которым ваши конкуренты зарабатывают больше
          </p>
        </div>

        {/* Интерактивные карточки */}
        <div className="problems-interactive">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div 
                key={index}
                className={`problem-item ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="problem-icon-large">
                  <IconComponent />
                </div>
                
                <div className="problem-stat-big">
                  <div className="stat-number">{problem.stat}</div>
                  <div className="stat-description">{problem.description}</div>
                </div>

                <h3>{problem.title}</h3>
                <p className="problem-details">{problem.details}</p>

                <div className="problem-impact">
                  <span className="impact-label">Потеря:</span>
                  <span className="impact-value">{problem.lost}</span>
                </div>

                <div className="problem-graph">
                  <div className="graph-line" style={{width: `${100 - index * 15}%`}}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Визуализация потерь */}
        <div className="losses-visualization">
          <h3>Визуализация ваших потерь без автоматизации</h3>
          <div className="losses-bars">
            <div className="loss-bar-item">
              <div className="loss-bar-label">Понедельник</div>
              <div className="loss-bar-fill" style={{width: '75%'}}>
                <span>-75% заказов</span>
              </div>
            </div>
            <div className="loss-bar-item">
              <div className="loss-bar-label">Вторник</div>
              <div className="loss-bar-fill" style={{width: '68%'}}>
                <span>-68% заказов</span>
              </div>
            </div>
            <div className="loss-bar-item">
              <div className="loss-bar-label">Среда</div>
              <div className="loss-bar-fill" style={{width: '82%'}}>
                <span>-82% заказов</span>
              </div>
            </div>
            <div className="loss-bar-item">
              <div className="loss-bar-label">Четверг</div>
              <div className="loss-bar-fill" style={{width: '70%'}}>
                <span>-70% заказов</span>
              </div>
            </div>
            <div className="loss-bar-item">
              <div className="loss-bar-label">Пятница</div>
              <div className="loss-bar-fill" style={{width: '85%'}}>
                <span>-85% заказов</span>
              </div>
            </div>
          </div>
          <div className="losses-summary">
            <IoWarningOutline className="summary-icon" />
            <span>Средняя потеря за неделю: <strong>~76% возможной выручки</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
