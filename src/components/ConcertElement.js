import faunIcon from '../favicon.png'
import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'

const ConcertElement = ({ concert, intl }) => (
  <div key={concert.id} className="row mb-2">
    <div className="col-lg-1 col-sm-2 col-3">
      <div className="pl-2 pr-2 pb-2">
        <img src={faunIcon} alt="Krashna Musika" className="img-fluid" />
      </div>
    </div>
    <div className="col-lg-11 col-sm-10 col-9">
      <h5>
        <Link to={`/concerts/${concert.id}`} className="font-weight-bold">
          {intl.formatMessage({ id: `concerts.${concert.id}.title` })}
        </Link>
      </h5>
      <p>
        <span className="fa fa-calendar mr-2" />
        {new Date(concert.date).toLocaleDateString('nl-NL')}
        {' - '}
        <span className="fa fa-map-marker mr-1" />
        <a href={concert.locationLink} className="mr-2">
          {concert.location || intl.formatMessage({id: 'translations.tbd'})}
        </a>
        {concert.tickets ? (
          <a href={concert.tickets}>
            <span className="badge badge-info">
              <span className="fa fa-ticket mr-2" />
              {intl.formatMessage({ id: 'translations.tickets-available' })}
            </span>
          </a>
        ) : (
          undefined
        )}
        {concert.freeEntrance ? (
          <a href={concert.tickets}>
            <span className="badge badge-light">
              <span className="fa fa-ticket mr-2" />
              {intl.formatMessage({ id: 'translations.free-entrance' })}
            </span>
          </a>
        ) : (
          undefined
        )}
      </p>
    </div>
  </div>
)

export default injectIntl(ConcertElement)
