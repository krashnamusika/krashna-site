import React from 'react'
import Helmet from 'react-helmet'
import {translate} from 'react-i18next'
import ConcertShareButtons from "../components/ConcertPage/ConcertShareButtons";

const ConcertPageTemplate = ({ pathContext, t }) => {
  const concert = pathContext.concert
  const concertTitle = t(`concerts.${concert.id}.title`)
  const concertDescription = t(`concerts.${concert.id}.description`)

  return (
    <div className="container text-page-container pb-2">
      <Helmet title={`${concertTitle} - Krashna Musika`} />
      <h1 className="border-bottom text-center mb-4">{concertTitle}</h1>
      <div>
        <span className="fa fa-calendar mr-2" />
        {new Date(concert.date).toLocaleDateString('nl-NL')}
        {', '}
        {concert.time}
      </div>
      <div>
        <span className="fa fa-map-marker mr-2" />
        <a href={concert.locationLink}>{concert.location}</a>
      </div>
      {concert.tickets ? (
        <div>
          <span className="fa fa-ticket mr-2" />
          <a href={concert.tickets}>Tickets available!</a>
        </div>
      ) : (
        undefined
      )}
      {concert.freeEntrance ? (
        <div>
          <span className="fa fa-ticket mr-2" />
          Free Entrance!
        </div>
      ) : (
        undefined
      )}
      <hr />
      <p>{concertDescription}</p>
      <ConcertShareButtons concertId={concert.id}/>
    </div>
  )
}

export default translate('translations')(ConcertPageTemplate)
