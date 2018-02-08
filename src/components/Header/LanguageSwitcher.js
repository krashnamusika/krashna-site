import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'
import enFlag from './en-flag.svg'
import nlFlag from './nl-flag.svg'

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  getImageByCode(code) {
    return code === 'en-GB' ? enFlag : nlFlag
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  renderLanguageChoice({ code, label }) {
    return (
      <a
        key={code}
        className={classNames('dropdown-item', {
          active: this.state.language === code,
        })}
        href="#"
        onClick={() => this.handleChangeLanguage(code)}
      >
        <img
          src={this.getImageByCode(code)}
          alt={label}
          className="mr-2"
          width="24px"
        />
        {label}
      </a>
    )
  }

  render() {
    const languages = [
      { code: 'en-GB', label: 'English' },
      { code: 'nl-NL', label: 'Nederlands' },
    ]

    return (
      <li className="nav-item dropdown ml-lg-2">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="langDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={this.getImageByCode(this.state.language)}
            alt="Language"
            width="24px"
          />
        </a>
        <div className="dropdown-menu" aria-labelledby="langDropdown">
          {languages.map(language => this.renderLanguageChoice(language))}
        </div>
      </li>
    )
  }
}

export default translate('LanguageSwitcher')(LanguageSwitcher)
