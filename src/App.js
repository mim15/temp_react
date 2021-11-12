import PrivateRoute from '@/components/PrivateRoute'
import * as ROUTES from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import { About } from '@/pages/About'
import { Blog } from '@/pages/Blog'
import { BlogSingle } from '@/pages/BlogSingle'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { NotFound } from '@/pages/NotFound'
import { Portfolio } from '@/pages/Portfolio'
import { WebappA } from '@/pages/Webappa'
import { WebappB } from '@/pages/Webappb'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Loading } from './components/Loading'

const App = () => {
  const { isLoading } = useAuth()
  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />

        <PrivateRoute exact path={ROUTES.HOME}>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.ABOUT}>
          <About />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.BLOG}>
          <Blog />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.PORTFOLIO}>
          <Portfolio />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.WEBAPPA}>
          <WebappA />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.WEBAPPB}>
          <WebappB />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.POST}>
          <BlogSingle />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
