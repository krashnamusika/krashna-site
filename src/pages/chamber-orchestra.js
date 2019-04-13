import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberOrchestraPage = ({ t }) => (
  <PageTemplate title={t('chamber-orchestra.title')}>
    <Markdown>{t('chamber-orchestra.text')}</Markdown>
    <CenteredImage
      url="https://farm1.staticflickr.com/570/33116082532_174fde9846_z.jpg"
      title={t('chamber-orchestra.title')}
    />
  </PageTemplate>
)

export default withTranslation()(ChamberOrchestraPage)
