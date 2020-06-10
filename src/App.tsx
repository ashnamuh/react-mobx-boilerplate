import React from 'react'
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom'

import IndexPage from 'pages/index'
import AshPage from 'pages/ash'
import ManduPage from 'pages/mandu'

export default function App() {
  return (
    <>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ash">Ash</Link>
              </li>
              <li>
                <Link to="/mandu">Mandu</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/ash" component={AshPage} />
              <Route exact path="/mandu" component={ManduPage} />
            </Switch>
          </div>
        </Router>
    </>
  )
}