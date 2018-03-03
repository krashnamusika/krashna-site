import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const ConductorsPage = ({t}) => (
  <PageTemplate title={t('conductors.title')}>
    <h5>{t('conductors.choir.title')}</h5>
    <Markdown>{t('conductors.choir.text')}</Markdown>

    <h5>{t('conductors.orchestra.title')}</h5>
    <Markdown>{t('conductors.orchestra.text')}</Markdown>
  </PageTemplate>
)

export default translate('translations')(ConductorsPage)
