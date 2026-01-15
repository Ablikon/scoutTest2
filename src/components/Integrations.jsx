import './Integrations.css'
import { IoCartOutline, IoReaderOutline, IoPhonePortraitOutline } from 'react-icons/io5'

function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        <div className="integrations-header">
          <h2>Работа с данными</h2>
          <p className="subtitle">Удобное управление ценами</p>
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
              <span>Массовая загрузка</span>
            </div>
            <div className="card-list">
              <div className="list-item">Excel (XLSX)</div>
              <div className="list-item">Загрузка прайс-листов</div>
            </div>
          </div>
          
           <div className="platform-card">
             <div className="card-header">
              <IoPhonePortraitOutline className="icon" />
              <span>Уведомления</span>
            </div>
            <div className="card-list">
              <div className="list-item">SMS авторизация</div>
              <div className="list-item">Личный кабинет</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
