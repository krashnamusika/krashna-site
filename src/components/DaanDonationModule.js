import React from 'react'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'

/*

[14:59, 12/18/2019] Bram van Diemen: Open bedrag: Wil je mij alsjeblieft betalen voor 'Daan Admiraal' via
https://tikkie.me/pay/qbqipq86e0gppo0iqgsq

Deze link is geldig t/m 30 december
[14:59, 12/18/2019] Bram van Diemen: Wil je mij alsjeblieft €50,00 betalen voor 'Daan Admiraal' via
https://tikkie.me/pay/k104mgjld28430rik5h5

Deze link is geldig t/m 30 december
[14:59, 12/18/2019] Bram van Diemen: Wil je mij alsjeblieft €25,00 betalen voor 'Daan Admiraal' via
https://tikkie.me/pay/la5r6acgkoguhnt72u2v

Deze link is geldig t/m 30 december
[14:59, 12/18/2019] Bram van Diemen: Wil je mij alsjeblieft €10,00 betalen voor 'Daan Admiraal' via
https://tikkie.me/pay/fij92012aouj44jl2m8l

Deze link is geldig t/m 30 december
 */

const DaanDonationModule = ({ intl, moreInformation, buttonDark }) => (
  <>
    <Markdown>{intl.formatMessage({ id: 'daan.text' })}</Markdown>
    <div className="text-center">
      <a
        href="https://tikkie.me/pay/fij92012aouj44jl2m8l"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        10€
      </a>
      <a
        href="https://tikkie.me/pay/la5r6acgkoguhnt72u2v"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        25€
      </a>
      <a
        href="https://tikkie.me/pay/k104mgjld28430rik5h5"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mr-2`}
      >
        50€
      </a>
      <a
        href="https://tikkie.me/pay/qbqipq86e0gppo0iqgsq"
        className={`btn btn-outline-${buttonDark ? 'dark' : 'light'}`}
      >
        Custom Amount
      </a>
    </div>
    {moreInformation ? (
      <small className="text-center">
        <Link
          to="/daan"
          className={`btn btn-outline-${buttonDark ? 'dark' : 'light'} mt-2`}
        >
          {intl.formatMessage({ id: 'index.monument-donation.more' })}
          <span className="fa fa-caret-right ml-2" />
        </Link>
      </small>
    ) : (
      undefined
    )}
  </>
)

export default injectIntl(DaanDonationModule)
