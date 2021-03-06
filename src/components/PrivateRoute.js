import Layout from '@/components/Layout'
import { LOGIN } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth()
  return (
    <Layout>
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: LOGIN,
                state: { from: location },
              }}
            />
          )
        }
      />
    </Layout>
  )
}

export default PrivateRoute
