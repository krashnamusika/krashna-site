import React from 'react'
import { withTranslation } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'
import CenteredEmbed from '../components/CenteredEmbed'
import PageTemplate from '../templates/pageTemplate'

const VideoPage = ({ t }) => (
  <PageTemplate title={t('videos.title')}>
    <div className="text-center">
      <CenteredEmbed>
        <iframe
          title="Krashna Video Fragments"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PLcXer1PunEIPYEDHdwNpU6CzKH6J2oTEK"
          allowFullscreen
        />
      </CenteredEmbed>
    </div>
    <CenteredButton
      url="https://www.youtube.com/user/DSMGKrashnaMusika"
      external={true}
    >
      <span className="fa fa-film mr-2" />
      {t('videos.youtube')}
    </CenteredButton>
  </PageTemplate>
)

export default withTranslation()(VideoPage)
