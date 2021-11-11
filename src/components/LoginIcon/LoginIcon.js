import instagramIcon from '@/assets/img/instagramIcon_gray.svg'
import mailIcon from '@/assets/img/mailIcon_gray.svg'
import twitterIcon from '@/assets/img/twitterIcon_gray.svg'
import styles from './loginIcon.module.scss'
import React from 'react'

const LoginIcon = () => {
  return (
    <>
      <nav className={styles.bl_LoginIconConts}>
        <ul className={styles.bl_LoginIconConts_nav}>
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

export default LoginIcon
