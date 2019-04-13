import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

const OpenRehearsalsSection = ({ rehearsals, intl }) => {
  return (
    <div className="bg-light">
      {console.log(intl)}
      <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">
          {intl.formatMessage({ id: 'open-rehearsals.banner.title' })}
        </h2>
        <div className="row mb-2">
          <div className="col-lg-11 col-sm-10 col-9">
            <h5 className="font-weight-bold">
              {intl.formatMessage({ id: 'open-rehearsals.banner.text' })}
            </h5>
          </div>
        </div>
        <div className="text-center">
          <Link className="btn btn-danger" to="/open-rehearsals">
            {intl.formatMessage({ id: 'open-rehearsals.banner.more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(OpenRehearsalsSection)
