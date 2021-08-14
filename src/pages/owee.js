import Markdown from "react-remarkable";
import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import CenteredEmbed from "../components/CenteredEmbed";
import PageTemplate from "../templates/pageTemplate";

const VideoPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: "owee.title" })}>
    <p className="text-center pb-3">
      <Markdown>
        {intl.formatMessage({ id: "owee.text" })}
      </Markdown>
    </p>
    <p className="text-muted text-center pb-3">
      <Markdown>
        {intl.formatMessage({ id: "owee.evening-activities" })}
      </Markdown>
    </p>
    <div className="text-center pt-3 pb-3">
      <a
        className="btn btn-primary btn-lg"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeaEuSDfVgeAYvi7Gt4zvesfNxdmMdmAm3S3h0qjDcvRl0SWg/viewform?usp=sf_link"
        target="blank"
      >
        <span className="fa fa-pencil mr-2" />
        {intl.formatMessage({ id: "owee.form" })}
      </a>
    </div>
    <div className="text-center pb-5">
      <CenteredEmbed>
        <iframe
          title="OWee"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2Cnrvnb4IY4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CenteredEmbed>
    </div>
  </PageTemplate>
);

export default injectIntl(VideoPage);
