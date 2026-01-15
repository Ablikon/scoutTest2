import './Integrations.css'
import { IoCartOutline, IoReaderOutline, IoListOutline } from 'react-icons/io5'

function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        <div className="integrations-header">
          <h2>Работа с данными</h2>
          <p className="subtitle">Удобное управление ценами и аналитика</p>
        </div>

        <div className="platforms-wrapper">
          <div className="platform-card featured">
            <div className="card-header">
              <IoCartOutline className="icon" />
              <span>Маркетплейс</span>
            </div>
            <div className="card-list">
              <div className="list-item">Kaspi.kz</div>
              <div className="list-item dimmed">Полная совместимость</div>
            </div>
          </div>

          <div className="platform-card">
             <div className="card-header">
              <IoReaderOutline className="icon" />
              <span>Массовые операции</span>
            </div>
            <div className="card-list">
              <div className="list-item">Excel (XLSX)</div>
              <div className="list-item">Импорт / Экспорт прайс листов</div>
            </div>
          </div>
          
           <div className="platform-card">
             <div className="card-header">
              <IoListOutline className="icon" />
              <span>История и Отчеты</span>
            </div>
            <div className="card-list">
              <div className="list-item">История изменений</div>
              <div className="list-item">Фильтр по статусам</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
