import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* CDN dependencies */}
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />

          {/* OpenGraph and Twitter images */}
          <meta
            property="og:image"
            content="https://www.krashna.nl/krashna-logo.jpg"
          />
          <meta
            name="twitter:image"
            content="https://www.krashna.nl/krashna-logo.jpg"
          />

          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          {/* Google Analytics */}
          {process.env.NODE_ENV === 'production' ? (
            <div className="d-none">
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-84285092-1"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag("js", new Date());

                  gtag("config", "UA-84285092-1");
                `,
                }}
              />
            </div>
          ) : (
            undefined
          )}
        </body>
      </html>
    )
  }
}
