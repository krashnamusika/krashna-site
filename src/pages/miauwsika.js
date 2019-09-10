import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

const MiauwsikaPage = ( ) => (
  <div className="fill-page text-center">
    <video width="320" height="640" controls>
      <source src="https://i.imgur.com/rJWWc97.mp4"/>
    </video>
  </div>
);

export default injectIntl(MiauwsikaPage);
