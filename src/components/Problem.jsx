import './Problem.css'
import { IoTrendingDownOutline, IoTimeOutline, IoPersonOutline, IoMoonOutline } from 'react-icons/io5'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2>Что мешает вашим продажам расти?</h2>
          <p className="section-desc">4 главные причины, по которым заказы уходят конкурентам</p>
        </div>
        
        <div className="problems-grid">
          <div className="problem-card">
            <div className="card-icon">
              <IoTrendingDownOutline />
            </div>
            <div className="loss-indicator">
              <div className="loss-bar" style={{width: '90%'}}></div>
              <span className="loss-text">90% потерь</span>
            </div>
            <h3>Позиция в списке</h3>
            <p>Исследования показывают: 9 из 10 покупателей совершают покупку у первого продавца в выдаче. Алгоритм сортирует магазины строго по возрастанию цены.</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoTimeOutline />
            </div>
            <div className="loss-indicator">
              <div className="loss-bar" style={{width: '75%'}}></div>
              <span className="loss-text">2+ часа потерянного времени</span>
            </div>
            <h3>Скорость реакции</h3>
            <p>Обновление сотни позиций вручную занимает минимум 2 часа. За это время автоматизированные конкуренты успевают несколько раз пересмотреть стратегию.</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoPersonOutline />
            </div>
            <div className="loss-indicator">
              <div className="loss-bar" style={{width: '60%'}}></div>
              <span className="loss-text">Высокий риск ошибок</span>
            </div>
            <h3>Человеческий фактор</h3>
            <p>Менеджеры имеют право на перерыв, обед, выходные. Ошибки внимания неизбежны. Стоит ли строить бизнес на таком ненадёжном фундаменте?</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoMoonOutline />
            </div>
            <div className="loss-indicator">
              <div className="loss-bar" style={{width: '40%'}}></div>
              <span className="loss-text">40% упущенных продаж</span>
            </div>
            <h3>Ночные часы</h3>
            <p>Пик активности покупателей — вечер и ночь после рабочего дня. В момент, когда ваша команда отдыхает, конкуренты с автоматизацией забирают львиную долю заказов.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
