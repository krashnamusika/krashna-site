import React from 'react'
import Markdown from 'react-remarkable'
import { translate } from 'react-i18next'
import PageTemplate from '../templates/pageTemplate'

const ContactPage = ({ t }) => (
  <PageTemplate title={t('contact.title')}>
    <Markdown>{t('contact.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(ContactPage)
