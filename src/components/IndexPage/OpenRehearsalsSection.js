import Link from "gatsby-link";
import React from "react";
import { translate } from 'react-i18next'

const OpenRehearsalsSection = ({ rehearsals, t }) => {
  return (
    <div className="bg-light-red">
      <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">
          {t('index.open-rehearsals.title')}
        </h2>
        <div className="row mb-2">
          <div className="col-lg-11 col-sm-10 col-9">
            <h5 className="font-weight-bold">
              {t('index.open-rehearsals.text-orchestra')}
            </h5>
          </div>
        </div>
        <div className="text-center">
          <Link className="btn btn-danger" to="/all-concerts">
            {t('index.open-rehearsals.more')}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default translate('translations')(OpenRehearsalsSection)
