import './Integrations.css'
import { IoCloudUploadOutline, IoDownloadOutline, IoFilterOutline, IoTimeOutline } from 'react-icons/io5'

function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        {/* Заголовок по центру сверху */}
        <div className="integrations-header">
          <h2>Работа с данными</h2>
          <p className="subtitle">Полный контроль над товарами через удобный интерфейс</p>
        </div>

        <div className="integrations-layout">
          {/* Левая часть с информацией */}
          <div className="integrations-content">
            <div className="data-features">
              <div className="data-feature">
                <div className="df-icon"><IoCloudUploadOutline /></div>
                <div className="df-content">
                  <h4>Загрузка прайс-листа</h4>
                  <p>Настройте минимальные цены, остатки и шаг автоснижения через Excel — загрузите обратно одним файлом</p>
                </div>
              </div>

              <div className="data-feature">
                <div className="df-icon"><IoDownloadOutline /></div>
                <div className="df-content">
                  <h4>Выгрузка данных</h4>
                  <p>Скачайте текущие настройки по всем товарам или только по опубликованным в формате XLSX</p>
                </div>
              </div>

              <div className="data-feature">
                <div className="df-icon"><IoFilterOutline /></div>
                <div className="df-content">
                  <h4>Фильтрация по статусам</h4>
                  <p>Опубликованные, на первом месте, ниже мин. цены, автообновление откл., архив — 6 фильтров</p>
                </div>
              </div>

              <div className="data-feature">
                <div className="df-icon"><IoTimeOutline /></div>
                <div className="df-content">
                  <h4>История изменений</h4>
                  <p>Просматривайте когда и на какую цену бот изменил товар. Полная прозрачность действий</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть с картинкой Kaspi */}
          <div className="integrations-visual">
            <div className="kaspi-showcase">
              <img 
                src="/kaspi-app.png" 
                alt="Kaspi.kz — крупнейший маркетплейс Казахстана" 
                className="kaspi-phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
