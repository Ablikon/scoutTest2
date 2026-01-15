import './HowItWorks.css'
import { IoScanOutline, IoGitNetworkOutline, IoLockClosedOutline } from 'react-icons/io5'

function HowItWorks() {
  return (
    <section className="capabilities">
      <div className="container">
        <div className="section-header">
          <h2>Технологии AlgoSeller</h2>
          <p className="section-subtitle">
            Мы используем умные алгоритмы для безопасного управления ценами.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="cap-card">
            <div className="cap-icon">
              <IoScanOutline />
            </div>
            <h3>Умный мониторинг</h3>
            <p>
              Система сканирует цены конкурентов каждые 3 минуты. Это обеспечивает мгновенную реакцию на любые изменения рынка.
            </p>
            <div className="cap-meta">
              <span>Скорость: 3 мин</span>
            </div>
          </div>

          <div className="cap-card">
            <div className="cap-icon">
              <IoGitNetworkOutline />
            </div>
            <h3>Алгоритм снижения</h3>
            <p>
              Мы не просто копируем цену. Бот "подрезает" конкурента ровно на 1 тенге (или ваш заданный шаг), чтобы занять первое место с минимальными потерями маржи.
            </p>
            <div className="cap-meta">
              <span>Шаг: 1 ₸</span>
            </div>
          </div>

          <div className="cap-card">
            <div className="cap-icon">
              <IoLockClosedOutline />
            </div>
            <h3>Stop-Loss защита</h3>
            <p>
              Встроенный предохранитель. Если конкуренты начнут демпинговую войну и опустят цены ниже вашей себестоимости, бот автоматически остановится на вашей минимальной цене.
            </p>
            <div className="cap-meta">
              <span>Защита капитала</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
