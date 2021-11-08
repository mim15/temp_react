import Layout from '@/components/Layout/Layout'
import styles from '@/styles/portfolioList.module.scss'
import React from 'react'
import Button from '@/assets/img/Button.svg'
import { Link } from 'react-router-dom'

const PortfolioList = () => {
  return (
    <>
      <Layout>
        <div className={styles.ly_cont}>

          <h1 className={styles.bl_contTitle}>Portfolio</h1>
          
          <ul className={styles.cards}>

            <li className={styles.cards_item}>
              <div className={styles.card} href="/">
                <div class={styles.card_content}>
                  <img class={styles.card_image} src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div class={styles.card_body}>
                  <div class={styles.card_Tex}>
                    <h2 className={styles.card_title}>レストランのサイトデザイン</h2>
                    <h3 className={styles.card_text01}>WEB</h3>
                    <h3 className={styles.card_text02}>TOTAL TIME 12 DAYS</h3>
                  </div>
                  <Link to="portofolio/blog_v01" className={styles.bl_Button}><img src={Button} alt="Button" /></Link>
                </div>
              </div>
            </li>

            <li className={styles.cards_item}>
              <div className={styles.card} href="/">
                <div class={styles.card_content}>
                  <img class={styles.card_image} src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div class={styles.card_body}>
                  <div class={styles.card_Tex}>
                    <h2 className={styles.card_title}>レストランのサイトデザイン</h2>
                    <h3 className={styles.card_text01}>WEB</h3>
                    <h3 className={styles.card_text02}>TOTAL TIME 12 DAYS</h3>
                  </div>
                  <Link to="portofolio/blog_v01" className={styles.bl_Button}><img src={Button} alt="Button" /></Link>
                </div>
              </div>
            </li>

            <li className={styles.cards_item}>
              <div className={styles.card} href="/">
                <div class={styles.card_content}>
                  <img class={styles.card_image} src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div class={styles.card_body}>
                  <div class={styles.card_Tex}>
                    <h2 className={styles.card_title}>レストランのサイトデザイン</h2>
                    <h3 className={styles.card_text01}>WEB</h3>
                    <h3 className={styles.card_text02}>TOTAL TIME 12 DAYS</h3>
                  </div>
                  <Link to="portofolio/blog_v01" className={styles.bl_Button}><img src={Button} alt="Button" /></Link>
                </div>
              </div>
            </li>


          </ul>

        </div>
      </Layout>
    </>
  )
}

export default PortfolioList
