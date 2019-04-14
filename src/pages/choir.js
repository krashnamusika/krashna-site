import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChoirPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'choir.title' })}>
    <Markdown>{intl.formatMessage({ id: 'choir.text' })}</Markdown>
    <CenteredButton url="/join">
      {intl.formatMessage({ id: 'choir.join-button' })}
    </CenteredButton>
    <CenteredImage
      url="https://farm3.staticflickr.com/2270/32550553690_8527a23072_z.jpg"
      title={intl.formatMessage({ id: 'choir.title' })}
    />
  </PageTemplate>
)

export default injectIntl(ChoirPage)
