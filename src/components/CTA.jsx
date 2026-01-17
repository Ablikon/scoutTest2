import './CTA.css'
import { IoLogoWhatsapp } from 'react-icons/io5'

function CTA() {
  return (
    <section className="cta-slim">
      <div className="container">
        <div className="cta-bar">
          <div className="cta-text">
            <h3>Остались вопросы перед стартом?</h3>
            <p>Напишите нам в WhatsApp. Менеджер бесплатно проконсультирует и поможет настроить стратегию под вашу нишу.</p>
          </div>
          <div className="cta-action">
            <button className="btn-primary">
              <IoLogoWhatsapp style={{ fontSize: '1.2em' }} /> Написать менеджеру
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
