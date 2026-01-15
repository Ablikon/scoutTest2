import './Problem.css'
import { IoTrendingDownOutline, IoTimeOutline, IoPersonOutline, IoMoonOutline } from 'react-icons/io5'

function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-header">
          <h2>Почему у вас мало продаж?</h2>
        </div>
        
        <div className="problems-grid">
          <div className="problem-card">
            <div className="card-icon">
              <IoTrendingDownOutline />
            </div>
            <h3>Не первый</h3>
            <p>Покупатели на маркетплейсах в 90% случаев покупают у продавца, который стоит первым в списке продавцов. Продавцы сортируются по цене.</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoTimeOutline />
            </div>
            <h3>Время</h3>
            <p>100 товаров можно обновить руками за 2 часа. Пока вы дойдете руками до конца списка товаров, конкуренты уже поменяли цены на товары вверху вашего списка и получают все заказы.</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoPersonOutline />
            </div>
            <h3>Человек</h3>
            <p>Человеку свойственно отдыхать, кушать, спать, отвлекаться, быть без настроения и прочее. Вы действительно хотите, чтобы ваш бизнес зависел от человека?</p>
          </div>
          
          <div className="problem-card">
            <div className="card-icon">
              <IoMoonOutline />
            </div>
            <h3>Ночь</h3>
            <p>Люди покупают вечером после работы. В это время вы тоже заняты своими личными делами, поэтому не спускаете цену и не стоите первым среди конкурентов. Вы теряете клиентов.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
