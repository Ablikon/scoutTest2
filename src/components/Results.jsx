import './Results.css'
import { IoTrendingUpOutline, IoTimeOutline, IoWalletOutline } from 'react-icons/io5'

function Results() {
  const cases = [
    {
      role: "Новый продавец",
      result: "x4 Рост",
      desc: "За первые 10 дней использования сервиса продажи выросли в 4 раза благодаря удержанию позиций в топе.",
      icon: IoTrendingUpOutline
    },
    {
      role: "Опытный магазин",
      result: "x2 Рост",
      desc: "Уже действующий магазин увеличил продажи в 2 раза за месяц за счёт автоматического обновления цен.",
      icon: IoWalletOutline
    },
    {
      role: "Экономия",
      result: "-50%",
      desc: "Сокращение расходов на зарплату менеджеров. Бот стоит дешевле и работает эффективнее человека.",
      icon: IoTimeOutline
    }
  ]

  return (
    <section className="results">
      <div className="container">
        <div className="results-header">
          <h2>Реальные результаты</h2>
          <p className="subtitle">Мы замеряли эффективность на реальных клиентах</p>
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
              <div className="case-result">{item.result}</div>
              <p className="case-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
