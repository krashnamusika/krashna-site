import React from "react";
import {Helmet} from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";

const MiauwsikaPage = ( ) => (
  <div className="fill-page text-center">
    <blockquote className="imgur-embed-pub" lang="en" data-id="a/1UA9GYg" data-context="false">
      <a href="//imgur.com/a/1UA9GYg"/>
    </blockquote>
    <Helmet>
      <script src="//s.imgur.com/min/embed.js" charSet="utf-8"/>
    </Helmet>
  </div>
);

export default injectIntl(MiauwsikaPage);
