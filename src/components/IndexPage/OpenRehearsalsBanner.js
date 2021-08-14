import {injectIntl, Link} from "gatsby-plugin-intl";
import React from "react";
import TwoPartLayout from "./TwoPartLayout";

const OpenRehearsalsBanner = ({ intl }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.open-rehearsals.banner.title' })}
        >
          <Link className="btn btn-danger" to="/join">
            {intl.formatMessage({ id: 'index.open-rehearsals.banner.learn-more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </TwoPartLayout>
      </div>
    </div>
  )
};

export default injectIntl(OpenRehearsalsBanner);
