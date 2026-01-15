import './Results.css'

function Results() {
  return (
    <section className="results">
      <div className="container">
        
        <div className="realtime-stats">
            <div className="rt-item">
                <div className="rt-val">1,3 млрд ₸</div>
                <div className="rt-desc">Общая сумма свыше 20 566 заказов за последние 24 часа</div>
            </div>
            <div className="rt-item">
                <div className="rt-val">x3</div>
                <div className="rt-desc">Средний показатель роста клиентов после SaleScout</div>
            </div>
        </div>

        <h2>Отзывы наших клиентов</h2>
        <div className="testimonials">
          <div className="testimonial">
            <div className="quote">"Все отлично благодаря Вам! Продажи выросли в 10 раз, и отчет по остаткам супер. Мозг никогда не отдыхал, всегда считала на уме, а теперь ассортимент вырос до 300 товаров."</div>
            <div className="author">Асель - Владелец магазина Мир кухни</div>
          </div>
           <div className="testimonial">
            <div className="quote">"Раньше сам следил за ценами, теперь всё делает SaleScout. Освободил себе время и заработал больше."</div>
            <div className="author">Нусыпбек</div>
          </div>
          <div className="testimonial">
            <div className="quote">"Аналитика помогает не ошибаться с товаром. Закупаю то, что надо — продажи и доход растут."</div>
            <div className="author">Зарина</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
