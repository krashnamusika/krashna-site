import Link from 'gatsby-link'
import React from 'react'
import {translate} from 'react-i18next'
import tourLogo from './krashna-tour-2018-logo.jpg'


const TourSection = ({t}) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <h2>{t('index.tour.title')}</h2>
        <div className="col-md-5 col-9 mx-auto mt-4">
          <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2018"/>
        </div>
        <Link className="btn btn-danger mt-4 mb-4" to="/tour">
          {t('index.tour.learn-more')}
          <span className="fa fa-caret-right ml-2"/>
        </Link>
      </div>
    </div>
  )
}

export default translate('translations')(TourSection)
