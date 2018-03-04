import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

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
      title="Daan Admiraal"
      url="https://farm4.staticflickr.com/3813/32777572582_b52cf06e78_z.jpg"
    />
    <Markdown>{t('conductors.orchestra.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(ConductorsPage)

const ConductorPicture = ({ url, title }) => (
  <div className="col-lg-4 col-8 float-lg-right mx-lg-1 mx-auto p-2">
    <img src={url} className="img-fluid" alt={title} />
  </div>
)
