import React from 'react'

const WebappB = () => {
  return (
    <>
      <div className={styles.ly_cont}>
        <h1 className={styles.bl_contTitle}>Portfolio</h1>
        <BackBtn backLink="/portfolio" />
        <div className={styles.bl_media}>
          <img className={styles.bl_media_img} src={Chat} alt="" />
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
          <p className={styles.bl_cont_desc}>説明：チャット　アプリ</p>
          <p className={styles.bl_cont_url}>
            作品URL：<a href="http://example.com/">http://example.com/</a>
          </p>
          <p className={styles.bl_cont_work}>作業：デザイン・コーディング</p>
          <p className={styles.bl_cont_time}>制作期間：2週間</p>
          <p className={styles.bl_cont_env}>作業環境：Visual Studio Code・React</p>
          <p className={styles.bl_cont_prog}>使用したサービス：Firebase</p>
          <p className={styles.bl_cont_persona}>ペルソナ：タスク管理ツールよりも相互のやり取りが出来るものを</p>
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
    </>
  )
}

export default WebappB
