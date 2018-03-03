import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import Jumbotron from '../components/IndexPage/Jumbotron'

const IndexPage = ({ data }) => (
  <div>
    <Jumbotron />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <HireEnsembleSection />
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
