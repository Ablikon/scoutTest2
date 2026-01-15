import './Problem.css'
import { IoPersonRemoveOutline, IoTrendingDownOutline, IoTimeOutline, IoWalletOutline } from 'react-icons/io5'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2>Почему ручное управление не работает?</h2>
          <p className="section-subtitle">
            Невозможно 24/7 следить за ценами и быть быстрее алгоритмов.
          </p>
        </div>

        <div className="pain-grid">
           <div className="pain-item">
             <div className="pain-icon"><IoPersonRemoveOutline /></div>
             <h3>Человеческий фактор</h3>
             <p>Менеджер спит, ест и болеет. Бот работает всегда.</p>
           </div>
           
           <div className="pain-item">
             <div className="pain-icon"><IoTrendingDownOutline /></div>
             <h3>Выпадаете из ТОПа</h3>
             <p>95% покупателей берут у первого продавца. 2 место = 0 продаж.</p>
           </div>

           <div className="pain-item">
             <div className="pain-icon"><IoTimeOutline /></div>
             <h3>Медленная реакция</h3>
             <p>Пока вы меняете цену, конкурент уже забрал заказ.</p>
           </div>

           <div className="pain-item">
             <div className="pain-icon"><IoWalletOutline /></div>
             <h3>Расходы</h3>
             <p>Зарплата сотрудника в разы выше стоимости сервиса.</p>
           </div>
        </div>

        <div className="loss-banner">
          <span className="loss-val">~50%</span>
          <span className="loss-text">прибыли теряет продавец ежесуточно без автоснижения цен</span>
        </div>
      </div>
    </section>
  )
}

export default Problem
