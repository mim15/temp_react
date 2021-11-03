import Logo from '@/components/Logo'
import Nav from '@/components/Navgation'
import styles from '@/styles/header.module.scss'
import React from 'react'

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
