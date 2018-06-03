import QRCode from 'qrcode.react'
import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import tourLogo from '../components/IndexPage/TourSection/krashna-tour-2018-logo.jpg'
import PageTemplate from '../templates/pageTemplate'

const TourPage = ({t}) => (
  <PageTemplate title={t('tour.title')}>
    <Markdown>{t('tour.text')}</Markdown>

    <div className="row mb-5">
      <div className="col-md-4 col-12 text-center">
        <h4>5,00 €</h4>
        <div>
          <QRCode value="https://tikkie.me/pay/dulv1ufdj9atn41ur7a3"/>
        </div>
        <a className="btn btn-info mt-2" href="https://tikkie.me/pay/dulv1ufdj9atn41ur7a3">
          Pay via iDeal (Tikkie)
        </a>
      </div>
      <div className="col-md-4 col-12 text-center">
        <h4>10,00 €</h4>
        <div>
          <QRCode value="https://tikkie.me/pay/meivu45c7bvpsuhujbf2"/>
        </div>
        <a className="btn btn-success mt-2" href="https://tikkie.me/pay/meivu45c7bvpsuhujbf2">
          Pay via iDeal (Tikkie)
        </a>
      </div>
      <div className="col-md-4 col-12 text-center">
        <h4>15,00 €</h4>
        <div>
          <QRCode value="https://tikkie.me/pay/hhhuutsq3dnt7isr4jhf"/>
        </div>
        <a className="btn btn-warning mt-2" href="https://tikkie.me/pay/hhhuutsq3dnt7isr4jhf">
          Pay via iDeal (Tikkie)
        </a>
      </div>
    </div>

    <div className="col-md-5 col-9 mx-auto mb-5" style={{marginTop: "5rem"}}>
      <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2018"/>
    </div>
  </PageTemplate>
)

export default translate('translations')(TourPage)
