import FooterIcon from '@/components/F_snsIcon'
import styles from '@/styles/footer.module.scss'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className={styles.ly_footer}>
        <div className={styles.ly_footer_inner}>
          <div className={styles.bl_headerConts}>
            <div className={styles.el_cpTtl}>© MIM 2021</div>
            <FooterIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
