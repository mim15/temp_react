import React from 'react'
import styles from '../styles/footer.module.scss'
import SnsList from './SnsList'

const Footer = () => {
  return (
    <>
      <div className={styles.ly_footer}>
        <div className={styles.ly_footer_inner}>
          <div className={styles.bl_headerConts}>
            <div className={styles.el_cpTtl}>© MIM 2021</div>
            <SnsList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
