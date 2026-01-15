import './HowItWorks.css'
import { IoRocketOutline, IoBriefcaseOutline, IoTimeOutline } from 'react-icons/io5'

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Решения для любого уровня</h2>
          <p className="section-desc">Индивидуальный подход в зависимости от стадии развития вашего бизнеса</p>
        </div>

        <div className="use-cases-grid">
          <div className="use-case-card">
            <div className="case-icon"><IoRocketOutline /></div>
            <h3>Только начинаете?</h3>
            <p>Команда аналитиков подберёт <strong>топовые товарные позиции</strong> с высоким спросом специально для вашего старта.</p>
            <p className="small-text">Консультация по выбору ниши и первым шагам абсолютно бесплатна</p>
            <button className="text-btn">Получить консультацию</button>
          </div>
          
          <div className="use-case-card">
            <div className="case-icon"><IoBriefcaseOutline /></div>
            <h3>Масштабный проект?</h3>
            <p>Персональный менеджер выполнит интеграцию с вашей учётной системой быстро и без дополнительных расходов.</p>
            <p className="small-text">Бонус: аудит складских остатков и рекомендации по оптимизации ассортимента</p>
            <button className="text-btn">Обсудить интеграцию</button>
          </div>
          
          <div className="use-case-card">
            <div className="case-icon"><IoTimeOutline /></div>
            <h3>Работаете с предзаказами?</h3>
            <p>Гибкая настройка сроков ожидания для каждой позиции через веб-интерфейс. Никаких таблиц и прайс-листов.</p>
            <p className="small-text">Система корректирует цены, не затрагивая параметры доставки</p>
            <button className="text-btn">Настроить систему</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
