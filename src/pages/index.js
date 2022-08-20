import React from 'react';
import { graphql } from 'gatsby';
import ConcertSection from '../components/IndexPage/ConcertSection';
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection';
import Jumbotron from '../components/IndexPage/Jumbotron';
import NewsSection from '../components/IndexPage/NewsSection';
import OpenRehearsalsBanner from "../components/IndexPage/OpenRehearsalsBanner";
import SponsorKliksSection from '../components/IndexPage/SponsorKliksSection';
import OWeeSection from "../components/IndexPage/OWeeSection";
import PageTemplate from '../templates/pageTemplate';

const IndexPage = ({ data }) => (
  <PageTemplate useCustomStructure={true}>
    <Jumbotron />
    <OWeeSection />
    <ConcertSection concerts={data.allConcertsYaml.edges} />
    <NewsSection news={data.allNewsYaml.edges} />
    <OpenRehearsalsBanner />
    <HireEnsembleSection />
    <SponsorKliksSection />
  </PageTemplate>
);

export default IndexPage;

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
`;
