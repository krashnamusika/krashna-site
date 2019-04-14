import classNames from 'classnames'
import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from 'gatsby-plugin-intl'
import React, { Component } from 'react'
import enFlag from './en-flag.svg'
import nlFlag from './nl-flag.svg'

class LanguageSwitcher extends Component {
  getImageByCode(code) {
    return code === 'en' ? enFlag : nlFlag
  }

  renderLanguageChoice(code, label, currentLocale) {
    return (
      <button
        key={code}
        className={classNames('dropdown-item', 'link-button', {
          active: currentLocale === code,
        })}
        onClick={() => changeLocale(code)}
      >
        <img
          src={this.getImageByCode(code)}
          alt={label}
          className="mr-2"
          width="24px"
        />
        {label}
      </button>
    )
  }

  render() {
    const languageNames = [
      { code: 'en', label: 'English' },
      { code: 'nl', label: 'Nederlands' },
    ]

    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <li className="nav-item dropdown ml-lg-2">
            <button
              className="nav-link dropdown-toggle link-button"
              id="langDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={this.getImageByCode(currentLocale)}
                alt="Language"
                width="24px"
              />
            </button>
            <div className="dropdown-menu" aria-labelledby="langDropdown">
              {languageNames.map(l =>
                this.renderLanguageChoice(l.code, l.label, currentLocale)
              )}
            </div>
          </li>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)
