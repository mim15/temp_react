import React from 'react'
import styles from '../styles/header.module.scss'
import Logo from './Logo'
import Nav from './Navgation'

const Header = () => {
  return (
    <>
      <header className={styles.ly_header}>
        <div className={styles.ly_header_inner}>
          <nav className={styles.bl_headerConts}>
            <Logo />
            <Nav />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
