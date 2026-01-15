import './Timeline.css'
import { IoRocketOutline, IoPeopleOutline, IoStatsChartOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'

function Timeline() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="section-header">
          <h2>История AlgoSeller</h2>
          <p className="section-subtitle">Мы растем вместе с нашими клиентами</p>
        </div>

        <div className="timeline-track">
          <div className="timeline-item">
            <div className="timeline-node">
              <IoRocketOutline />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Март 2022</span>
              <h3>Запуск сервиса</h3>
              <p>Официальный старт. Первая оплата прошла 20 марта 2022 года. Мы заявили о себе рынку как о надежном инструменте.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-node">
              <IoStatsChartOutline />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">2023</span>
              <h3>Активный рост</h3>
              <p>Ежемесячно к нам присоединяется 70+ новых магазинов. Мы оптимизировали алгоритмы проверки цен до 3-х минут.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-node">
              <IoPeopleOutline />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Начало 2024</span>
              <h3>1000+ Магазинов</h3>
              <p>Преодолели отметку в 1000 активных клиентов. Сервис стал стандартом индустрии для профессиональных продавцов на Kaspi.</p>
            </div>
          </div>

          <div className="timeline-item current">
            <div className="timeline-node active">
              <IoCheckmarkCircleOutline />
            </div>
            <div className="timeline-content">
              <span className="timeline-date">Сегодня</span>
              <h3>4000+ Магазинов</h3>
              <p>Более 4000 предпринимателей доверяют нам свои продажи. Мы продолжаем улучшать скорость и стабильность работы.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
