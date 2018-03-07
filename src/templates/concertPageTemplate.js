import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import ConcertShareButtons from '../components/ConcertPage/ConcertShareButtons'
import PageTemplate from "./pageTemplate";

const ConcertPageTemplate = ({pathContext, t}) => {
  const concert = pathContext.concert
  const concertTitle = t(`concerts.${concert.id}.title`)
  const concertDescription = t(`concerts.${concert.id}.description`)

  return (
    <PageTemplate title={concertTitle}>
      <div>
        <span className="fa fa-calendar mr-2"/>
        {new Date(concert.date).toLocaleDateString('nl-NL')}
        {', '}
        {concert.time}
      </div>
      <div>
        <span className="fa fa-map-marker mr-2"/>
        <a href={concert.locationLink}>{concert.location}</a>
      </div>
      {concert.tickets ? (
        <div>
          <span className="fa fa-ticket mr-2"/>
          <a href={concert.tickets}>
            {t('translations.tickets-available')}!
          </a>
        </div>
      ) : (
        undefined
      )}
      {concert.freeEntrance ? (
        <div>
          <span className="fa fa-ticket mr-2"/>
          {t('translations.free-entrance')}!
        </div>
      ) : (
        undefined
      )}
      <hr/>
      <Markdown>{concertDescription}</Markdown>
      <ConcertShareButtons concertId={concert.id}/>
    </PageTemplate>
  )
}

export default translate('translations')(ConcertPageTemplate)
