import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const ContactPage = ({ t }) => (
  <PageTemplate title={t('contact.title')}>
    <Markdown>{t('contact.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(ContactPage)
