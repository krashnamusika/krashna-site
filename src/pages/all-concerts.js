import React from 'react'
import PageTemplate from '../templates/pageTemplate'
import { filterAndSortConcerts } from '../components/ConcertListOperations'
import { withTranslation } from 'react-i18next'
import { graphql } from 'gatsby'
import ConcertElement from '../components/ConcertElement'

const ConcertsPage = ({ data, t }) => {
  const sortedConcerts = filterAndSortConcerts(data.allConcertsYaml.edges)

  return (
    <PageTemplate title={t('all-concerts.title')}>
      {sortedConcerts.map(concert => (
        <ConcertElement concert={concert} t={t} />
      ))}
    </PageTemplate>
  )
}

export default withTranslation()(ConcertsPage)

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
