import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import NewsSection from "../components/IndexPage/NewsSection";
import TourSection from '../components/IndexPage/TourSection'
import Jumbotron from '../components/IndexPage/Jumbotron'

const IndexPage = ({ data }) => (
  <div>
    <Jumbotron />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <NewsSection news={data.allNewsYaml.edges} />
    <TourSection />
    <HireEnsembleSection />
  </div>
)

export default IndexPage

export const query = graphql`
  query PageQuery {
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
    allNewsYaml {
      edges {
        node {
          id
          date
        }
      }
    }
  }
`
