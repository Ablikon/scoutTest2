import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import './Problem.css'
import { IoAlertCircleOutline, IoRocketOutline, IoGitNetworkOutline, IoTimeOutline, IoTrendingDownOutline, IoEyeOffOutline } from 'react-icons/io5'

function Problem() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const icons = [
    <IoAlertCircleOutline key="alert" />,
    <IoRocketOutline key="rocket" />,
    <IoGitNetworkOutline key="network" />,
    <IoTimeOutline key="time" />,
    <IoTrendingDownOutline key="trending" />,
    <IoEyeOffOutline key="eye" />
  ]

  const problems = t('problem.items', { returnObjects: true }).map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description
  }))

  return (
    <section className="problem">
      <div className="container">
        <div className="section-header">
          <h2 style={theme === 'light' ? { color: '#06141B', fontSize: '48px' } : {}}>{t('problem.title')}</h2>
          <p className="section-subtitle">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="reality-carousel">
          <div className="reality-track">
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
