import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const OrchestraPage = ({ t }) => (
  <PageTemplate title={t('orchestra.title')}>
    <Markdown>{t('orchestra.text')}</Markdown>
    <CenteredButton url="/join">{t('orchestra.join-button')}</CenteredButton>
    <div className="col-md-8 col-10 mx-auto p-2 text-center">
      <img
        src="https://farm1.staticflickr.com/489/32931063965_f773e1a5d4_z.jpg"
        className="img-fluid"
        alt={t('choir.title')}
      />
    </div>
  </PageTemplate>
)

export default translate('translations')(OrchestraPage)
