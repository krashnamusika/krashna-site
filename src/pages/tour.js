import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import tourLogo from '../components/IndexPage/TourSection/krashna-tour-2018-logo.jpg'

const TourPage = ({ t }) => (
  <PageTemplate title={t('tour.title')}>
    <Markdown>{t('tour.text')}</Markdown>
    <div className="col-md-5 col-9 mx-auto mt-5 mb-5">
      <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2018"/>
    </div>
  </PageTemplate>
)

export default translate('translations')(TourPage)
