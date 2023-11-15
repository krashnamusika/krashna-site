import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberOrchestraPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'chamber-orchestra.title' })}>
    <Markdown>{intl.formatMessage({ id: 'chamber-orchestra.text' })}</Markdown>
    <CenteredImage
      url="/images/krashkoala.png"
      title={intl.formatMessage({ id: 'chamber-orchestra.title' })}
    />
  </PageTemplate>
)

export default injectIntl(ChamberOrchestraPage)
