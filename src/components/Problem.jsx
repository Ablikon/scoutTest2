import './Problem.css'
import { IoTimerOutline, IoPersonOutline, IoAlertCircleOutline, IoCashOutline, IoTrendingDownOutline } from 'react-icons/io5'

function Problem() {
  const problems = [
    {
      title: "Человеческий фактор",
      metric: "Сон и еда",
      desc: "Менеджер не может мониторить цены 24/7. Он устает, заболевает или уходит на выходные. Бот работает всегда.",
      icon: IoPersonOutline
    },
    {
      title: "Выпадаете из ТОПа",
      metric: "95%",
      desc: "Покупателей забирает тот продавец, который стоит первым в списке. Если ваша цена выше на 1 тенге — вы теряете клиента.",
      icon: IoAlertCircleOutline
    },
    {
      title: "Медленная реакция",
      metric: "3-4 часа",
      desc: "Пока менеджер заметит снижение цены конкурента и поменяет вручную, вы уже потеряли десятки заказов.",
      icon: IoTimerOutline
    },
    {
      title: "Дороговизна",
      metric: "Расходы",
      desc: "Зарплата менеджера, налоги, рабочее место и кофе обходятся в разы дороже, чем подписка на сервис.",
      icon: IoCashOutline
    }
  ]

  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2>Почему ручное управление не работает?</h2>
          <p className="section-subtitle">
            На маркетплейсах единая карточка товара. Чтобы продавать, нужно быть первым в списке. Вручную удерживать лидерство невозможно.
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((item, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">
                <item.icon />
              </div>
              <div className="problem-content">
                <div className="problem-metric">{item.metric}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="impact-widget">
          <div className="impact-icon">
            <IoTrendingDownOutline />
          </div>
          <div className="impact-text">
            <div className="impact-title">Ежедневные потери продаж</div>
            <div className="impact-subtitle">Покупатели уходят к конкурентам, которые используют автоснижение</div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Problem
