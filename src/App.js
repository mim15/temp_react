import PrivateRoute from '@/components/PrivateRoute'
import * as ROUTES from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import About from '@/pages/About'
import BlogList from '@/pages/BlogList'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import PortfolioList from '@/pages/PortfolioList'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  const { isLoading } = useAuth()
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.BLOG} component={BlogList} />
        <Route path={ROUTES.PORTFOLIO} component={PortfolioList} />
        <PrivateRoute path={ROUTES.HOME}>
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
