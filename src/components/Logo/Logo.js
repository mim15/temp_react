import mimLogo from '@/assets/img/mimLogo.svg'
import styles from './logo.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

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
