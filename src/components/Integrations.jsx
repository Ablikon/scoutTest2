import { useTranslation } from 'react-i18next'
import './Integrations.css'
import { IoCloudUploadOutline, IoDownloadOutline, IoFilterOutline, IoTimeOutline } from 'react-icons/io5'

function Integrations() {
  const { t } = useTranslation()

  const icons = [
    <IoCloudUploadOutline key="upload" />,
    <IoDownloadOutline key="download" />,
    <IoFilterOutline key="filter" />,
    <IoTimeOutline key="time" />
  ]

  const features = t('integrations.features', { returnObjects: true }).map((feature, index) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description
  }))

  return (
    <section className="integrations">
      <div className="container">
        <div className="integrations-header">
          <h2>{t('integrations.title')}</h2>
          <p className="subtitle">{t('integrations.subtitle')}</p>
        </div>

        <div className="integrations-layout">
          <div className="integrations-content">
            <div className="data-features">
              {features.map((feature, index) => (
                <div className="data-feature" key={index}>
                  <div className="df-icon">{feature.icon}</div>
                  <div className="df-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="integrations-visual">
            <div className="kaspi-showcase">
              <img
                src="/kaspi-app.png"
                alt={t('integrations.kaspiAlt')}
                className="kaspi-phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
