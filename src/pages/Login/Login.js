import { LoginIcon } from '@/components/LoginIcon'
import { Logo } from '@/components/Logo'
import { HOME } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './login.module.scss'

export default function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const auth = useAuth()
  let history = useHistory()

  return (
    <>
      <main className={styles.ly_cont}>
        <form
          className={styles.ly_cont_form}
          onSubmit={(event) => {
            event.preventDefault()
            auth.signin({
              email: emailValue,
              password: passwordValue,
              callback: () => history.push(HOME),
            })
          }}
        >
          <h1 className={styles.bl_cont_ttl}>Login</h1>
          <Logo />
          <section className={styles.bl_form_body}>
            <p className={styles.bl_form_bodyWrapper}>
              <label htmlFor="email" className={styles.el_label_ttl}>
                <span>E-mail</span>
              </label>
              <input
                className={styles.el_label_txt}
                type="email"
                placeholder="Email"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </p>
            <p className={styles.bl_form_bodyWrapper}>
              <label htmlFor="pwd" className={styles.el_label_ttl}>
                <span>Password</span>
              </label>
              <input
                className={styles.el_label_txt}
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </p>
          </section>
          <section className={styles.bl_form_submit}>
            <p className={styles.bl_form_submitWrapper}>
              <button type="submit" className={styles.el_btn}>
                Enter
              </button>
            </p>
          </section>
        </form>
        <section>
          <LoginIcon />
        </section>
      </main>
    </>
  )
}
