import React from 'react'
import { graphql } from 'gatsby'
import ConcertSection from '../components/IndexPage/ConcertSection'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import Jumbotron from '../components/IndexPage/Jumbotron'
import MonumentDonationSection from '../components/IndexPage/MonumentDonationSection'
import NewsSection from '../components/IndexPage/NewsSection'
import SponsorKliksSection from '../components/IndexPage/SponsorKliksSection'
import InMemoriamBanner from '../components/IndexPage/InMemoriam/InMemoriamBanner'
import PageTemplate from '../templates/pageTemplate'
import OpenRehearsalsSection from "../components/IndexPage/OpenRehearsalsSection";

const IndexPage = ({ data }) => (
  <PageTemplate useCustomStructure={true}>
    <Jumbotron />
     <OpenRehearsalsSection />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <NewsSection news={data.allNewsYaml.edges} />
    <HireEnsembleSection />
    <SponsorKliksSection />
    <MonumentDonationSection />
    <InMemoriamBanner />
  </PageTemplate>
)

export default IndexPage

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
    allNewsYaml {
      edges {
        node {
          id
          date
          author
        }
      }
    }
  }
`
