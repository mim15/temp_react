import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from '../utils/Firebase'

export default function Home() {
  const { user } = useAuthState()

  return (
    <>
      <h1>Welcome {user?.email}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
    </>
  )
}
