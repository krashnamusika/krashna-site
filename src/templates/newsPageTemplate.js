import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from './pageTemplate'

const NewsPageTemplate = ({ pageContext, intl }) => {
  const news = pageContext.news
  const newsTitle = intl.formatMessage({ id: `news.${news.id}.title` })
  const newsDescription = intl.formatMessage({
    id: `news.${news.id}.description`,
  })

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

export default injectIntl(NewsPageTemplate)
