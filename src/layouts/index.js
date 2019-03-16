import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'

import Header from '../components/Header'
import '../utils/i18n.js'
import favicon from './favicon.png'
import './index.css'

class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="fill-page">
        <Helmet
          title="Krashna Musika"
          meta={[
            {
              name: 'description',
              content: 'Delfts Studenten Muziekgezelschap Krashna Musika',
            },
            {
              name: 'keywords',
              content:
                'krashna, krashna musika, dsmg krashna, delft, muziek, music, orkest, koor, orchestra, choir, tu delft',
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,700"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <div className="fill-page">
          <Header />
          <div className="d-flex flex-column fill-page">
            <div
              style={{
                paddingTop: '60px',
                flex: 'auto',
              }}
            >
              {this.props.children()}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateWrapper
