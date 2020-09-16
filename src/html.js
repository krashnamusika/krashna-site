import PropTypes from 'prop-types'
import React from 'react'
import favicon from './favicon.png'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* CDN dependencies */}
        <script defer src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        />
        <script
          defer
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          WebFont.load({
            google: {
              families: ["Raleway:400,700,900"]
            }
          });
        `,
          }}
        />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href={favicon} />

        {/* OpenGraph and Twitter images */}
        <meta
          property="og:image"
          content="https://www.krashna.nl/krashna-logo.jpg"
        />
        <meta
          name="twitter:image"
          content="https://www.krashna.nl/krashna-logo.jpg"
        />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div className="fill-page">
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
