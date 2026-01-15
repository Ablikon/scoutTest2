import './Results.css'

function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="realtime-stats">
          <div className="rt-item">
            <div className="rt-val">x3</div>
            <div className="rt-label">средний показатель</div>
            <div className="rt-desc">Рост продаж после внедрения автоматизации</div>
          </div>
          <div className="rt-item">
            <div className="rt-val">1,3 млрд ₸</div>
            <div className="rt-label">Данные обновляются в realtime</div>
            <div className="rt-desc">Общий оборот пользователей системы за последние 24 часа</div>
          </div>
        </div>

        <h2>Отзывы пользователей</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="quote">Раньше тратил по 3-4 часа в день на отслеживание цен конкурентов. Теперь всё делается автоматически, продажи выросли в 8 раз. Освободилось время на развитие ассортимента.</div>
            <div className="author">Владелец магазина электроники</div>
          </div>
          <div className="testimonial">
            <div className="quote">Система окупилась за первую неделю. Теперь всегда на первых позициях, заказов стало в разы больше.</div>
            <div className="author">Продавец на Kaspi</div>
          </div>
          <div className="testimonial">
            <div className="quote">Попробовал бесплатный период — результат превзошёл ожидания. Забрал подписку сразу на год.</div>
            <div className="author">Онлайн-ритейлер</div>
          </div>
          <div className="testimonial">
            <div className="quote">Аналитика помогает не ошибаться с товаром. Вижу, что продаётся, закупаю правильно — доход растёт.</div>
            <div className="author">Предприниматель</div>
          </div>
          <div className="testimonial">
            <div className="quote">Конкуренты не успевают за моими ценами. Продажи стабильные каждый день.</div>
            <div className="author">Владелец интернет-магазина</div>
          </div>
          <div className="testimonial">
            <div className="quote">Не успеваю выполнять все заказы — нужно расширять склад!</div>
            <div className="author">Продавец товаров для дома</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
