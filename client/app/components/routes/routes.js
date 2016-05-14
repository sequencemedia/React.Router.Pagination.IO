import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './index-path'
import IndexPage from './index-page'
import PaginatedPage from './paginated-page'

export default (
  <Route path='/' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path=':page' component={PaginatedPage} />
  </Route>
)
