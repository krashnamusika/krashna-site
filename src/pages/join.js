import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Markdown from "react-remarkable";
import PageTemplate from "../templates/pageTemplate";

const JoinPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: "join.title" })}>
    <div className="text-center pt-3 pb-3">
      <a
        className="btn btn-primary btn-lg"
        href="https://forms.gle/B5Fgyp4vqQtMyZWQ9"
        target="blank"
      >
        <span className="fa fa-pencil mr-2" />
        {intl.formatMessage({ id: "owee.form" })}
      </a>
    </div>
    <Markdown>{intl.formatMessage({ id: "join.text" })}</Markdown>
  </PageTemplate>
);

export default injectIntl(JoinPage);
