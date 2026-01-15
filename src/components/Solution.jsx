import './Solution.css'
import { IoSearchOutline, IoPricetagOutline, IoRocketOutline, IoCheckmarkCircleOutline, IoMoonOutline, IoStorefrontOutline, IoEyeOutline } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <h2>Принцип работы системы</h2>
          <p className="section-desc">Три автоматических действия, которые ставят вас на первое место</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon-wrapper">
              <IoSearchOutline />
            </div>
            <h3>Мониторинг рынка</h3>
            <p>Система каждые 3 минуты сканирует цены всех конкурентов по вашим товарным позициям. Работает круглосуточно без перерывов.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon-wrapper">
              <IoPricetagOutline />
            </div>
            <h3>Умная корректировка</h3>
            <p>При обнаружении более низкой цены алгоритм автоматически снижает вашу стоимость на минимальный шаг. Гарантия: цена никогда не опустится ниже установленного вами порога.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon-wrapper">
              <IoRocketOutline />
            </div>
            <h3>Динамическая маржа</h3>
            <p>Когда конкуренты повышают стоимость, система синхронно поднимает и ваши цены. Результат: максимальная прибыль при сохранении лидерства в выдаче.</p>
          </div>
        </div>

        <div className="benefits-section">
          <h3>Преимущества автоматизации</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon"><IoCheckmarkCircleOutline /></div>
              <h4>Лидерство 24/7</h4>
              <p>Анализ каждые 180 секунд гарантирует, что вы будете первыми более 20 часов в сутки. Конкуренты физически не могут поспеть за этим темпом.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoMoonOutline /></div>
              <h4>Работа в режиме нон-стоп</h4>
              <p>Система не знает выходных, праздников и сна. Пока вы отдыхаете, алгоритм продолжает защищать ваши позиции и привлекать клиентов.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoStorefrontOutline /></div>
              <h4>Единая панель управления</h4>
              <p>Контроль всех торговых точек и ассортимента из одного интерфейса. Экономия времени и удобство администрирования.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoEyeOutline /></div>
              <h4>Мониторинг конкурентов</h4>
              <p>Прозрачная аналитика ценовых стратегий других продавцов. Принимайте обоснованные решения на основе данных.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
