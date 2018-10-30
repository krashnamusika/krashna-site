import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const Vacature = ({ t }) => (
  <PageTemplate title={t('vacature.title')}>
    <Markdown>{t('vacature.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(Vacature)
