import React from 'react'
import ConcertSection from '../components/IndexPage/ConcertSection'
import ConductorPositionSection from "../components/IndexPage/ConductorPositionSection";
import HireEnsembleSection from "../components/IndexPage/HireEnsembleSection";
import InMemoriamSection from "../components/IndexPage/InMemoriamSection";
import Jumbotron from '../components/IndexPage/Jumbotron'
import NewsSection from "../components/IndexPage/NewsSection";

const IndexPage = ({ data }) => (
  <div>
    <InMemoriamSection/>
    <Jumbotron/>
    <ConcertSection concerts={ data.allConcertsYaml.edges }/>
    <NewsSection news={ data.allNewsYaml.edges }/>
    <ConductorPositionSection/>
    <HireEnsembleSection/>
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
