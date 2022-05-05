import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const RentInstrumentPage = ({ intl }) => (


<PageTemplate title={intl.formatMessage({ id: 'rent-instrument.title' })}>
    <Markdown options={{ html: true }}>
      {intl.formatMessage({ id: 'rent-instrument.text' })}
    </Markdown>


  <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          id="ex1-tab-1"
          data-toggle="tab"
          href="#ex1-tabs-1"
          role="tab"
          aria-controls="ex1-tabs-1"
          aria-selected="true"
        >{intl.formatMessage({ id: 'rent-instrument.strings-title'})}</a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="ex1-tab-2"
          data-toggle="tab"
          href="#ex1-tabs-2"
          role="tab"
          aria-controls="ex1-tabs-2"
        >{intl.formatMessage({ id: 'rent-instrument.wood-title'})}</a
        >
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="ex1-tab-3"
          data-toggle="tab"
          href="#ex1-tabs-3"
          role="tab"
          aria-controls="ex1-tabs-3"
        >{intl.formatMessage({ id: 'rent-instrument.brass-title'})}</a
        >
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="ex1-tab-4"
          data-toggle="tab"
          href="#ex1-tabs-4"
          role="tab"
          aria-controls="ex1-tabs-4"
        >{intl.formatMessage({ id: 'rent-instrument.percussion-title'})}</a
        >
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="ex1-tab-5"
          data-toggle="tab"
          href="#ex1-tabs-5"
          role="tab"
          aria-controls="ex1-tabs-5"
        >{intl.formatMessage({ id: 'rent-instrument.other-title'})}</a
        >
      </li>
    </ul>

    <div className="tab-content" id="ex1-content">
      <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
        <Markdown options={{ html: true }}>
          {intl.formatMessage({ id: 'rent-instrument.strings'})}
        </Markdown>
      </div>
      <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
        <Markdown options={{ html: true }}>
          {intl.formatMessage({ id: 'rent-instrument.wood'})}
        </Markdown>
      </div>
      <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
        <Markdown options={{ html: true }}>
          {intl.formatMessage({ id: 'rent-instrument.brass'})}
        </Markdown>
      </div>
      <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
        <Markdown options={{ html: true }}>
          {intl.formatMessage({ id: 'rent-instrument.percussion'})}
        </Markdown>
      </div>
      <div className="tab-pane fade" id="ex1-tabs-5" role="tabpanel" aria-labelledby="ex1-tab-5">
        <Markdown options={{ html: true }}>
          {intl.formatMessage({ id: 'rent-instrument.other'})}
        </Markdown>
      </div>
    </div>
  </PageTemplate>
)

export default injectIntl(RentInstrumentPage)
