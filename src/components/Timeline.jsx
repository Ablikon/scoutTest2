import './Timeline.css'
import { IoCalculatorOutline, IoMapOutline, IoCubeOutline } from 'react-icons/io5'

function Timeline() {
  return (
    <section className="timeline security-section">
      <div className="container">
        <div className="section-header">
          <h2>Тонкая настройка</h2>
          <p className="section-subtitle">
            Инструменты для тех, кто хочет контролировать любую деталь продаж.
          </p>
        </div>

        <div className="security-grid">
          <div className="security-card">
            <div className="sec-icon">
              <IoCalculatorOutline />
            </div>
            <h3>Калькулятор маржи</h3>
            <p>
               Не нужно считать вручную. Введите себестоимость, комиссию и желаемую прибыль — система сама рассчитает безопасную минимальную цену, чтобы вы не ушли в минус.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
              <IoMapOutline />
            </div>
            <h3>Разные города</h3>
            <p>
              Конкуренция в регионах отличается. Вы можете задать отдельные лимиты минимальной цены для Алматы, Астаны и других городов внутри одного кабинета.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
               <IoCubeOutline />
            </div>
            <h3>Учет остатков</h3>
            <p>
              Бот видит ваши заказы и списывает товар с остатка. Если товар закончится физически, бот автоматически снимет его с витрины, спасая от штрафов за отмену.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
