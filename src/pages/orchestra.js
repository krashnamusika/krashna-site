import React from 'react'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

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

export default translate('translations')(OrchestraPage)
