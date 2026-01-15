import './Solution.css'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <span className="section-badge success">Решение</span>
          <h2>Как SaleScout делает тебя №1?</h2>
          <p className="section-desc">Три простых шага — и ты всегда первый в списке продавцов</p>
        </div>

        <div className="how-it-works-visual">
          <div className="work-step">
            <div className="step-visual">
              <div className="step-icon">🔍</div>
              <div className="step-line"></div>
            </div>
            <div className="step-content">
              <div className="step-label">Шаг 1</div>
              <h3>Смотрим на конкурентов</h3>
              <p>Каждые <strong>3 минуты</strong> проверяем цены всех продавцов твоего товара на Kaspi. Работаем 24/7 без выходных.</p>
              <div className="step-benefit">
                <span className="benefit-icon">⚡</span>
                <span>480 проверок в сутки</span>
              </div>
            </div>
          </div>

          <div className="work-step">
            <div className="step-visual">
              <div className="step-icon">💰</div>
              <div className="step-line"></div>
            </div>
            <div className="step-content">
              <div className="step-label">Шаг 2</div>
              <h3>Делаем тебя дешевле</h3>
              <p>Если кто-то дешевле — мы <strong>сразу снижаем твою цену на 1₸</strong>. Но не ниже твоего минимума, который ты сам установил.</p>
              <div className="step-benefit">
                <span className="benefit-icon">🛡️</span>
                <span>Защита от убытков</span>
              </div>
            </div>
          </div>

          <div className="work-step">
            <div className="step-visual">
              <div className="step-icon">🎯</div>
            </div>
            <div className="step-content">
              <div className="step-label">Шаг 3</div>
              <h3>Ты становишься первым</h3>
              <p>Покупатели видят тебя первым → выбирают тебя. Если конкуренты поднимут цену — мы тоже поднимем, увеличив твою прибыль.</p>
              <div className="step-benefit">
                <span className="benefit-icon">📈</span>
                <span>Больше заказов + больше прибыли</span>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-showcase">
          <h3>Что ты получаешь?</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-large">🏆</div>
              <h4>Всегда первый</h4>
              <p>Ты в топе 20+ часов в сутки. Конкуренты не успевают за нашей скоростью.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-large">😴</div>
              <h4>Работает без тебя</h4>
              <p>Спи спокойно — бот следит за ценами даже ночью и не делает ошибок.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-large">🏪</div>
              <h4>Все магазины сразу</h4>
              <p>Управляй всеми товарами из всех магазинов в одном окне. Удобно и быстро.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon-large">💎</div>
              <h4>Умная маржа</h4>
              <p>Цена поднимается автоматически, если конкуренты дороже — ты зарабатываешь больше.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
