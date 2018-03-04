import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import PageTemplate from '../templates/pageTemplate'

const NotFoundPage = ({ t }) => (
  <PageTemplate title={t('not-found.title')}>
    <p className="text-center lead">
      <Markdown>{t('not-found.message')}</Markdown>
    </p>
    <CenteredButton url="/">
      <span className="fa fa-home mr-2" />
      {t('not-found.return-home')}
    </CenteredButton>
  </PageTemplate>
)

export default translate('translations')(NotFoundPage)
