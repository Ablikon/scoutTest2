import './Solution.css'
import { IoLogInOutline, IoOptionsOutline, IoRocketOutline, IoArrowForward } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution" id="solution-section">
      <div className="container">
        
        <div className="solution-wrapper">
          {/* Левая часть - Заголовок и CTA */}
          <div className="solution-intro">
            <h2>Как начать работать?</h2>
            <p className="section-subtitle">
              Запуск занимает 10 минут. Вам не нужно устанавливать программы — всё работает через браузер.
            </p>
            {/* <div className="solution-cta">
              <button className="btn-start">
                Попробовать бесплатно <IoArrowForward />
              </button>
            </div> */}
          </div>

          {/* Правая часть - Вертикальные шаги */}
          <div className="solution-steps">
            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">01</span>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoLogInOutline />
                </div>
                <div className="step-text">
                  <h3>Подключение</h3>
                  <p>
                    Регистрируетесь на сайте и добавляете свой магазин Kaspi. Товары подгружаются автоматически за пару минут.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">02</span>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoOptionsOutline />
                </div>
                <div className="step-text">
                  <h3>Настройка</h3>
                  <p>
                     Устанавливаете "Минимальную цену" — порог, ниже которого бот не опустится. Это защищает вас от торговли в минус.
                  </p>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">03</span>
                {/* Линия здесь не нужна, так как это последний шаг */}
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoRocketOutline />
                </div>
                <div className="step-text">
                  <h3>Автопилот включен</h3>
                  <p>
                    Активируете бота. Теперь он мониторит конкурентов 24/7 и меняет цены, чтобы вы всегда были на первом месте.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Solution
