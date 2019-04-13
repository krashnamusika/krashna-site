import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import ConcertShareButtons from '../components/ConcertPage/ConcertShareButtons'
import PageTemplate from './pageTemplate'

const ConcertPageTemplate = ({ pageContext, intl }) => {
  const concert = pageContext.concert
  const concertTitle = intl.formatMessage({
    id: `concerts.${concert.id}.title`,
  })
  const concertDescription = intl.formatMessage({
    id: `concerts.${concert.id}.description`,
  })

  return (
    <PageTemplate title={concertTitle}>
      <div>
        <span className="fa fa-calendar mr-2" />
        {new Date(concert.date).toLocaleDateString('nl-NL')}
        {concert.time ? ', ' + concert.time : undefined}
      </div>
      <div>
        <span className="fa fa-map-marker mr-2" />
        <a href={concert.locationLink}>{concert.location}</a>
      </div>
      {concert.facebookEvent ? (
        <div>
          <span className="fa fa-facebook mr-2" />
          <a href={concert.facebookEvent}>
            {intl.formatMessage({ id: 'translations.facebook-event' })}
          </a>
        </div>
      ) : (
        undefined
      )}
      {concert.tickets ? (
        <div>
          <span className="fa fa-ticket mr-2" />
          <a href={concert.tickets}>
            {intl.formatMessage({ id: 'translations.tickets-available' })}!
          </a>
        </div>
      ) : (
        undefined
      )}
      {concert.freeEntrance ? (
        <div>
          <span className="fa fa-ticket mr-2" />
          {intl.formatMessage({ id: 'translations.free-entrance' })}!
        </div>
      ) : (
        undefined
      )}
      <hr />
      <Markdown>{concertDescription}</Markdown>
      <ConcertShareButtons concertId={concert.id} />
    </PageTemplate>
  )
}

export default injectIntl(ConcertPageTemplate)
