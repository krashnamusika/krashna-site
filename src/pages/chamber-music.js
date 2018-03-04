import React from 'react'
import Markdown from 'react-remarkable'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'

const ChamberMusicPage = ({ t }) => (
  <PageTemplate title={t('chamber-music.title')}>
    <Markdown>{t('chamber-music.text')}</Markdown>
    <CenteredButton url="/join">
      {t('chamber-music.join-button')}
    </CenteredButton>
    <CenteredImage
      url="https://farm4.staticflickr.com/3725/32902117140_96b54906ac_z.jpg"
      title={t('chamber-music.title')}
    />
  </PageTemplate>
)

export default translate('translations')(ChamberMusicPage)
