import React from 'react'
import bgImage from './krashna-mp.jpg'

const Jumbotron = () => (
  <div
    className="mx-auto text-center text-white"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overflow: 'hidden',
      paddingTop: 200,
      paddingBottom: 200,
    }}
  >
    <div style={{ background: 'rgba(204, 0, 0, 0.6)', padding: '25px 0' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: -5 }}>
        <strong>KRASHNA MUSIKA</strong>
      </h1>
      <p className="lead">delfts studenten muziekgezelschap</p>
    </div>
  </div>
)

export default Jumbotron
