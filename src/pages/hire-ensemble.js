import React from 'react'
import { translate } from 'react-i18next'
import Link from 'gatsby-link'
import PageTemplate from '../templates/pageTemplate'

const HireEnsemblePage = ({ t }) => (
  <PageTemplate title={t('hire-ensemble.title')}>
    <Link to="/contact">Contact us</Link> for more information.
  </PageTemplate>
)

export default translate('translations')(HireEnsemblePage)
