import './Integrations.css'
import { IoCheckmarkCircleOutline, IoShieldCheckmarkOutline, IoLinkOutline, IoGlobeOutline, IoFlagOutline } from 'react-icons/io5'

function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        <div className="section-header">
          <h2>Поддерживаемые платформы</h2>
          <p className="section-desc">Работаем с крупнейшими маркетплейсами Казахстана и международных рынков</p>
        </div>

        <div className="platforms-grid">
          <div className="platform-card main">
            <div className="platform-badge primary">
              <IoShieldCheckmarkOutline />
              <span>Основная платформа</span>
            </div>
            <div className="platform-logo kaspi">Kaspi.kz</div>
            <div className="platform-stat">80% онлайн-торговли Казахстана</div>
            <p>Полная интеграция со всеми функциями: автоматизация цен, аналитика, уведомления в реальном времени</p>
            <div className="platform-features">
              <span>
                <IoCheckmarkCircleOutline />
                Проверка каждые 3 мин
              </span>
              <span>
                <IoCheckmarkCircleOutline />
                Защита от демпинга
              </span>
              <span>
                <IoLinkOutline />
                Интеграция с 1С
              </span>
            </div>
          </div>

          <div className="platform-card">
            <div className="platform-logo">HalykMarket</div>
            <div className="platform-stat">Проект Halyk Bank</div>
            <p>Автоматическое управление ценами и синхронизация остатков</p>
          </div>

          <div className="platform-card">
            <div className="platform-logo">Jmart</div>
            <div className="platform-stat">Маркетплейс Jusan Bank</div>
            <p>Мониторинг конкурентов и динамическое ценообразование</p>
          </div>

          <div className="platform-card international">
            <div className="platform-badge international">
              <IoGlobeOutline />
              <span>Международный</span>
            </div>
            <div className="platform-logo noon">Noon</div>
            <div className="platform-stat">Крупнейший маркетплейс ОАЭ</div>
            <p>Полный функционал автоматизации для международного рынка</p>
            <div className="platform-features">
              <span>
                <IoFlagOutline />
                ОАЭ
              </span>
              <span>
                <IoCheckmarkCircleOutline />
                Растущий рынок
              </span>
            </div>
          </div>
        </div>

        <div className="coming-soon">
          <h3>Скоро</h3>
          <div className="coming-platforms">
            <div className="coming-item">
              <div className="coming-flag">BR</div>
              <span>Бразилия</span>
            </div>
            <div className="coming-item">
              <div className="coming-flag">SA</div>
              <span>GCC регион</span>
            </div>
            <div className="coming-item">
              <div className="coming-flag">
                <IoGlobeOutline />
              </div>
              <span>Новые рынки СНГ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
