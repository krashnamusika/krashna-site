import Link from 'gatsby-link'
import React from 'react'
import { translate } from 'react-i18next'
import krashnaEdge from './krashna-edge.png'
import LanguageSwitcher from './LanguageSwitcher'

const NavLink = ({ id, name, additionalClasses }) => (
  <Link className={`nav-item nav-link ${additionalClasses}`} to={'/' + id}>
    {name}
  </Link>
)

NavLink.defaultProps = {
  additionalClasses: '',
}

const DropdownLink = ({ id, name }) => (
  <Link className="dropdown-item" to={'/' + id}>
    {name}
  </Link>
)

const Dropdown = ({ id, t }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id={id + 'Dropdown'}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {t('header.' + id).name}
    </a>
    <div className="dropdown-menu" aria-labelledby={id + 'Dropdown'}>
      {Object.keys(t('header.' + id))
        .filter(it => it !== 'name')
        .map(key => (
          <DropdownLink id={key} key={key} name={t('header.' + id)[key]} />
        ))}
    </div>
  </li>
)

class Header extends React.Component {
  componentDidMount() {
    $('.navbar-nav .dropdown-menu a, .navbar-nav>a').on('click', function() {
      $('.navbar-collapse').collapse('hide')
    })
  }

  render() {
    let t = this.props.t

    return (
      <nav
        className="navbar navbar-expand-lg fixed-top border-bottom navbar-light"
        style={{
          background: '#fff',
          borderTop: '3px solid #c00',
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
              <Dropdown id="krashna" t={t} />
              <Dropdown id="association" t={t} />
              <Dropdown id="impressions" t={t} />
              <Dropdown id="business" t={t} />
              <NavLink id="join" name={t('header.join')} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default translate('translations')(Header)
