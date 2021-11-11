import {Logo} from '@/components/Logo'
import { Navigation } from '@/components/Navgation'
import styles from './header.module.scss'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className={styles.ly_header}>
        <div className={styles.ly_header_inner}>
          <nav className={styles.bl_headerConts}>
            <Logo />
            <Navigation />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
