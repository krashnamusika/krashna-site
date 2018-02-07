import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../utils/i18n.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import $ from 'jquery'
import favicon from './favicon.png'

class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  componentDidMount() {
    window.$ = window.jQuery = $
  }

  render() {
    return (
      <div>
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
          script={
            [
              // {
              //   src:
              //     'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
              // },
              // {
              //   src:
              //     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
              // },
            ]
          }
        >
          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
          {/* <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          /> */}
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header />
        <div
          style={{
            paddingTop: '50px',
          }}
        >
          {this.props.children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
