import React from "react";
import Helmet from "react-helmet";
import { Location } from "@reach/router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SEO from "../components/SEO";
import "./index.css";

export default function PageTemplate({ title, children, useCustomStructure, location }) {
  const pageTitle = title ? `${title} - Krashna Musika` : "Krashna Musika";

  if (useCustomStructure) {
    return (
      <>
        <Location>
          {({ navigate, location }) => (
            <SEO
              title={pageTitle}
              description={pageTitle}
              url={location.pathname}
            />
          )}
        </Location>
        <Helmet title={pageTitle}/>
        <Header/>
        {children}
        <Footer/>
      </>
    );
  }
  return (
    <div className="d-flex flex-column h-100">
      <Location>
        {({ navigate, location }) => (
          <>
            <SEO
              title={pageTitle}
              description={pageTitle}
              url={location.pathname}
            />
          </>
        )}
      </Location>
      <Helmet title={pageTitle}/>
      <Header/>
      <div className="d-flex flex-column flex-grow-1">
        <div className="container text-page-container pb-2">
          <div
            style={{
              paddingTop: "60px",
              flex: "auto"
            }}
          >
            <h1 className="border-bottom text-center mb-4">{title}</h1>
            {children}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

PageTemplate.defaultProps = {
  useCustomStructure: false
};
