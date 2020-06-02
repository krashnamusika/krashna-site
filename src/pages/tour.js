import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import tourLogo from '../components/IndexPage/TourSection/krashna-tour-2020-logo.jpg'
import PageTemplate from '../templates/pageTemplate'

const SectionContainer = ({ backgroundClass, children }) => (
  <div className={backgroundClass}>
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
    <div style={{
              paddingTop: '60px',
              flex: 'auto',
            }}>
      <SectionContainer backgroundClass="bg-krashna">
        <h1 className="text-center text-white font-weight-bold pb-4 pt-4">
          {intl.formatMessage({ id: 'tour.title' })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer backgroundClass="">
      <div className="lead">
        <Markdown>{intl.formatMessage({ id: 'tour.intro' })}</Markdown>

        <div
          className="col-md-5 col-9 mx-auto mb-5"
          style={{ marginTop: '5rem' }}
        >
          <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2018" />
        </div>
      </div>
      <Markdown>{intl.formatMessage({ id: 'tour.socialMedia' })}</Markdown>
    </SectionContainer>
  </PageTemplate>
)

export default injectIntl(TourPage)
