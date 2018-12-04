import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import InMemoriamSection from '../components/IndexPage/InMemoriamSection'
import Jumbotron from '../components/IndexPage/Jumbotron'
import NewsSection from '../components/IndexPage/NewsSection'
import SponsorKliksSection from '../components/IndexPage/SponsorKliksSection'

const IndexPage = ({ data }) => (
  <div>
    <InMemoriamSection />
    <Jumbotron />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <NewsSection news={data.allNewsYaml.edges} />
    <HireEnsembleSection />
    <SponsorKliksSection />
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
