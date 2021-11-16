import imgs from '@/assets/img/PortfolioList_image_large.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './portfolio.module.scss'

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <div className={styles.ly_cont}>
        <h1 className={styles.bl_contTitle}>Portfolio</h1>

        <ul className={styles.bl_cardUnit}>
          <li className={styles.bl_card}>
            <Link to="webappa" className={styles.bl_card_media}>
              <div className={`${styles.bl_card_imgWrapper} ${loaded && styles.load}`}>
                <img className={styles.bl_card_img} onLoad={() => setLoaded(true)} src={imgs} />
              </div>
              <div className={styles.bl_card_body}>
                <div className={styles.bl_card_tex}>
                  <h2 className={styles.bl_card_ttl}>Chat App</h2>
                  <h3 className={styles.bl_media_cat}>APP</h3>
                  <h3 className={styles.bl_media_date}>TOTAL TIME 12 DAYS</h3>
                </div>
              </div>
            </Link>
          </li>

          <li className={styles.bl_card}>
            <Link to="webappb" className={styles.bl_card_media} href="/">
              <div className={`${styles.bl_card_imgWrapper} ${loaded && styles.load}`}>
                <img className={styles.bl_card_img} onLoad={() => setLoaded(true)} src={imgs} />
              </div>
              <div className={styles.bl_card_body}>
                <div className={styles.bl_card_tex}>
                  <h2 className={styles.bl_card_ttl}>Chat App</h2>
                  <h3 className={styles.bl_media_cat}>APP</h3>
                  <h3 className={styles.bl_media_date}>TOTAL TIME 12 DAYS</h3>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Portfolio
