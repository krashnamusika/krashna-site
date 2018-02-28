import React from 'react'
import { translate } from 'react-i18next'
import PageTemplate from '../templates/pageTemplate'

const ContactPage = ({ t }) => (
  <PageTemplate title={t('contact.title')}>
    Contact us at <a href="mailto:krashna@tudelft.nl">krashna@tudelft.nl</a> for
    any questions you may have.
  </PageTemplate>
)

export default translate('translations')(ContactPage)
