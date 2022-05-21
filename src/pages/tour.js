import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import tourLogo from '../../static/images/krashna-tour-2022-banner.png'
import PageTemplate from '../templates/pageTemplate'
import { SocialLink } from "../components/SocialLink";

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
      <SectionContainer style={{ backgroundColor: '#0071bc' }}>
        <h1 className="text-center text-white font-weight-bold pb-3 pt-3">
          {intl.formatMessage({ id: 'tour.title' })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer>
      <div className="lead">
        <Markdown>{intl.formatMessage({ id: 'tour.subtitle' })}</Markdown>
      </div>
      <Markdown>{intl.formatMessage({ id: 'tour.description' })}</Markdown>

      <p><strong><Markdown>{intl.formatMessage({ id: 'tour.concertTitle' })}</Markdown></strong></p>
      <Markdown>{intl.formatMessage({ id: 'tour.concertDescription' })}</Markdown>

      <p><strong><Markdown>{intl.formatMessage({ id: 'tour.repertoireTitle' })}</Markdown></strong></p>
      <Markdown>{intl.formatMessage({ id: 'tour.repertoireDescription' })}</Markdown>

      <p><strong><Markdown>{intl.formatMessage({ id: 'tour.aekTitle' })}</Markdown></strong></p>
      <Markdown>{intl.formatMessage({ id: 'tour.aekDescription' })}</Markdown>

      <Markdown>{intl.formatMessage({ id: 'tour.socials' })}</Markdown>
      <span>
        <SocialLink iconName="facebook" url="https://facebook.com/TourKrashna" target="blank" />
        <SocialLink iconName="instagram" url="https://instagram.com/krashnatour" target="blank" />
      </span>

      <div
        className="col-9 mx-auto mb-5"
        style={{ marginTop: '5rem' }}
      >
        <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2022" />
      </div>
      <div className="lead">
        <Markdown>{intl.formatMessage({ id: 'tour.frenchSubtitle' })}</Markdown>
      </div>
      <Markdown>{intl.formatMessage({ id: 'tour.french' })}</Markdown>
      <Markdown container="span">{intl.formatMessage({ id: 'tour.frenchSocials' })}</Markdown>
      <span>
        <SocialLink iconName="facebook" url="https://facebook.com/TourKrashna" target="blank" />
        <SocialLink iconName="instagram" url="https://instagram.com/krashnatour" target="blank" />
      </span>
    </SectionContainer>
  </PageTemplate>
)

export default injectIntl(TourPage)
