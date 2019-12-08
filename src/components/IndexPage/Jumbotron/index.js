import React from 'react'
import bgImage from './krashna-mp.jpg'
import { injectIntl, Link } from "gatsby-plugin-intl";

const Jumbotron = ({intl}) => (
  <div
    className="mx-auto text-center text-white"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overflow: 'hidden',
      paddingTop: 180,
      paddingBottom: 180,
    }}
  >
    <div
      style={{ background: 'rgba(204, 0, 0, 0.6)', padding: '25px 0 20px 0' }}
    >
      <h1 style={{ fontSize: '3.5rem', marginBottom: -5, fontWeight: 900 }}>
        KRASHNA MUSIKA
      </h1>
      <p className="lead">delfts studenten muziekgezelschap</p>
      <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>
        <Link to="/choir" className="text-white">{intl.formatMessage({ id: 'index.jumbotron.choir' })}</Link>
        <span style={{ marginLeft: 20, marginRight: 20}}>|</span>
        <Link to="/orchestra" className="text-white">{intl.formatMessage({ id: 'index.jumbotron.orchestra' })}</Link>
        <span style={{ marginLeft: 20, marginRight: 20}}>|</span>
        <Link to="/chamber-music" className="text-white">{intl.formatMessage({ id: 'index.jumbotron.chamber-music' })}</Link>
      </p>
    </div>
  </div>
)

export default injectIntl(Jumbotron)
