import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import ConductorPositionSection from '../components/IndexPage/ConductorPositionSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import InMemoriamSection from '../components/IndexPage/InMemoriamSection'
import Jumbotron from '../components/IndexPage/Jumbotron'
import NewsSection from '../components/IndexPage/NewsSection'
import PageTemplate from '../templates/pageTemplate'
import { filterAndSortConcerts } from '../components/ConcertListOperations'
import { translate } from 'react-i18next'
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

export default translate('translations')(ConcertsPage)

export const query = graphql`
  query ConcertsPageQuery {
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
