import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import Markdown from "react-remarkable";
import PageTemplate from "../templates/pageTemplate";

const DaanMonumentPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: "daan-monument.title" })}>
    <Markdown>{intl.formatMessage({ id: "daan-monument.text" })}</Markdown>
    <div className="text-center">
      <a href="https://krashna.nl" className="btn btn-outline-dark">
        {intl.formatMessage({ id: "daan-monument.button" })}
      </a>
    </div>
  </PageTemplate>
);

export default injectIntl(DaanMonumentPage);
