import React from 'react'
import { translate } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from './pageTemplate'

const NewsPageTemplate = ({ pathContext, t }) => {
  const news = pathContext.news
  const newsTitle = t(`news.${news.id}.title`)
  const newsDescription = t(`news.${news.id}.description`)

  return (
    <PageTemplate title={newsTitle}>
      <div className="text-center mb-4">
        <span className="fa fa-pencil mr-2" />
        {news.author}
        <span className="fa fa-calendar ml-4 mr-2" />
        {new Date(news.date).toLocaleDateString('nl-NL')}
      </div>
      <Markdown>{newsDescription}</Markdown>
    </PageTemplate>
  )
}

export default translate('translations')(NewsPageTemplate)
