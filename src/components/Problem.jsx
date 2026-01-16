import './Problem.css'
import { IoAlertCircleOutline, IoRocketOutline, IoGitNetworkOutline, IoTimeOutline, IoTrendingDownOutline, IoEyeOffOutline } from 'react-icons/io5'

function Problem() {
  const problems = [
    {
      icon: <IoAlertCircleOutline />,
      title: "2-е место = 0 продаж",
      description: "Покупатель почти никогда не открывает список всех продавцов. 95% заказов забирает тот, кто стоит первым и светится на главной кнопке. Быть вторым — значит быть невидимым."
    },
    {
      icon: <IoRocketOutline />,
      title: "Скорость важнее демпинга",
      description: "Не обязательно ставить самую низкую цену на весь день и терять маржу. Достаточно быть дешевле конкурента на 1 тенге именно в тот момент, когда клиент зашел на сайт."
    },
    {
      icon: <IoGitNetworkOutline />,
      title: "Война алгоритмов",
      description: "Ваши конкуренты уже автоматизировали процессы. Пытаться обогнать бота вручную, постоянно обновляя страницу — это как бежать наперегонки с автомобилем."
    },
    {
      icon: <IoTimeOutline />,
      title: "Каждая минута = потерянный клиент",
      description: "Пока вы спите, завтракаете или заняты другими делами — конкуренты захватывают ваших покупателей. Рынок не ждет, он работает 24/7."
    },
    {
      icon: <IoTrendingDownOutline />,
      title: "Ручное управление убивает прибыль",
      description: "Постоянный мониторинг цен, ручное изменение — это не только потеря времени, но и неизбежные ошибки, которые стоят вам реальных денег."
    },
    {
      icon: <IoEyeOffOutline />,
      title: "Невидимость = неудача на маркетплейсе",
      description: "Если вас нет в топе выдачи Kaspi в момент поиска — вас просто не существует для покупателя. Алгоритм жесток и беспристрастен."
    }
  ];

  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2>Реальность рынка</h2>
          <p className="section-subtitle">
Выигрывает тот, кто понимает правила.
          </p>
        </div>

        <div className="reality-carousel">
          <div className="reality-track">
            {/* Первый набор карточек */}
            {problems.map((problem, index) => (
              <div className="reality-item" key={`original-${index}`}>
                <div className="r-icon">
                  {problem.icon}
                </div>
                <div className="r-content">
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
            {/* Дублируем карточки для бесшовной анимации */}
            {problems.map((problem, index) => (
              <div className="reality-item" key={`duplicate-${index}`}>
                <div className="r-icon">
                  {problem.icon}
                </div>
                <div className="r-content">
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
