import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Login from './pages/Login'
import Portfolio from './pages/Portfolio'
import { AuthContextProvider, useAuthState } from './utils/Firebase'

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route {...props} render={(routeProps) => (isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />)} />
  )
}

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
  return <Route {...props} render={(routeProps) => (!isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />)} />
}

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AuthenticatedRoute exact path="/" component={Home} />
        <AuthenticatedRoute exact path="/about" component={About} />
        <AuthenticatedRoute exact path="/portfolio" component={Portfolio} />
        <AuthenticatedRoute exact path="/blog" component={Blog} />

        <UnauthenticatedRoute exact path="/login" component={Login} />
      </Router>
    </AuthContextProvider>
  )
}
