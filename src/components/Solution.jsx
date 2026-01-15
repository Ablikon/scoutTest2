import './Solution.css'
import { IoSearchOutline, IoPricetagOutline, IoRocketOutline, IoCheckmarkCircleOutline, IoMoonOutline, IoStorefrontOutline, IoEyeOutline, IoStatsChartOutline } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <h2>Принцип работы системы</h2>
          <p className="section-desc">Три автоматических действия, которые ставят вас на первое место</p>
        </div>

        <div className="workflow-visual">
          <div className="workflow-step">
            <div className="workflow-icon"><IoSearchOutline /></div>
            <div className="workflow-label">Мониторинг</div>
            <div className="workflow-arrow">→</div>
          </div>
          <div className="workflow-step">
            <div className="workflow-icon"><IoPricetagOutline /></div>
            <div className="workflow-label">Корректировка</div>
            <div className="workflow-arrow">→</div>
          </div>
          <div className="workflow-step">
            <div className="workflow-icon"><IoRocketOutline /></div>
            <div className="workflow-label">Лидерство</div>
          </div>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon-wrapper">
              <IoSearchOutline />
            </div>
            <h3>Мониторинг рынка</h3>
            <p>Система каждые 3 минуты сканирует цены всех конкурентов по вашим товарным позициям. Работает круглосуточно без перерывов.</p>
            <div className="step-metric">
              <IoStatsChartOutline />
              <span>480 проверок в сутки</span>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon-wrapper">
              <IoPricetagOutline />
            </div>
            <h3>Умная корректировка</h3>
            <p>При обнаружении более низкой цены алгоритм автоматически снижает вашу стоимость на минимальный шаг.</p>
            <div className="step-metric">
              <IoStatsChartOutline />
              <span>Защита от убытков</span>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon-wrapper">
              <IoRocketOutline />
            </div>
            <h3>Динамическая маржа</h3>
            <p>Когда конкуренты повышают стоимость, система синхронно поднимает и ваши цены.</p>
            <div className="step-metric">
              <IoStatsChartOutline />
              <span>Максимум прибыли</span>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h3>Преимущества автоматизации</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon"><IoCheckmarkCircleOutline /></div>
              <h4>Лидерство 24/7</h4>
              {/* <div className="benefit-progress">
                <div className="progress-fill" style={{width: '83%'}}></div>
              </div> */}
              <p>Вы первые более 20 часов в сутки. Конкуренты не успевают за темпом анализа каждые 180 секунд.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoMoonOutline /></div>
              <h4>Работа в режиме нон-стоп</h4>
              {/* <div className="benefit-progress">
                <div className="progress-fill" style={{width: '100%'}}></div>
              </div> */}
              <p>Система не знает выходных, праздников и сна. Алгоритм защищает ваши позиции круглосуточно.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoStorefrontOutline /></div>
              <h4>Единая панель</h4>
              {/* <div className="benefit-progress">
                <div className="progress-fill" style={{width: '95%'}}></div>
              </div> */}
              <p>Контроль всех торговых точек и ассортимента из одного интерфейса.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoEyeOutline /></div>
              <h4>Мониторинг конкурентов</h4>
              {/* <div className="benefit-progress">
                <div className="progress-fill" style={{width: '90%'}}></div>
              </div> */}
              <p>Прозрачная аналитика ценовых стратегий других продавцов в реальном времени.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
