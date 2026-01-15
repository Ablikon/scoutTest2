import './Pricing.css'

function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Тарифы</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Мини</h3>
            <div className="price">35 000 ₸</div>
            <div className="period">в месяц</div>
            <ul className="features">
                <li>До 50 товаров</li>
                <li>Скорость x2</li>
                <li>Все фишки SaleScout</li>
            </ul>
            <button className="primary">Попробовать</button>
          </div>
          <div className="pricing-card">
            <h3>Стандарт</h3>
            <div className="price">50 000 ₸</div>
            <div className="period">в месяц</div>
            <ul className="features">
                <li>До 500 товаров</li>
                <li>История продаж</li>
                <li>Для небольших магазинов</li>
            </ul>
            <button className="primary">Попробовать</button>
          </div>
          <div className="pricing-card popular">
            <div className="badge">Популярный</div>
            <h3>Бизнес</h3>
            <div className="price">80 000 ₸</div>
            <div className="period">в месяц</div>
            <ul className="features">
                <li>До 800 товаров</li>
                <li>Для тех, кто освоился</li>
                <li>Расширенная аналитика</li>
            </ul>
            <button className="primary">Попробовать</button>
          </div>
          <div className="pricing-card">
            <h3>PRO</h3>
            <div className="price">100 000 ₸</div>
            <div className="period">в месяц</div>
            <ul className="features">
                <li>До 1300 товаров</li>
                <li>Для опытных</li>
                <li>Приоритетная поддержка</li>
            </ul>
            <button className="primary">Попробовать</button>
          </div>
        </div>
        <p className="pricing-note">*Все тарифы включают функции: защита от архивации, борьба за 1-5 места, фильтры, синхронизация остатков.</p>
      </div>
    </section>
  )
}

export default Pricing
