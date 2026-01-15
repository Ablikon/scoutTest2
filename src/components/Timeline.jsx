import './Timeline.css'
import { IoRocketOutline, IoTrophyOutline, IoGlobeOutline, IoTrendingUpOutline, IoFlashOutline } from 'react-icons/io5'

function Timeline() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="section-header">
          <h2>Эволюция автоматизации</h2>
          <p className="section-desc">Как технология изменила подход к ценообразованию на маркетплейсах</p>
        </div>

        <div className="timeline-track">
          <div className="timeline-item">
            <div className="timeline-marker">
              <IoRocketOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <h3>Появление технологии</h3>
              <p>Первые продавцы начали использовать скрипты для автоматического мониторинга цен. Результаты превзошли все ожидания — продажи выросли в несколько раз.</p>
              <div className="timeline-stat">
                <IoFlashOutline />
                <span>Рост продаж до 300%</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoTrophyOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2021</div>
              <h3>Массовое внедрение</h3>
              <p>Автоматизация стала доступна широкому кругу продавцов. Облачные сервисы заменили сложные технические решения.</p>
              <div className="timeline-stat success">
                <IoTrophyOutline />
                <span>Тысячи активных пользователей</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoGlobeOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <h3>Выход на новые рынки</h3>
              <p>Технология начала распространяться на международные маркетплейсы. Интеграция с банковскими экосистемами.</p>
              <div className="timeline-stat">
                <IoGlobeOutline />
                <span>Поддержка 10+ платформ</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <IoTrendingUpOutline />
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <h3>Искусственный интеллект</h3>
              <p>Внедрение AI и машинного обучения для предсказательной аналитики и оптимизации стратегий ценообразования.</p>
              <div className="timeline-stat highlight">
                <IoTrendingUpOutline />
                <span>Миллиарды в обороте</span>
              </div>
            </div>
          </div>
        </div>

        <div className="future-vision">
          <div className="vision-badge">
            <IoRocketOutline />
            <span>Будущее</span>
          </div>
          <h3>Что дальше?</h3>
          <p>Полная автоматизация торговли • Персональные AI-ассистенты • Предсказательная аналитика спроса</p>
        </div>
      </div>
    </section>
  )
}

export default Timeline
