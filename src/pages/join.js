import React from 'react'
import { translate } from 'react-i18next'
import Link from 'gatsby-link'
import PageTemplate from '../templates/pageTemplate'

const JoinPage = ({ t }) => (
  <PageTemplate title={t('join.title')}>
    <Link to="/contact">Contact us</Link> for more information.
  </PageTemplate>
)

export default translate('translations')(JoinPage)
