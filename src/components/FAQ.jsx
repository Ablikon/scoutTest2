import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './FAQ.css'
import { IoAdd, IoRemove } from 'react-icons/io5'

function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const items = t('faq.items', { returnObjects: true }).map(item => ({
    q: item.question,
    a: item.answer
  }))

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2>{t('faq.title')}</h2>
        <div className="faq-accordion">
          {items.map((item, index) => (
            <div key={index} className={`faq-row ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-head" onClick={() => toggle(index)}>
                <h4>{item.q}</h4>
                <div className="faq-icon">
                  {openIndex === index ? <IoRemove /> : <IoAdd />}
                </div>
              </div>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
