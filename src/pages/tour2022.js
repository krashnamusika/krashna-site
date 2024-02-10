import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Markdown from "react-remarkable";
import tourLogo from "../../static/images/krashna-tour-2022-banner.png";
import PageTemplate from "../templates/pageTemplate";
import { SocialLink } from "../components/SocialLink";

const SectionContainer = ({ style, children }) => (
  <div style={style}>
    <div
      className="container"
      style={{ paddingTop: "3.5em", paddingBottom: "3.5em" }}
    >
      {children}
    </div>
  </div>
);

const TourPage = ({ intl }) => (
  <PageTemplate
    title={intl.formatMessage({ id: "tour2022.title" })}
    useCustomStructure={true}
  >
    <div style={{ paddingTop: "60px", flex: "auto" }}>
      <SectionContainer style={{ backgroundColor: "#0071bc" }}>
        <h1 className="text-center text-white font-weight-bold pb-3 pt-3">
          {intl.formatMessage({ id: "tour2022.title" })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer>
      <div style={{ fontStyle: "italic" }}>
        {intl.formatMessage({ id: "tour2022.frenchBelow" })}
      </div>
      <div className="lead">
        <Markdown>{intl.formatMessage({ id: "tour2022.subtitle" })}</Markdown>
      </div>
      <Markdown>{intl.formatMessage({ id: "tour2022.description" })}</Markdown>

      {["concert", "repertoire", "aek"].map((id) => (
        <span key={id}>
          <p>
            <strong>
              <Markdown>
                {intl.formatMessage({ id: `tour2022.${id}Title` })}
              </Markdown>
            </strong>
          </p>
          <Markdown>{intl.formatMessage({ id: `tour2022.${id}` })}</Markdown>
        </span>
      ))}

      <Markdown>{intl.formatMessage({ id: "tour2022.socials" })}</Markdown>
      <span>
        <SocialLink
          iconName="facebook"
          url="https://facebook.com/TourKrashna"
          target="blank"
        />
        <SocialLink
          iconName="instagram"
          url="https://instagram.com/krashnatour"
          target="blank"
        />
      </span>

      <div className="col-9 mx-auto mb-5" style={{ marginTop: "5rem" }}>
        <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2022" />
      </div>
      <div className="lead">
        <Markdown>
          {intl.formatMessage({ id: "tour2022.frenchSubtitle" })}
        </Markdown>
      </div>
      <Markdown>{intl.formatMessage({ id: "tour2022.french" })}</Markdown>
      <Markdown container="span">
        {intl.formatMessage({ id: "tour2022.frenchSocials" })}
      </Markdown>
      <span>
        <SocialLink
          iconName="facebook"
          url="https://facebook.com/TourKrashna"
          target="blank"
        />
        <SocialLink
          iconName="instagram"
          url="https://instagram.com/krashnatour"
          target="blank"
        />
      </span>
    </SectionContainer>
  </PageTemplate>
);

export default injectIntl(TourPage);
