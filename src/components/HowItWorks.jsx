import './HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="use-cases-grid">
          <div className="use-case-card">
            <h3>Ты начинающий продавец?</h3>
            <p>Мы подберем <strong>высокопродаваемые товары</strong> для твоего быстрого старта на Kaspi.</p>
            <p className="small-text">Оставь заявку и мы подскажем с чего тебе начать!</p>
            <button className="text-btn">Попробовать бесплатно</button>
          </div>
          
          <div className="use-case-card">
            <h3>У Вас крупный бизнес и есть нюансы в интеграции?</h3>
            <p>Предоставим персонального менеджера и подключим вашу систему быстро и без лишних затрат с вашей стороны.</p>
            <p className="small-text">Также сделаем анализ остатков и подскажем, как вытащить прибыль из них.</p>
            <button className="text-btn">Попробовать бесплатно</button>
          </div>
          
          <div className="use-case-card">
            <h3>Продаешь товары по предзаказу?</h3>
            <p>Не проблема! Настроить кол-во дней предзаказа можно легко у нас на сайте, без всяких екселей и прайс листов.</p>
            <p className="small-text">SaleScout будет менять цены по этим товарам, а предзаказ не собьется.</p>
            <button className="text-btn">Попробовать бесплатно</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
