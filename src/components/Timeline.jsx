import './Timeline.css'
import { IoLockClosedOutline, IoShieldCheckmarkOutline, IoEyeOffOutline } from 'react-icons/io5'

function Timeline() {
  return (
    <section className="timeline security-section">
      <div className="container">
        <div className="section-header">
          <h2>Безопасность данных</h2>
          <p className="section-subtitle">Мы понимаем важность защиты вашего бизнеса. AlgoSeller работает прозрачно и безопасно.</p>
        </div>

        <div className="security-grid">
          <div className="security-card">
            <div className="sec-icon">
              <IoLockClosedOutline />
            </div>
            <h3>Официальный доступ</h3>
            <p>
              Бот работает через кабинет продавца так же, как живой человек. Мы не взламываем маркетплейс и не используем серые методы.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
              <IoShieldCheckmarkOutline />
            </div>
            <h3>Только управление</h3>
            <p>
              Нам не нужны ЭЦП, доступ к банковским счетам или картам. Бот только меняет цены. Деньги клиента в безопасности.
            </p>
          </div>

          <div className="security-card">
            <div className="sec-icon">
               <IoEyeOffOutline />
            </div>
            <h3>Права доступа</h3>
            <p>
              Вы можете создать отдельного "Электронного менеджера" в кабинете Kaspi с ограниченными правами и дать доступ только ему.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
