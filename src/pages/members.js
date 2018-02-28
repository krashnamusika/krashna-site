import React from 'react'
import { translate } from 'react-i18next'
import PageTemplate from '../templates/pageTemplate'

const MembersPage = ({ t }) => (
  <PageTemplate title={t('members.title')}>
    <h2>Rehearsal Schedules</h2>
    <a href="http://krashna-orkest-repetitieschema.pbworks.com/w/page/6777292/Krashna%20Musika">
      See this page for both choir and orchestra
    </a>
  </PageTemplate>
)

export default translate('translations')(MembersPage)
