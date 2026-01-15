import './HowItWorks.css'
import { IoFlashOutline, IoShieldCheckmarkOutline, IoTimerOutline } from 'react-icons/io5'

function HowItWorks() {
  return (
    <section className="capabilities">
      <div className="container">
        <div className="section-header">
          <h2>Арсенал для победы на Kaspi</h2>
          <p className="section-subtitle">
            Ничего лишнего. Только инструменты для удержания первой позиции в карточке товара.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="cap-card">
            <div className="cap-icon">
              <IoFlashOutline />
            </div>
            <h3>Автоматический демпинг</h3>
            <p>
              Бот видит цену конкурента и ставит вашу на 1 тенге ниже (или на любой другой шаг). 
              Вы всегда стоите первым в списке продавцов и забираете 95% заказов.
            </p>
            <div className="cap-meta">
              <span>Шаг 1 ₸</span>
              <span>Борьба за ТОП-1</span>
            </div>
          </div>

          <div className="cap-card">
            <div className="cap-icon">
              <IoShieldCheckmarkOutline />
            </div>
            <h3>Защита от убытка</h3>
            <p>
              Вы задаете минимальную цену (себестоимость + ваша прибыль). 
              Бот будет снижать цену, но никогда не опустится ниже этого порога. Торговля в минус исключена.
            </p>
            <div className="cap-meta">
              <span>Контроль маржи</span>
              <span>Безопасно</span>
            </div>
          </div>

          <div className="cap-card">
            <div className="cap-icon">
              <IoTimerOutline />
            </div>
            <h3>Мгновенная реакция</h3>
            <p>
              Полный цикл проверки занимает всего 3 минуты. Пока конкурент меняет цену вручную или спит, 
              вы уже забрали покупателя. Работает 24 часа в сутки.
            </p>
            <div className="cap-meta">
              <span>Каждые 3 мин</span>
              <span>Режим 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
