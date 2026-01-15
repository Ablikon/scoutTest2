import './HowItWorks.css'
import { IoRocketOutline, IoBriefcaseOutline, IoTimeOutline } from 'react-icons/io5'

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Подходит для любого бизнеса</h2>
          <p className="section-desc">Помогаем на любом этапе — от первого товара до большого магазина</p>
        </div>

        <div className="use-cases-grid">
          <div className="use-case-card">
            <div className="case-icon"><IoRocketOutline /></div>
            <h3>Только начинаете продавать?</h3>
            <p>Наши специалисты подберут <strong>популярные товары</strong>, которые хорошо продаются. Поможем выбрать нишу и сделать первые шаги.</p>
            <p className="small-text">Консультация по выбору товаров совершенно бесплатна</p>
            <button className="text-btn">Получить помощь</button>
          </div>
          
          <div className="use-case-card">
            <div className="case-icon"><IoBriefcaseOutline /></div>
            <h3>Большой магазин?</h3>
            <p>Личный менеджер подключит робота к вашей программе учёта быстро и без лишних затрат.</p>
            <p className="small-text">Бонус: проверим ваш склад и подскажем, что лучше продавать</p>
            <button className="text-btn">Обсудить подключение</button>
          </div>
          
          <div className="use-case-card">
            <div className="case-icon"><IoTimeOutline /></div>
            <h3>Работаете с предзаказами?</h3>
            <p>Легко настроить сроки доставки для каждого товара через простой интерфейс. Не нужно разбираться в таблицах и прайс-листах.</p>
            <p className="small-text">Робот меняет только цены, сроки доставки остаются как вы установили</p>
            <button className="text-btn">Настроить робота</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
