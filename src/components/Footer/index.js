import React from 'react'
import { translate } from 'react-i18next'
import krashnaSharp from './krashna-sharp.png'
import SponsorSection from './SponsorSection'

const SocialLink = ({ iconName, url }) => (
  <a className="text-muted mr-2" href={url} target="blank">
    <i className={'fa fa-' + iconName} />
  </a>
)

const SocialLinkList = () => (
  <li className="mt-3">
    <SocialLink
      iconName="facebook"
      url="https://facebook.com/krashna"
      target="blank"
    />
    <SocialLink iconName="twitter" url="https://twitter.com/krashnamusika" />
    <SocialLink
      iconName="instagram"
      url="https://www.instagram.com/krashnamusika/"
      target="blank"
    />
    <SocialLink
      iconName="youtube"
      url="https://www.youtube.com/dsmgkrashnamusika"
      target="blank"
    />
    <SocialLink
      iconName="camera"
      url="https://www.flickr.com/photos/krashna"
      target="blank"
    />
    <SocialLink
      iconName="github"
      url="https://www.github.com/krashnamusika"
      target="blank"
    />
  </li>
)

const Footer = ({ t }) => (
  <footer
    className="pt-4 pb-2 pt-md-4 border-top"
    style={{
      borderBottom: '3px solid #c00',
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-md text-md-left text-center">
          <h5>KRASHNA MUSIKA</h5>
          <ul className="list-unstyled">
            <li>
              <a
                className="text-muted"
                href="https://www.google.com/maps/place/TU+Delft+Unit+Sports/@51.9954478,4.3744681,17z/data=!4m8!1m2!2m1!1sunit+culture+delft!3m4!1s0x47c5b58f0de76185:0x32c3849096264124!8m2!3d51.9956988!4d4.3761394?hl=en"
                target="blank"
              >
                <i className="fa fa-map-marker mr-2" />
                Unit Culture - TU Delft
              </a>
            </li>
            <li>
              <a className="text-muted" href="mailto:krashna@tudelft.nl">
                <i className="fa fa-envelope mr-2" />
                krashna@tudelft.nl
              </a>
            </li>
            <SocialLinkList />
          </ul>
          <small className="d-block mt-3 mb-3">
            &copy; {new Date().getFullYear()} Krashna Musika
          </small>
        </div>
        <div className="col-12 col-md text-center mt-md-0 mt-2">
          <img src={krashnaSharp} alt="Krashna Musika" width="220px" />
        </div>
        <div className="col-12 col-md text-md-right text-center text-muted mt-md-0 mt-4">
          <SponsorSection title={t('footer.partners')} />
          <div className="pt-3">
            {t('footer.feedback').question}
            <br />
            <a
              className="text-muted"
              href="https://docs.google.com/forms/d/e/1FAIpQLSerirS3Fy7RKYWTXnH717Myz4jpAHH71G1NPivBb4hp6huqxQ/viewform?usp=sf_link"
              target="blank"
            >
              <i className="fa fa-bullhorn mr-2" />
              {t('footer.feedback').action}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default translate('translations')(Footer)
