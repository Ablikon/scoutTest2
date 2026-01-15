import './Problem.css'
import { useState } from 'react'
import { IoTrendingDownOutline, IoTimeOutline, IoPersonOutline, IoMoonOutline, IoWarningOutline } from 'react-icons/io5'

function Problem() {
  const [activeCard, setActiveCard] = useState(0)
  
  const problems = [
    {
      title: "Кто дешевле — тот и продаёт",
      stat: "90%",
      description: "покупателей выбирают первого в списке",
      details: "Пока вы спите, конкурент стал на 1₸ дешевле и забрал ВСЕ заказы. На Kaspi работает просто: самый дешёвый = первый в списке. Второй = никто.",
      icon: IoTrendingDownOutline,
      lost: "До 500 заказов в день"
    },
    {
      title: "Время — это потерянные деньги",
      stat: "2-3ч",
      description: "чтобы поменять цены на 100 товарах",
      details: "Пока вы 2 часа сидите и меняете цены, конкуренты с роботами уже 40 раз обновили свои. Человек физически не может так быстро.",
      icon: IoTimeOutline,
      lost: "40+ обновлений пропущено"
    },
    {
      title: "Люди устают и ошибаются",
      stat: "100%",
      description: "рано или поздно будет ошибка",
      details: "Менеджер устал, забыл про товар, ушёл на обед, ошибся в нуле. Пока он отдыхает, конкуренты с роботами работают без перерыва и ошибок.",
      icon: IoPersonOutline,
      lost: "Риск простоя каждый день"
    },
    {
      title: "Ночью покупают больше всего",
      stat: "18-23",
      description: "пик покупок на Kaspi",
      details: "После работы все садятся за телефоны и покупают. В 22:00 конкурент снизил цены и получил 100 заказов. Вы про это узнаете только утром.",
      icon: IoMoonOutline,
      lost: "40% упущенной прибыли"
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
            <span>Важная проблема</span>
          </div>
          <h2>Почему вы теряете деньги каждый день?</h2>
          <p className="problem-intro">
            4 причины, почему конкуренты зарабатывают больше вас
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
          <h3>Сколько вы теряете без робота</h3>
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
            <span>В среднем за неделю теряете: <strong>~76% возможной прибыли</strong></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
