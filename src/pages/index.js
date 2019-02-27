import React from "react";
import ConcertSection from "../components/IndexPage/ConcertSection";
import HireEnsembleSection from "../components/IndexPage/HireEnsembleSection";
import Jumbotron from "../components/IndexPage/Jumbotron";
import NewsSection from "../components/IndexPage/NewsSection";
import SponsorKliksSection from "../components/IndexPage/SponsorKliksSection";
import InMemoriamBanner from "../components/IndexPage/InMemoriamBanner";

const IndexPage = ({ data }) => (
  <div>
    <Jumbotron />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <NewsSection news={data.allNewsYaml.edges} />
    <HireEnsembleSection />
    <SponsorKliksSection />
    <InMemoriamBanner />
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
