import BodyIcon from '@/components/B_snsIcon'
import Logo from '@/components/Logo'
import { HOME } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const auth = useAuth()
  let history = useHistory()

  return (
    <>
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            auth.signin({
              email: emailValue,
              password: passwordValue,
              callback: () => history.push(HOME),
            })
          }}
        >
          <h1>Login</h1>
          <Logo />
          <section>
            <p>
              <label htmlFor="email">
                <span>E-mail</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="pwd">
                <span>Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
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
