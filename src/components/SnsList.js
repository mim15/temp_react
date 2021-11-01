import React from 'react'
import instagramIcon from '../asset/img/instagramIcon.svg'
import mailIcon from '../asset/img/mailIcon.svg'
import twitterIcon from '../asset/img/twitterIcon.svg'
import styles from '../styles/snsList.module.scss'

const Footer = () => {
  return (
    <>
      <nav className={styles.bl_footerConts}>
        <ul className={styles.bl_footerConts_nav}>
          <li>
            <a href="https://twitter.com/mim01_tweet/">
              <img className={styles.pc_snsList} src={twitterIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mim01_ins/">
              <img className={styles.pc_snsList} src={instagramIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="mailto:shigezumi.masaaki1989@gmail.com">
              <img className={styles.pc_snsList} src={mailIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Footer
