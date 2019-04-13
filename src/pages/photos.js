import React from 'react'
import { withTranslation } from 'react-i18next'
import CenteredButton from '../components/CenteredButton'
import CenteredEmbed from '../components/CenteredEmbed'
import PageTemplate from '../templates/pageTemplate'

const PhotoPage = ({ t }) => (
  <PageTemplate title={t('photos.title')}>
    <div className="text-center">
      <CenteredEmbed>
        <iframe
          title="Flickr Slideshow"
          align="center"
          src="https://www.flickr.com/slideShow/index.gne?user_id=21327837@N03"
          frameBorder={0}
          width={500}
          scrolling="no"
          height={600}
        />
      </CenteredEmbed>
    </div>
    <CenteredButton
      url="https://www.flickr.com/photos/krashna/sets/"
      external={true}
    >
      <span className="fa fa-camera mr-2" />
      {t('photos.flickr')}
    </CenteredButton>
  </PageTemplate>
)

export default withTranslation()(PhotoPage)
