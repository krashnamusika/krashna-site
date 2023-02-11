import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import PageTemplate from '../templates/pageTemplate';
import TEMP_SHEET_MUSIC_LIST from '../data/temp_sheetmusic_codes.json'

const RentSheetMusicPage = ({ intl }) => {
  let code = new URLSearchParams(document.location.search).get('code')
  let index = TEMP_SHEET_MUSIC_LIST.findIndex(c => c === code)

  let indexIsUnknown = index < 0

  return <PageTemplate>
    <div className='container'>
      <div className='row'>
        <div className='col-sm mb-3 mb-sm-0'>
          <div className={`card ${indexIsUnknown ? 'text-danger border-danger' : 'text-success border-success'}`}>
            <div className='card-header'>
              Number
            </div>
            <div className='card-body'>
              <h1>{indexIsUnknown ? <em>???</em> : String(index + 1).padStart(4, '0')}</h1>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className={`card ${indexIsUnknown ? 'text-danger border-danger' : 'text-success border-success'}`}>
            <div className='card-header'>
              Code
            </div>
            <div className='card-body'>
              <h5>{code ? code : <em>(unspecified)</em>}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTemplate>
}

export default injectIntl(RentSheetMusicPage)
