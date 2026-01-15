import './CTA.css'
import { IoArrowForward } from 'react-icons/io5'

function CTA() {
  return (
    <section className="cta-slim">
      <div className="container">
        <div className="cta-bar">
          <div className="cta-text">
            <h3>Протестируйте бесплатно</h3>
            <p>Первые 3 дня — полный доступ ко всем функциям без привязки карты.</p>
          </div>
          <div className="cta-action">
            <button className="btn-primary">
              Начать тест сейчас <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
