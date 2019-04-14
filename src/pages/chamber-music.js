import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChamberMusicPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'chamber-music.title' })}>
    <Markdown>{intl.formatMessage({ id: 'chamber-music.text' })}</Markdown>
    <CenteredButton url="/join">
      {intl.formatMessage({ id: 'chamber-music.join-button' })}
    </CenteredButton>
    <CenteredImage
      url="https://farm4.staticflickr.com/3725/32902117140_96b54906ac_z.jpg"
      title={intl.formatMessage({ id: 'chamber-music.title' })}
    />
  </PageTemplate>
)

export default injectIntl(ChamberMusicPage)
