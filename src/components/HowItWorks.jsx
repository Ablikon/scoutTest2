import './HowItWorks.css'
import { IoSpeedometerOutline, IoStatsChartOutline, IoLogoWhatsapp, IoCubeOutline, IoDocumentTextOutline, IoSettingsOutline } from 'react-icons/io5'

function HowItWorks() {
  const features = [
    {
      icon: <IoSpeedometerOutline />,
      title: "Бот автоснижения цен",
      description: "Проверяет цены конкурентов каждые 3 минуты и автоматически снижает вашу цену на 1 тенге (или заданный шаг). Настройка минимальной цены защищает от продажи в минус."
    },
    {
      icon: <IoStatsChartOutline />,
      title: "Аналитика товаров Kaspi",
      description: "Уникальная формула расчёта продаж на основе заданных параметров. История продаж, фильтры по категориям и брендам."
    },
    {
      icon: <IoLogoWhatsapp />,
      title: "Сбор отзывов через WhatsApp",
      description: "Автоматическая отправка двух сообщений клиентам после заказа. Повышает рейтинг магазина и участие в акциях Kaspi."
    },
    {
      icon: <IoCubeOutline />,
      title: "Управление остатками",
      description: "Бот контролирует остатки и автоматически снимает товар с продажи при нуле. Требуется настройка API токена для доступа к заказам."
    },
    {
      icon: <IoDocumentTextOutline />,
      title: "Калькулятор минимальной цены",
      description: "Расчёт минимальной цены с учётом закупочной стоимости, комиссии Kaspi (стандартной или акционной) и желаемого процента прибыли."
    },
    {
      icon: <IoSettingsOutline />,
      title: "Массовые действия",
      description: "Настройка шага автоснижения, автоподнятие цен вслед за конкурентами, автопринятие заказов и загрузка прайс-листов в Excel."
    }
  ];

  return (
    <section className="capabilities">
      <div className="container">
        <div className="section-header">
          <h2>Возможности</h2>
          <p className="section-subtitle">
            Полная настройка магазина на Kaspi.kz: от мониторинга цен до сбора отзывов
          </p>
        </div>

        <div className="capabilities-table">
          {features.map((feature, index) => (
            <div className="table-cell" key={index}>
              <div className="cell-header">
                <span className="cell-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
