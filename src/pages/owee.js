import Markdown from "react-remarkable";
import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import PageTemplate from "../templates/pageTemplate";

const OweePage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: "owee.title" })}>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img width="100%" src={intl.formatMessage({id: "owee.poster"})} alt="owee.poster"/>
        </div>
        <div className="col-sm">
          <Markdown options={{html: true}}>
            {intl.formatMessage({id: "owee.text"})}
          </Markdown>
        </div>
      </div>
    </div>
    <hr/>
    {/* <p align="center"><Markdown options={{ html: true }}>
      {intl.formatMessage({ id: "owee.faq-title" })}
    </Markdown></p> */}
    <Markdown options={{ html: true }}>
      {intl.formatMessage({ id: "owee.faq" })}
    </Markdown>
  </PageTemplate>
);

export default injectIntl(OweePage);
