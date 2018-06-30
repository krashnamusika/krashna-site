import QRCode from 'qrcode.react'
import React from 'react'
import {translate} from 'react-i18next'
import Markdown from 'react-remarkable'
import tourLogo from '../components/IndexPage/TourSection/krashna-tour-2018-logo.jpg'
import PageTemplate from '../templates/pageTemplate'

const DonationComponent = ({euros, url, buttonColor}) => (
  <div className="col-md-4 col-12 text-center">
    <h4>{euros},00 €</h4>
    <div>
      <QRCode value={url}/>
    </div>
    <a className={`btn btn-${buttonColor} mt-2`} href={url}>
      Pay via iDeal (Tikkie)
    </a>
  </div>
);

const SectionContainer = ({backgroundClass, children}) => (
  <div className={backgroundClass}>
    <div className="container" style={{paddingTop: "3.5em", paddingBottom: "3.5em"}}>
      {children}
    </div>
  </div>
)

const TourPage = ({t}) => (
  <PageTemplate title={t('tour.title')} useCustomStructure={true}>
    <SectionContainer backgroundClass="bg-krashna">
      <h1 className="text-center text-white font-weight-bold pb-4 pt-4">{t('tour.title')}</h1>
    </SectionContainer>
    <SectionContainer backgroundClass="">
      <div className="lead">
        <Markdown>{t('tour.intro')}</Markdown>

        <div className="col-md-5 col-9 mx-auto mb-5" style={{marginTop: "5rem"}}>
          <img src={tourLogo} className="img-fluid" alt="Krashna Tour 2018"/>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer backgroundClass="bg-koper-goud">
      <Markdown>{t('tour.programme')}</Markdown>
    </SectionContainer>
    <SectionContainer backgroundClass="bg-hout-groen">
      <Markdown>{t('tour.repertoire')}</Markdown>
    </SectionContainer>
    <SectionContainer backgroundClass="">
      <Markdown>{t('tour.adoption')}</Markdown>

      <div className="row mb-5">
        <DonationComponent euros={5} url="https://tikkie.me/pay/70d5qtrjou4a5uojcf67" buttonColor="info"/>
        <DonationComponent euros={10} url="https://tikkie.me/pay/5cq7lq3ksnft3ap1btst" buttonColor="success"/>
        <DonationComponent euros={15} url="https://tikkie.me/pay/ebpf9dudcs4dibnfn6jo" buttonColor="warning"/>
      </div>
    </SectionContainer>
  </PageTemplate>
)

export default translate('translations')(TourPage)
