import './Problem.css'
import { IoAlertCircleOutline, IoRocketOutline, IoGitNetworkOutline } from 'react-icons/io5'

function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2>Реальность рынка</h2>
          <p className="section-subtitle">
            Kaspi — это не просто витрина, а жесткая алгоритмическая система. <br/>Выигрывает тот, кто понимает правила.
          </p>
        </div>

        <div className="reality-list">
          
          <div className="reality-item">
            <div className="r-icon danger">
              <IoAlertCircleOutline />
            </div>
            <div className="r-content">
              <h3>2-е место = 0 продаж</h3>
              <p>
                Покупатель почти никогда не открывает список всех продавцов. 95% заказов забирает тот, кто стоит первым и светится на главной кнопке. Быть вторым — значит быть невидимым.
              </p>
            </div>
          </div>

          <div className="reality-item">
            <div className="r-icon accent">
              <IoRocketOutline />
            </div>
            <div className="r-content">
              <h3>Скорость важнее демпинга</h3>
              <p>
                Не обязательно ставить самую низкую цену на весь день и терять моржу. Достаточно быть дешевле конкурента на 1 тенге именно в тот момент, когда клиент зашел на сайт.
              </p>
            </div>
          </div>

          <div className="reality-item">
            <div className="r-icon warning">
              <IoGitNetworkOutline />
            </div>
            <div className="r-content">
              <h3>Война алгоритмов</h3>
              <p>
                Ваши конкуренты уже автоматизировали процессы. Пытаться обогнать бота вручную, постоянно обновляя страницу — это как бежать наперегонки с автомобилем.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Problem
