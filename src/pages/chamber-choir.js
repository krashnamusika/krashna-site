import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberChoirPage = ({ t }) => (
  <PageTemplate title={t('chamber-choir.title')}>
    <Markdown>{t('chamber-choir.text')}</Markdown>
    <CenteredImage
      url="https://farm8.staticflickr.com/7341/16381074780_74ff518b92_z.jpg"
      title={t('chamber-choir.title')}
    />
  </PageTemplate>
)

export default translate('translations')(ChamberChoirPage)
