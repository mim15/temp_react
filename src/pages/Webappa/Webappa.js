import Layout from '@/components/Layout'
import React from 'react'
import styles from './webappa.module.scss'

const WebappA = () => {
  return (
    <>
      <Layout>
        <div className={styles.ly_cont}>
          <h1 className={styles.bl_contTitle}>Portfolio</h1>
          <div className={styles.bl_media}>
            <img className={styles.bl_media_img} src="https://picsum.photos/500/300/?image=10" alt="" />
          </div>
          <div className={styles.card_body}>
            <div className={styles.card_Tex}>
              <h2 className={styles.card_title}>レストランのサイトデザイン</h2>
              <h3 className={styles.bl_media_txt01}>WEB</h3>
              <h3 className={styles.bl_media_txt02}>TOTAL TIME 12 DAYS</h3>
            </div>
          </div>
          <section className={styles.ly_cont_sect}>
            <h2 className={styles.bl_cont_ttl}>作品について</h2>
            <p className={styles.bl_cont_desc}>説明：架空のレストランサイト</p>
            <p className={styles.bl_cont_url}>
              作品URL：<a href="http://example.com/">http://example.com/</a>
            </p>
            <p className={styles.bl_cont_work}>作業：デザイン・コーディング</p>
            <p className={styles.bl_cont_time}>制作期間：2週間</p>
            <p className={styles.bl_cont_env}>作業環境：Photoshop・Illustrator・ Visual Studio Code・React</p>
            <p className={styles.bl_cont_prog}>使用言語：HTML・SCSS・JavaScript</p>
            <p className={styles.bl_cont_persona}>ペルソナ：30代女性向けの化粧品</p>
            <p className={styles.bl_cont_design}>デザインで意識したこと</p>
            <ul className={styles.bl_cont_points}>
              <li className={styles.bl_cont_point}>A TEST</li>
              <li className={styles.bl_cont_point}>B TEST</li>
              <li className={styles.bl_cont_point}>C TEST</li>
              <li className={styles.bl_cont_point}>D TEST</li>
            </ul>
            <h2 className={styles.bl_cont_ttl}>制作して</h2>
            <p className={styles.bl_cont_think}>test</p>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default WebappA
