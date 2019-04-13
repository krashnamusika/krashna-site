import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const OrchestraPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'orchestra.title' })}>
    <Markdown>{intl.formatMessage({ id: 'orchestra.text' })}</Markdown>
    <CenteredButton url="/join">
      {intl.formatMessage({ id: 'orchestra.join-button' })}
    </CenteredButton>
    <CenteredImage
      url="https://farm1.staticflickr.com/489/32931063965_f773e1a5d4_z.jpg"
      title={intl.formatMessage({ id: 'orchestra.title' })}
    />
  </PageTemplate>
)

export default injectIntl(OrchestraPage)
