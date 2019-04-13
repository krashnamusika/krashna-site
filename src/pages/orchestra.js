import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const OrchestraPage = ({ t }) => (
  <PageTemplate title={t('orchestra.title')}>
    <Markdown>{t('orchestra.text')}</Markdown>
    <CenteredButton url="/join">{t('orchestra.join-button')}</CenteredButton>
    <CenteredImage
      url="https://farm1.staticflickr.com/489/32931063965_f773e1a5d4_z.jpg"
      title={t('orchestra.title')}
    />
  </PageTemplate>
)

export default withTranslation()(OrchestraPage)
