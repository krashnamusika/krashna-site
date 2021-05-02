import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import PageTemplate from "../templates/pageTemplate";
import poster from "../../static/images/contrabassoonist.jpg";

const donateButtons = [
  {
    amount: 5,
    link:
      "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=cieCqspCQIicLorzoPmS9w",
  },
  {
    amount: 15,
    link:
      "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=21KqOYk-RzyGQ4FDD66hJA",
  },
  {
    amount: 25,
    link:
      "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=Qijgv5eNT--LJrRyQxorFw",
  },
];

const DonateModal = ({ intl }) => (
  <div
    className="modal fade"
    id="donateModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden={true}
  >
    <div
      className="modal-dialog modal-dialog-centered modal-lg"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            {intl.formatMessage({ id: "contrabassoon.donate" })}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>{intl.formatMessage({ id: "contrabassoon.donate-text" })}</p>
          <p>
            {donateButtons.map(({ amount, link }) => (
              <a
                key={amount}
                href={link}
                className="btn btn-outline-dark mr-3"
                target="_blank"
              >
                &euro;&nbsp;{amount},-
              </a>
            ))}
            <a
              href={
                "https://betaalverzoek.rabobank.nl/betaalverzoek/?id=HHCln-_QQ9-lPytZQ6qZUA"
              }
              className="btn btn-outline-dark"
              target="_blank"
            >
              {intl.formatMessage({ id: "contrabassoon.choose-amount" })}
            </a>
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            {intl.formatMessage({ id: "contrabassoon.modal-close" })}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PosterSection = ({ intl }) => (
  <>
    <div className="col-sm-12 col-md-4">
      <img
        alt=""
        className="img-fluid mb-2 mb-md-0 pr-4 pr-md-0"
        src={poster}
      />
    </div>
    <div className="col-sm-12 col-md-8">
      <p>{intl.formatMessage({ id: "contrabassoon.text" })}</p>
    </div>
  </>
);

const LiveStreamSection = ({ intl }) => (
  <div>
    <div className="row mt-3">
      <div className="col d-flex justify-content-end">
        <button
          className="btn-block btn-lg btn-danger"
          data-toggle="modal"
          data-target="#donateModal"
        >
          {intl.formatMessage({ id: "contrabassoon.donate" })}
        </button>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Contrabassoon radio broadcast"
            src="https://player.twitch.tv/?channel=sanderbenjamin&parent=krashna.nl"
            height="840"
            width="473"
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  </div>
);

const ContrabassoonPage = ({ intl }) => {
  const title = intl.formatMessage({ id: "contrabassoon.title" });
  return (
    <PageTemplate title={title} useCustomStructure={true}>
      <div className="container-lg">
        <div style={{ paddingTop: "60px", flex: "auto" }}>
          <h1 className="text-center mt-4 mb-4">{title}</h1>
        </div>
        <div className="row mb-4">
          <PosterSection intl={intl} />
        </div>
        <hr />
        <div className="row mb-4">
          <div className="col">
            <LiveStreamSection intl={intl} />
          </div>
        </div>
      </div>
      <DonateModal intl={intl} />
    </PageTemplate>
  );
};

export default injectIntl(ContrabassoonPage);
