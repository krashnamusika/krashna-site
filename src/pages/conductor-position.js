import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberChoirPage = ({ t }) => (
  <PageTemplate title={t('conductor-position.title')}>
    <Markdown>{t('conductor-position.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(ChamberChoirPage)
