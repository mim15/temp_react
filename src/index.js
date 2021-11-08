import { firebase } from '@/utils/firebase/Config'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProvideAuth } from './context/AuthContext'
import { FirebaseContext } from './context/FirebaseContext'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
