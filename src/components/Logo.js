import React from 'react'
import { Link } from 'react-router-dom'
import mimLogo from '../asset/img/mimLogo.svg'
import styles from '../styles/logo.module.scss'

const Logo = () => {
  return (
    <>
      <Link to="./" className={styles.bl_headerConts_logo}>
        <img src={mimLogo} alt="mim site logo" />
      </Link>
    </>
  )
}

export default Logo
