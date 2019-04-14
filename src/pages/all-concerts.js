import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { filterAndSortConcerts } from '../components/ConcertListOperations'
import { injectIntl } from 'gatsby-plugin-intl'
import { graphql } from 'gatsby'
import ConcertElement from '../components/ConcertElement'

const ConcertsPage = ({ data, intl }) => {
  const sortedConcerts = filterAndSortConcerts(data.allConcertsYaml.edges)

  return (
    <PageTemplate title={intl.formatMessage({ id: 'all-concerts.title' })}>
      {sortedConcerts.map(concert => (
        <ConcertElement concert={concert} intl={intl} />
      ))}
    </PageTemplate>
  )
}

export default injectIntl(ConcertsPage)

export const query = graphql`
  query {
    allConcertsYaml {
      edges {
        node {
          id
          type
          date
          time
          location
          locationLink
          tickets
          freeEntrance
        }
      }
    }
  }
`
