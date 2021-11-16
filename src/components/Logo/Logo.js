import mimLogo from '@/assets/img/mimLogo.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './logo.module.scss'

const Logo = () => {
  return (
    <>
      <Link to="/" className={styles.bl_headerConts_logo}>
        <img src={mimLogo} alt="mim site logo" />
      </Link>
    </>
  )
}

export default Logo
