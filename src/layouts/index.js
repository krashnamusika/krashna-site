import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../utils/i18n.js'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import favicon from './favicon.png'

class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div className="fill-page">
        <Helmet
          title="Krashna Musika"
          meta={[
            {
              name: 'description',
              content: 'Delfts Studenten Muziek Gezelschap Krashna Musika',
            },
            {
              name: 'keywords',
              content:
                'krashna, krashna musika, dsmg krashna, delft, muziek, music, orchestra, choir, tu delft',
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header />
        <div className="d-flex flex-column fill-page">
          <div
            style={{
              paddingTop: '50px',
              flex: 'auto',
            }}
          >
            {this.props.children()}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
