import { firebase } from '@/utils/firebase/Config'
import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ProvideAuth } from './context/AuthContext'
import { FirebaseContext } from './context/FirebaseContext'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>mim-blog</title>
      </Helmet>
      <FirebaseContext.Provider value={{ firebase }}>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </FirebaseContext.Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
