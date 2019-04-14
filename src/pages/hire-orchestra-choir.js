import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const HireOrchestraChoirPage = ({ intl }) => (
  <PageTemplate
    title={intl.formatMessage({ id: 'hire-orchestra-choir.title' })}
  >
    <Markdown>
      {intl.formatMessage({ id: 'hire-orchestra-choir.text' })}
    </Markdown>
  </PageTemplate>
)

export default injectIntl(HireOrchestraChoirPage)
