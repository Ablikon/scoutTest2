import './Problem.css'

function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Проблема</span>
          <h2>Почему заказов меньше, чем хочется?</h2>
          <p className="section-desc">Вот 4 причины, почему покупатели уходят к конкурентам</p>
        </div>
        
        <div className="problems-grid">
          <div className="problem-card">
            <div className="card-number">01</div>
            <div className="icon">🎯</div>
            <h3>Ты не первый в списке</h3>
            <p>На Kaspi 90% покупателей берут у того, кто первый. А первый = самый дешёвый. Если дороже хоть на 1₸ — заказ уходит.</p>
            <div className="problem-highlight">Первый забирает почти все продажи</div>
          </div>
          
          <div className="problem-card">
            <div className="card-number">02</div>
            <div className="icon">⏰</div>
            <h3>Конкуренты быстрее</h3>
            <p>Пока ты меняешь 100 товаров за 2 часа, конкуренты с ботами уже 10 раз обновили цены и забрали покупателей.</p>
            <div className="problem-highlight">Каждая минута = упущенные заказы</div>
          </div>
          
          <div className="problem-card">
            <div className="card-number">03</div>
            <div className="icon">😴</div>
            <h3>Люди отдыхают</h3>
            <p>Менеджер устал, отвлёкся, пошёл обедать. А конкуренты не спят и не устают — они получают твои продажи 24/7.</p>
            <div className="problem-highlight">Бизнес не должен зависеть от людей</div>
          </div>
          
          <div className="problem-card">
            <div className="card-number">04</div>
            <div className="icon">🌙</div>
            <h3>Ночью всё уходит</h3>
            <p>Люди покупают вечером после работы с 18:00 до 23:00. Ты уже дома, а конкуренты снижают цены и забирают заказы.</p>
            <div className="problem-highlight">Ночью продаётся 40% заказов</div>
          </div>
        </div>

        <div className="problem-summary">
          <div className="summary-icon"></div>
          <h3>Итог: ты теряешь до 70% возможных заказов каждый день</h3>
          <p>Но это можно исправить за 3 минуты...</p>
        </div>
      </div>
    </section>
  )
}

export default Problem
