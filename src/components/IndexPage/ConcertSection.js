import Link from 'gatsby-link'
import React from 'react'
import {translate} from 'react-i18next'
import faunIcon from '../../layouts/favicon.png'

const ConcertSection = ({ concerts, t }) => {
  const dateCheckpoint = new Date()
  dateCheckpoint.setDate(dateCheckpoint.getDate() - 2)
  const sortedConcerts = concerts
    .map(obj => obj.node)
    .filter(concert => new Date(concert.date) > dateCheckpoint)
    .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))

  if (sortedConcerts.length === 0) {
    return <div />
  }

  return (
    <div>
      <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">Upcoming Concerts</h2>
        {sortedConcerts.map(concert => (
          <div key={concert.id} className="row mb-2">
            <div className="col-lg-1 col-sm-2 col-3">
              <div className="pl-2 pr-2 pb-2">
                <img
                  src={faunIcon}
                  alt="Krashna Musika"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-11 col-sm-10 col-9">
              <h5>
                <Link to={`/concerts/${concert.id}`}>
                  {t(`concerts.${concert.id}.title`)}
                </Link>
              </h5>
              <p>
                <span className="fa fa-calendar mr-2" />
                {new Date(concert.date).toLocaleDateString('nl-NL')}
                {' - '}
                <span className="fa fa-map-marker mr-1" />
                <a href={concert.locationLink}>{concert.location}</a>
                {concert.tickets ? (
                  <a href={concert.tickets}>
                    <span className="badge badge-info ml-2">
                      <span className="fa fa-ticket mr-2" />
                      Tickets available
                    </span>
                  </a>
                ) : (
                  undefined
                )}
                {concert.freeEntrance ? (
                  <a href={concert.tickets}>
                    <span className="badge badge-light ml-2">
                      <span className="fa fa-ticket mr-2" />
                      Free entrance
                    </span>
                  </a>
                ) : (
                  undefined
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default translate('translations')(ConcertSection)
