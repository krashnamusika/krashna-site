import React from 'react'
import {translate} from 'react-i18next'
import CenteredButton from '../components/CenteredButton'
import PageTemplate from '../templates/pageTemplate'

const PhotoPage = ({ t }) => (
  <PageTemplate title={t('photos.title')}>
    <div className="text-center">
      <a
        data-flickr-embed="true"
        href="https://www.flickr.com/photos/krashna/albums/72157681488568660"
        title="Matthäus Passion 2017"
      >
        <img
          src="https://farm5.staticflickr.com/4169/33613158453_0c1371e52b_z.jpg"
          width="640"
          height="427"
          alt="Matthäus Passion 2017"
        />
      </a>
      <script
        async
        src="//embedr.flickr.com/assets/client-code.js"
        charSet="utf-8"
      />
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

export default translate('translations')(PhotoPage)
