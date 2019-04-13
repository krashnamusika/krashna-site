import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import stijn from '../../static/images/stijn-berkouwer.jpg'

const ConductorsPage = ({ intl }) => (
  <PageTemplate title={intl.formatMessage({ id: 'conductors.title' })}>
    <h5>{intl.formatMessage({ id: 'conductors.choir.title' })}</h5>
    <ConductorPicture
      title="Ruben de Grauw"
      url="https://farm8.staticflickr.com/7594/27382439013_b15de5c7d0_z.jpg"
    />
    <Markdown>{intl.formatMessage({ id: 'conductors.choir.text' })}</Markdown>

    <h5 className="mt-5">
      {intl.formatMessage({ id: 'conductors.orchestra.title' })}
    </h5>
    <ConductorPicture title="Stijn Berkouwer" url={stijn} />
    <Markdown>
      {intl.formatMessage({ id: 'conductors.orchestra.text' })}
    </Markdown>
  </PageTemplate>
)

export default injectIntl(ConductorsPage)

const ConductorPicture = ({ url, title }) => (
  <div className="col-lg-4 col-8 float-lg-right mx-lg-1 mx-auto p-2">
    <img src={url} className="img-fluid" alt={title} />
  </div>
)
