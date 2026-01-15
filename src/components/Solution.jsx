import './Solution.css'
import { IoSearchOutline, IoPricetagOutline, IoTrophyOutline, IoCheckmarkCircleOutline, IoTimeOutline, IoStorefrontOutline, IoEyeOutline } from 'react-icons/io5'

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-header">
          <h2>Как это работает?</h2>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-icon-wrapper">
              <IoSearchOutline />
            </div>
            <h3>Проверка цен и товаров</h3>
            <p>Бот каждые 3 минуты заходит на Kaspi и проверяет каждый ваш товар.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <IoPricetagOutline />
            </div>
            <h3>Вывод на первое место</h3>
            <p>Если ваш магазин не первый в списке продавцов, то бот смотрит на вашу минимальную цену и, если может, то снижает цену на Kaspi. Как только Kaspi применит новую цену, вы будете первым среди продавцов.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <IoTrophyOutline />
            </div>
            <h3>Автообновление цен</h3>
            <p>Если ваши конкуренты поднимут цену, бот тоже автоматически поднимет цену, увеличив маржу и оставив вас первым.</p>
          </div>
        </div>

        <div className="benefits-section">
          <h3>Увеличьте заказы минимум в 2 раза за счет</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon"><IoCheckmarkCircleOutline /></div>
              <h4>Всегда первый</h4>
              <p>SaleScout анализирует ваши товары каждые 3 минуты и снижает цену на 1 тенге от конкурента. При чем ниже вашей минимальной допустимой цены мы не упадем. Никаких убытков.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoTimeOutline /></div>
              <h4>Не спим</h4>
              <p>SaleScout никогда не спит и поэтому даже ночью он анализирует ваши товары и ставит вас на 1 место. Даже ночью вы не пропустите покупателей.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoStorefrontOutline /></div>
              <h4>Несколько магазинов</h4>
              <p>Теперь вы можете в одном окне управлять товарами всех своих магазинов. Это крайне удобно и экономит много времени.</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon"><IoEyeOutline /></div>
              <h4>Конкуренты</h4>
              <p>Вы можете наблюдать за тем, как ваши конкуренты спускают цены. Удобно. Прикольно.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
