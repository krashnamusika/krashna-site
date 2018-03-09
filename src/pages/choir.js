import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

const ChoirPage = ({ t }) => (
  <PageTemplate title={t('choir.title')}>
    <Markdown>{t('choir.text')}</Markdown>
    <CenteredButton url="/join">{t('choir.join-button')}</CenteredButton>
    <CenteredImage
      url="https://farm3.staticflickr.com/2270/32550553690_8527a23072_z.jpg"
      title={t('choir.title')}
    />
  </PageTemplate>
)

export default translate('translations')(ChoirPage)
