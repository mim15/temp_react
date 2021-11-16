import { FirebaseContext } from '@/context/FirebaseContext'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const { firebase } = useContext(FirebaseContext)

  const signin = ({ email, password, callback }) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
        callback()
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(false)
        }
        setIsLoading(false)
      })

      return () => unsubscribe()
    }, 2000)
  }, [firebase])

  return {
    isLoading,
    user,
    signin,
    signout,
  }
}
