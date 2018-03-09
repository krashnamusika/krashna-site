import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import CenteredButton from '../components/CenteredButton'
import CenteredImage from '../components/CenteredImage'
import PageTemplate from '../templates/pageTemplate'

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
