import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import ConcertElement from '../ConcertElement'
import { filterAndSortConcerts } from '../ConcertListOperations'

const MAX_NUM_CONCERTS = 3

const ConcertSection = ({ concerts, intl }) => {
  const sortedConcerts = filterAndSortConcerts(concerts).slice(
    0,
    MAX_NUM_CONCERTS
  )

  if (sortedConcerts.length === 0) {
    return <div />
  }

  return (
    <div className="bg-light">
      <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">
          {intl.formatMessage({ id: 'index.upcoming-concerts.title' })}
        </h2>
        {sortedConcerts.map(concert => (
          <ConcertElement concert={concert} key={concert.id} />
        ))}
        <div className="text-center">
          <Link className="btn btn-danger" to="/all-concerts">
            {intl.formatMessage({ id: 'index.upcoming-concerts.more' })}
            <span className="fa fa-caret-right ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(ConcertSection)
