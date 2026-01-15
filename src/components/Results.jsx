import { useState } from 'react'
import './Results.css'
import { IoTrendingUpOutline, IoTimeOutline, IoWalletOutline } from 'react-icons/io5'

function Results() {
  const [margin, setMargin] = useState(3000)
  const [sales, setSales] = useState(5)
  
  // 95% продаж забирает топ-1. Значит потеря = Маржа * (Продажи * 30 дней) * 0.95
  const monthlyLoss = (margin * sales * 30 * 0.95).toLocaleString('ru-RU')

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

        {/* Интерактивный элемент для разнообразия */}
        <div className="calculator-wrapper">
          <div className="calc-card">
            <div className="calc-content">
              <h3>Калькулятор потерь</h3>
              <p>Сколько прибыли вы отдаете конкурентам, пока не на 1-м месте?</p>
              
              <div className="sliders-group">
                <div className="slider-row">
                  <div className="slider-label">
                    <span>Маржа с товара</span>
                    <span className="val">{margin.toLocaleString()} ₸</span>
                  </div>
                  <input 
                    type="range" min="500" max="50000" step="500" 
                    value={margin} onChange={e => setMargin(Number(e.target.value))} 
                  />
                </div>
                <div className="slider-row">
                  <div className="slider-label">
                    <span>Возможных продаж в день</span>
                    <span className="val">{sales} шт.</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" step="1" 
                    value={sales} onChange={e => setSales(Number(e.target.value))} 
                  />
                </div>
              </div>
            </div>

            <div className="calc-result">
              <span className="loss-label">Упущенная прибыль</span>
              <span className="loss-amount">-{monthlyLoss} ₸</span>
              <span className="loss-period">в месяц</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Results
