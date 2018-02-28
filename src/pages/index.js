import React from 'react'
import HireEnsembleSection from '../components/IndexPage/HireEnsembleSection'
import Jumbotron from '../components/IndexPage/Jumbotron'

const IndexPage = () => (
  <div>
    <Jumbotron />
    <div className="container text-center p-5">
      <p style={{ fontSize: '2.5rem' }}>Concerts</p>
      <h5>Lustrum Concerts, March 16th and 17th</h5>
      <p>
        <a
          href="https://www.theaterdeveste.nl/zoeken/?zoekwaarde=krashna"
          className="btn btn-primary"
        >
          Tickets available
        </a>
      </p>
    </div>
    <HireEnsembleSection />
  </div>
)

export default IndexPage
