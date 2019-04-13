import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import stijn from "../../static/images/stijn-berkouwer.jpg";

const ConductorsPage = ({ t }) => (
  <PageTemplate title={t('conductors.title')}>
    <h5>{t('conductors.choir.title')}</h5>
    <ConductorPicture
      title="Ruben de Grauw"
      url="https://farm8.staticflickr.com/7594/27382439013_b15de5c7d0_z.jpg"
    />
    <Markdown>{t('conductors.choir.text')}</Markdown>

    <h5 className="mt-5">{t('conductors.orchestra.title')}</h5>
    <ConductorPicture
      title="Stijn Berkouwer"
      url={stijn}
    />
    <Markdown>{t('conductors.orchestra.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(ConductorsPage)

const ConductorPicture = ({ url, title }) => (
  <div className="col-lg-4 col-8 float-lg-right mx-lg-1 mx-auto p-2">
    <img src={url} className="img-fluid" alt={title} />
  </div>
)
