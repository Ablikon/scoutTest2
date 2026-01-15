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
            <div className="int-icon">
              <IoCartOutline />
            </div>
            <h3>Маркетплейс</h3>
            <div className="card-list">
              <div className="list-item">Kaspi.kz</div>
              <div className="list-item dimmed">Полная совместимость</div>
            </div>
          </div>

          <div className="platform-card">
             <div className="int-icon">
              <IoReaderOutline />
            </div>
            <h3>Массовые операции</h3>
            <div className="card-list">
              <div className="list-item">Excel (XLSX)</div>
              <div className="list-item">Импорт / Экспорт прайс листов</div>
            </div>
          </div>
          
           <div className="platform-card">
             <div className="int-icon">
              <IoListOutline />
            </div>
            <h3>История и Отчеты</h3>
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
