import React from "react";
import { injectIntl } from 'gatsby-plugin-intl'
import PageTemplate from "../templates/pageTemplate";
import messiahPoster from "../../static/images/krashna-messiah-poster-2018.jpg";

const donateButtons = [
  {
    amount: 10,
    link: "https://krashna.nl/doneer",
  }, {
    amount: 15,
    link: "https://krashna.nl/doneer",
  }, {
    amount: 25,
    link: "https://krashna.nl/doneer",
  }, {
    amount: 50,
    link: "https://krashna.nl/doneer",
  }
];

const DonateModal = () => (
  <div className="modal fade" id="donateModal" tabIndex={-1} role="dialog" aria-hidden={true}>
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Doneer aan Krashna</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            <i className="border-bottom">Enjoying your time? Empty your pockets!</i>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            {donateButtons.map(({amount, link}) => (
              <a href={link} className="btn btn-outline-dark mr-3" target="_blank">
                &euro;&nbsp;{amount},-
              </a>
            ))}
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

const PosterSection = () => (
  <img alt="" src={messiahPoster} className="img-fluid" />
);

const LiveStreamSection = () => (
  <div>
    <div className="row">
      <div className="col">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="Concert live stream" className="embed-responsive-item" width="840" height="473"
            src="https://www.youtube.com/embed/uvJtQk0XetA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col d-flex justify-content-end">
        <button
          className="btn btn-danger mr-2"
          data-toggle="modal"
          data-target="#donateModal"
        >
          Doneer aan Krashna
        </button>
        <a
          href="http://files.krashna.nl/manfred-programma.pdf"
          className="btn btn-outline-dark"
          target="_blank"
        >
          Programmaboekje&nbsp;<i className="pl-2 fa fa-arrow-right" />
        </a>
      </div>
    </div>
  </div>
);

const ConcertPage = ({ intl }) => {
  const title = "Concert 16 januari 2021: Working title";
  return (
    <PageTemplate title={title} useCustomStructure={true}>
      <div className="mx-5 px-5 my-5 pb-5">
        <div style={{paddingTop: '60px', flex: 'auto'}}>
          <h1 className="text-center mt-4 mb-4">{title}</h1>
        </div>
        <div className="row">
          <div className="col-4 pr-4">
            <PosterSection />
          </div>
          <div className="col-8 pl-4">
            <LiveStreamSection />
          </div>
        </div>
      </div>
      <DonateModal />
    </PageTemplate>
  )
};

export default injectIntl(ConcertPage);
