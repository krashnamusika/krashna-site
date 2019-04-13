import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberChoirPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'chamber-choir.title' })}>
    <Markdown>{intl.formatMessage({ id: 'chamber-choir.text' })}</Markdown>
    <CenteredImage
      url="https://farm8.staticflickr.com/7341/16381074780_74ff518b92_z.jpg"
      title={intl.formatMessage({ id: 'chamber-choir.title' })}
    />
  </PageTemplate>
)

export default injectIntl(ChamberChoirPage)
