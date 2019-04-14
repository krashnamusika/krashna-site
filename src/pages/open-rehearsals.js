import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const OpenRehearsalsPage = ({ intl }) => (
  <PageTemplate
    title={intl.formatMessage({ id: 'open-rehearsals.page.title' })}
  >
    <Markdown>
      {intl.formatMessage({ id: 'open-rehearsals.page.text' })}
    </Markdown>
  </PageTemplate>
)

export default injectIntl(OpenRehearsalsPage)
