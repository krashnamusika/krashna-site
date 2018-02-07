import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'
import MultiLineText from '../components/MultiLineText'

const ConductorsPage = ({ t }) => (
  <PageTemplate title={t('title')}>
    <h5>{t('choir').title}</h5>
    <MultiLineText lines={t('choir').text} />

    <h5>{t('orchestra').title}</h5>
    <MultiLineText lines={t('orchestra').text} />
  </PageTemplate>
)

export default translate('Conductors')(ConductorsPage)
