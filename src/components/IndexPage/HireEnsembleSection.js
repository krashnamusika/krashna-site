import Link from 'gatsby-link'
import React from 'react'
import {translate} from "react-i18next";

const HireEnsembleSection = ({t}) => {
  return (
    <div className="text-white bg-kamu">
      <div className="container pt-5 pb-5 text-center">
        <h2>{t("index.hire-ensemble.question")}</h2>
        <Link className="btn btn-light" to="/hire-ensemble">
          {t("index.hire-ensemble.learn-more")}
          <span className="fa fa-caret-right ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default translate("translations")(HireEnsembleSection)
