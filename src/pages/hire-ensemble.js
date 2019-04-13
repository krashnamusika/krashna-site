import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const HireEnsemblePage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'hire-ensemble.title' })}>
    <Markdown options={{ html: true }}>
      {intl.formatMessage({ id: 'hire-ensemble.text' })}
    </Markdown>
  </PageTemplate>
)

export default injectIntl(HireEnsemblePage)
