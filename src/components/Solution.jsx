import './Solution.css'
import { IoSettingsOutline, IoTrendingUpOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header center">
          <h2>Как работает AlgoSeller</h2>
          <p className="section-subtitle">
            Простая настройка за 10 минут. Мы не взламываем маркетплейсы, а делаем работу менеджера, только в сотни раз быстрее.
          </p>
        </div>

        <div className="process-grid">
          {/* Шаг 1 */}
          <div className="process-card">
            <div className="step-number">01</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoSettingsOutline />
              </div>
              <h3>Подключение</h3>
              <p>
                Регистрируетесь на сайте, добавляете свой магазин Kaspi. Товары загружаются автоматически из вашего кабинета.
              </p>
              <div className="tech-tag">Безопасно</div>
            </div>
          </div>

          <div className="process-connector"></div>

          {/* Шаг 2 */}
          <div className="process-card">
            <div className="step-number">02</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoShieldCheckmarkOutline />
              </div>
              <h3>Настройка защиты</h3>
              <p>
                Указываете минимальную цену для каждого товара (себестоимость + ваша маржа). Бот никогда не опустит цену ниже этого порога.
              </p>
              <div className="tech-tag">Защита от убытка</div>
            </div>
          </div>

          <div className="process-connector"></div>

          {/* Шаг 3 */}
          <div className="process-card">
            <div className="step-number">03</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoTrendingUpOutline />
              </div>
              <h3>Рост продаж</h3>
              <p>
                Бот каждые 3 минуты проверяет конкурентов. Если кто-то снизил цену, мы снижаем на 1 тенге и забираем покупателя.
              </p>
              <div className="tech-tag">Автоматически</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
