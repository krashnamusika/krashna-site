import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import krashnaEdge from "./krashna-edge.png";
import LanguageSwitcher from "./LanguageSwitcher";

const NavLink = ({ id, name, additionalClasses }) => (
  <Link className={`nav-item nav-link ${additionalClasses}`} to={"/" + id}>
    {name}
  </Link>
);

NavLink.defaultProps = {
  additionalClasses: "",
};

const nestedMenuItems = {
  krashna: [
    "choir",
    "orchestra",
    "conductors",
    "chamber-music",
    "chamber-choir",
    "chamber-orchestra",
    "all-concerts",
  ],
  association: [
    "about",
    "committees",
    "recommendation",
    "honorary-members",
    "daan",
  ],
  impressions: ["photos", "videos"],
  business: [
    "rent-instrument",
    "hire-ensemble",
    "hire-orchestra-choir",
    "donate",
    "partners",
  ],
};

const DropdownLink = ({ id, name }) => (
  <Link className="dropdown-item" to={"/" + id}>
    {name}
  </Link>
);

const Dropdown = ({ id, intl }) => (
  <li className="nav-item dropdown">
    <button
      className="nav-link dropdown-toggle link-button"
      id={id + "Dropdown"}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {intl.formatMessage({ id: `header.${id}.name` })}
    </button>
    <div className="dropdown-menu" aria-labelledby={id + "Dropdown"}>
      {nestedMenuItems[id].map((item) => (
        <DropdownLink
          id={item}
          key={item}
          name={intl.formatMessage({ id: `header.${id}.${item}` })}
        />
      ))}
    </div>
  </li>
);

class Header extends React.Component {
  componentDidMount() {
    window["$"](".navbar-nav .dropdown-menu a, .navbar-nav>a").on(
      "click",
      function () {
        window["$"](".navbar-collapse").collapse("hide");
      }
    );
  }

  render() {
    let intl = this.props.intl;

    return (
      <nav
        className="navbar navbar-expand-lg fixed-top border-bottom navbar-light"
        style={{
          background: "#fff",
          borderTop: "3px solid #c00",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={krashnaEdge} height="30px" alt="Krashna Musika" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#krashnaNavbar"
            aria-controls="krashnaNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="krashnaNavbar">
            <div className="navbar-nav ml-auto">
              <Dropdown id="krashna" intl={intl} />
              <Dropdown id="association" intl={intl} />
              <Dropdown id="impressions" intl={intl} />
              <Dropdown id="business" intl={intl} />
              <NavLink
                id="join"
                name={intl.formatMessage({ id: "header.join" })}
              />
              <NavLink
                id="contact"
                name={intl.formatMessage({ id: "header.contact" })}
              />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default injectIntl(Header);
