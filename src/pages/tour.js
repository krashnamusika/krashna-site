import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Markdown from "react-remarkable";
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
    title={intl.formatMessage({ id: "tour.title" })}
    useCustomStructure={true}
  >
    <div style={{ paddingTop: "60px", flex: "auto" }}>
      <SectionContainer style={{ backgroundColor: "#1d3a72" }}>
        <h1
          className="text-center font-weight-bold pb-3 pt-3"
          style={{ color: "#fecd57" }}
        >
          {intl.formatMessage({ id: "tour.title" })}
        </h1>
      </SectionContainer>
    </div>
    <SectionContainer>
      {["intro", "concerts", "repertoire", "aek"].map((id) => (
        <span key={id}>
          <p>
            <strong>
              <Markdown>
                {intl.formatMessage({ id: `tour.${id}.title` })}
              </Markdown>
            </strong>
          </p>
          <Markdown>{intl.formatMessage({ id: `tour.${id}.body` })}</Markdown>
        </span>
      ))}

      <Markdown>{intl.formatMessage({ id: "tour.socials" })}</Markdown>
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
