import React from 'react'
import { translate } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'
import PageTemplate from '../templates/pageTemplate'

const VideoPage = ({ t }) => (
  <PageTemplate title={t('videos.title')}>
    <div className="text-center">
      <div className="embed-responsive embed-responsive-16by9 col-lg-9 col-12 mx-auto">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PLcXer1PunEIPYEDHdwNpU6CzKH6J2oTEK"
          // frameBorder="0"
          allowFullscreen
        />
      </div>
    </div>
    <CenteredButton
      url="https://www.youtube.com/user/DSMGKrashnaMusika"
      external={true}
    >
      <span className="fa fa-camera mr-2" />
      {t('videos.youtube')}
    </CenteredButton>
  </PageTemplate>
)

export default translate('translations')(VideoPage)
