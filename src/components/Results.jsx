import './Results.css'

function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="realtime-stats">
          <div className="rt-item">
            <div className="rt-val">x3</div>
            <div className="rt-label">средний результат</div>
            <div className="rt-desc">Продажи растут в 3 раза после подключения</div>
          </div>
          <div className="rt-item">
            <div className="rt-val">1,3 млрд ₸</div>
            <div className="rt-label">Цифры обновляются прямо сейчас</div>
            <div className="rt-desc">Столько продали все магазины с роботом за последние сутки</div>
          </div>
        </div>

        <h2>Что говорят люди</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="quote">Раньше сидел по 3-4 часа каждый день и менял цены. Теперь робот всё делает сам, продажи выросли в 8 раз. Освободилось время на закупки и расширение.</div>
            <div className="author">Магазин техники</div>
          </div>
          <div className="testimonial">
            <div className="quote">Робот окупился за первую неделю. Теперь постоянно на первом месте, заказов стало намного больше.</div>
            <div className="author">Продавец на Kaspi</div>
          </div>
          <div className="testimonial">
            <div className="quote">Попробовал 3 дня бесплатно — результат превзошёл все ожидания. Сразу купил подписку на год.</div>
            <div className="author">Интернет-магазин</div>
          </div>
          <div className="testimonial">
            <div className="quote">Теперь вижу, что продаётся хорошо, а что нет. Закупаю правильно — прибыль растёт каждый месяц.</div>
            <div className="author">Предприниматель</div>
          </div>
          <div className="testimonial">
            <div className="quote">Конкуренты не успевают за моими ценами. Заказы идут стабильно каждый день.</div>
            <div className="author">Владелец магазина</div>
          </div>
          <div className="testimonial">
            <div className="quote">Не успеваю обрабатывать все заказы — приходится расширять склад!</div>
            <div className="author">Продавец товаров для дома</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
