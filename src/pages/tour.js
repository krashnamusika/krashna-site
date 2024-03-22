import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const SectionContainer = ({ style, children }) => (
  <div style={style}>
    <div
      className="container"
      style={{ paddingTop: '3.5em', paddingBottom: '3.5em' }}
    >
      {children}
    </div>
  </div>
)

const TourPage = ({ intl }) => (
  <PageTemplate
    title={intl.formatMessage({ id: 'tour.title' })}
    useCustomStructure={true}
  >
    <div style={{ paddingTop: '60px', flex: 'auto' }}>
      <SectionContainer style={{ backgroundColor: '#CC0000' }}>
        <h1 className="text-center text-white font-weight-bold pb-4 pt-4">
          {intl.formatMessage({ id: 'tour.title' })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer>
      <Markdown>{intl.formatMessage({ id: 'tour.intro' })}</Markdown>
    </SectionContainer>
  </PageTemplate>
)

export default injectIntl(TourPage)
