import BodyIcon from '@/components/B_snsIcon'
import Logo from '@/components/Logo'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useCallback } from 'react'

export default function Login() {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Logo />
          <section>
            <p>
              <label htmlFor="email">
                <span>E-mail</span>
              </label>
              <input type="email" id="email" name="usermail" />
            </p>
            <p>
              <label htmlFor="pwd">
                <span>Password</span>
              </label>
              <input type="password" id="pwd" name="password" />
            </p>
          </section>
          <section>
            <p>
              <button type="submit">ENTER</button>
            </p>
          </section>
        </form>
        <section>
          <BodyIcon />
        </section>
      </main>
    </>
  )
}
