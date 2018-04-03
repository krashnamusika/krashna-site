import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import TourSection from '../components/IndexPage/TourSection'
import Jumbotron from '../components/IndexPage/Jumbotron'

const IndexPage = ({ data }) => (
  <div>
    <Jumbotron />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <HireEnsembleSection />
    <TourSection />
  </div>
)

export default IndexPage

export const query = graphql`
  query ConcertQuery {
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
