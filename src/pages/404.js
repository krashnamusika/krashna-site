import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import PageTemplate from '../templates/pageTemplate'

const NotFoundPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'not-found.title' })}>
    <p className="text-center lead">
      <Markdown>{intl.formatMessage({ id: 'not-found.message' })}</Markdown>
    </p>
    <CenteredButton url="/">
      <span className="fa fa-home mr-2" />
      {intl.formatMessage({ id: 'not-found.return-home' })}
    </CenteredButton>
  </PageTemplate>
)

export default injectIntl(NotFoundPage)
