import { useTranslation } from 'react-i18next'
import './Solution.css'
import { IoLogInOutline, IoOptionsOutline, IoRocketOutline } from 'react-icons/io5'

function Solution() {
  const { t } = useTranslation()

  return (
    <section className="solution" id="solution-section">
      <div className="container">

        <div className="solution-wrapper">
          <div className="solution-intro">
            <h2>{t('solution.title')}</h2>
            <p className="section-subtitle">
              {t('solution.subtitle')}
            </p>
          </div>

          <div className="solution-steps">
            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">01</span>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoLogInOutline />
                </div>
                <div className="step-text">
                  <h3>{t('solution.step1.title')}</h3>
                  <p>{t('solution.step1.description')}</p>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">02</span>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoOptionsOutline />
                </div>
                <div className="step-text">
                  <h3>{t('solution.step2.title')}</h3>
                  <p>{t('solution.step2.description')}</p>
                </div>
              </div>
            </div>

            <div className="step-item">
              <div className="step-marker">
                <span className="step-num">03</span>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <IoRocketOutline />
                </div>
                <div className="step-text">
                  <h3>{t('solution.step3.title')}</h3>
                  <p>{t('solution.step3.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Solution
