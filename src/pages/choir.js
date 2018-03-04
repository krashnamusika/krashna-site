import React from 'react'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const ChoirPage = ({ t }) => (
  <PageTemplate title={t('choir.title')}>
    <Markdown>{t('choir.text')}</Markdown>
    <CenteredButton url="/join">{t('choir.join-button')}</CenteredButton>
    <div className="col-md-8 col-10 mx-auto p-2">
      <img
        src="https://farm3.staticflickr.com/2270/32550553690_8527a23072_z.jpg"
        className="img-fluid"
        alt={t('choir.title')}
      />
    </div>
  </PageTemplate>
)

export default translate('translations')(ChoirPage)
