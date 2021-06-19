import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import tourLogo from '../../static/images/krashna-tour-2021-horizontal.png'
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
      <SectionContainer style={{ backgroundColor: '#065B2B' }}>
        <h1 className="text-center text-white font-weight-bold pb-4 pt-4">
          {intl.formatMessage({ id: 'tour.title' })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer>
      <div className="lead">
        <Markdown>{intl.formatMessage({ id: 'tour.subtitle' })}</Markdown>
      </div>
      <Markdown>{intl.formatMessage({ id: 'tour.intro' })}</Markdown>
      <div
        className="col-9 mx-auto mb-5"
        style={{ marginTop: '5rem' }}
      >
        <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2021" />
      </div>
      <Markdown>{intl.formatMessage({ id: 'tour.concerts' })}</Markdown>
      <Markdown>{intl.formatMessage({ id: 'tour.socialMedia' })}</Markdown>
    </SectionContainer>
  </PageTemplate>
)

export default injectIntl(TourPage)
