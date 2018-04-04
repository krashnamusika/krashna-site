import Link from 'gatsby-link'
import React from 'react'
import { translate } from 'react-i18next'

const MAX_NUM_NEWS = 3

const NewsSection = ({ news, t }) => {
  const sortedNews = news
    .map(obj => obj.node)
    .sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
    .slice(0, MAX_NUM_NEWS)

  if (sortedNews.length === 0) {
    return <div />
  }

  return (
    <div className="bg-hout-groen">
      <div className="container pt-5 pb-5">
        <h2 className="text-center mb-3">{t('index.news')}</h2>
        {sortedNews.map(news => (
          <div key={news.id} className="row mb-2">
            <div className="col-lg-1 col-sm-2 col-3">
              <div className="pl-2 pr-2 pb-2 fa fa-newspaper-o fa-3x">
              </div>
            </div>
            <div className="col-lg-11 col-sm-10 col-9">
              <h5>
                <Link to={`/news/${news.id}`} className="text-dark font-weight-bold">
                  {t(`news.${news.id}.title`)}
                </Link>
              </h5>
              <p>
                <span className="fa fa-calendar mr-2" />
                {new Date(news.date).toLocaleDateString('nl-NL')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default translate('translations')(NewsSection)
