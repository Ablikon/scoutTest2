import './Timeline.css'
import { IoRocketOutline, IoTrophyOutline, IoGlobeOutline, IoTrendingUpOutline, IoFlashOutline } from 'react-icons/io5'

function Timeline() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="section-header">
          <h2>Путь к успеху</h2>
          <p className="section-desc">От идеи во время локдауна до международной экспансии</p>
        </div>

        <div className="timeline-track">
          <div className="timeline-item">
            <div className="timeline-marker">
              <IoRocketOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <h3>Рождение идеи</h3>
              <p>Во время пандемии Рустам Жуаспаев торговал смартфонами через ForteMarket. Заметив, что продажи идут к продавцу с минимальной ценой, попросил стажёра написать скрипт автоматизации.</p>
              <div className="timeline-stat">
                <IoFlashOutline />
                <span>Первый прототип SaleScout</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoTrophyOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <h3>Запуск SaaS</h3>
              <p>Переход от коробочной версии (300-450 тыс ₸) к облачной подписке. Регистрация компании ТОО Letostore.kz и вход в резидентуру Astana Hub.</p>
              <div className="timeline-stat success">
                <IoTrophyOutline />
                <span>Прибыль с первого дня</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoGlobeOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2022 (ноябрь)</div>
              <h3>Международная экспансия</h3>
              <p>Выход на рынок ОАЭ и интеграция с крупнейшим маркетплейсом Noon. Начало переговоров с банками о включении в их экосистемы.</p>
              <div className="timeline-stat">
                <IoGlobeOutline />
                <span>Первый международный рынок</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoTrendingUpOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <h3>Признание и рост</h3>
              <p>Публикация в Forbes Kazakhstan. CEO прошёл обучение в Draper University (Тим Дрейпер). Встреча с Президентом Казахстана по вопросам IT-экспорта.</p>
              <div className="timeline-stat highlight">
                <IoTrendingUpOutline />
                <span>1 млрд ₸ ежедневного оборота</span>
              </div>
            </div>
          </div>
        </div>

        <div className="future-vision">
          <div className="vision-badge">
            <IoRocketOutline />
            <span>Будущее</span>
          </div>
          <h3>Планы расширения</h3>
          <p>Внедрение AI и машинного обучения • Выход на рынки Бразилии и GCC • Новые интеграции с банковскими экосистемами</p>
        </div>
      </div>
    </section>
  )
}

export default Timeline
