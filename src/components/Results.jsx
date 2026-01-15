import './Results.css'

function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="realtime-stats">
          <div className="rt-item">
            <div className="rt-val">x3</div>
            <div className="rt-label">основано на всех клиентах</div>
            <div className="rt-desc">Средний показатель роста клиентов после SaleScout</div>
          </div>
          <div className="rt-item">
            <div className="rt-val">1,3 млрд ₸</div>
            <div className="rt-label">Данные обновляются в realtime</div>
            <div className="rt-desc">Общая сумма свыше 20 544 заказов за последние 24 часа пользователей SaleScout</div>
          </div>
        </div>

        <h2>Отзывы наших клиентов</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="quote">Все отлично благодаря Вам! Все работает, продажи выросли на 10 раз, теперь и отчёт по остаткам можно поставить, это вообще супер 🙌 мозг у меня никогда не отдыхал потому что всегда считала количество на уме :) благодаря вам у меня вырос ассортимент товаров от 150 до 300 👏</div>
            <div className="author">Асель • Владелец магазина Мир кухни</div>
          </div>
          <div className="testimonial">
            <div className="quote">Работаю с SaleScout, доволен. экономит время и помогает держать продажи на высоком уровне.</div>
            <div className="author">Владислав</div>
          </div>
          <div className="testimonial">
            <div className="quote">Раньше сам следил за ценами, теперь всё делает SaleScout. Освободил себе время и заработал больше</div>
            <div className="author">Нусыпбек</div>
          </div>
          <div className="testimonial">
            <div className="quote">Аналитика SaleScout помогает не ошибаться с товаром. Закупаю то, что надо — продажи и доход растут</div>
            <div className="author">Зарина</div>
          </div>
          <div className="testimonial">
            <div className="quote">Все отлично, никаких лишний трат</div>
            <div className="author">Амиржан • Владелец магазина ShowTime</div>
          </div>
          <div className="testimonial">
            <div className="quote">Не успеваю выполнять все заказы, спасибо 🔥</div>
            <div className="author">Актилек • Владелец магазина GQLUX</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
