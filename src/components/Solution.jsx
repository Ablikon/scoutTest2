import './Solution.css'
import { IoLogInOutline, IoOptionsOutline, IoRocketOutline } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution" id="solution-section">
      <div className="container">
        <div className="section-header center">
          <h2>Как начать работать?</h2>
          <p className="section-subtitle">
             Запуск занимает 10 минут. Вам не нужно устанавливать программы — всё работает в облаке через браузер.
          </p>
        </div>

        <div className="process-grid">
          {/* Шаг 1 */}
          <div className="process-card">
            <div className="step-number">01</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoLogInOutline />
              </div>
              <h3>Подключение</h3>
              <p>
                Регистрируетесь на сайте и добавляете свой магазин Kaspi. Товары подгружаются автоматически.
              </p>
              <div className="tech-tag">Синхронизация</div>
            </div>
          </div>

          <div className="process-connector"></div>

          {/* Шаг 2 */}
          <div className="process-card">
            <div className="step-number">02</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoOptionsOutline />
              </div>
              <h3>Настройка</h3>
              <p>
                 Устанавливаете "Минимальную цену" для товаров — порог, ниже которого бот не имеет права опускаться.
              </p>
              <div className="tech-tag">Безопасность</div>
            </div>
          </div>

          <div className="process-connector"></div>

          {/* Шаг 3 */}
          <div className="process-card">
            <div className="step-number">03</div>
            <div className="card-inner">
              <div className="icon-box">
                <IoRocketOutline />
              </div>
              <h3>Автопилот</h3>
              <p>
                Включаете бота. Теперь он сам следит за ценами и удерживает вас в топе продаж 24/7.
              </p>
              <div className="tech-tag">Результат</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
