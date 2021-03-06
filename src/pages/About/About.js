import Bar2 from '@/assets/bar/skill_bar2.svg'
import Bar3 from '@/assets/bar/skill_bar3.svg'
import Bar4 from '@/assets/bar/skill_bar4.svg'
import Bar5 from '@/assets/bar/skill_bar5.svg'
import Profile from '@/components/Profile'
import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <>
      <div className={styles.ly_cont}>
        <h1 className={styles.bl_contTitle}>About me</h1>
        <div className={styles.ly_profileMedia}>
          <Profile />
          <div className={styles.bl_profileBody}>
            <h2 className={styles.bl_profileTitle}>Profile</h2>
            <p className={styles.bl_profileName_jp}>重住匡亮</p>
            <p className={styles.bl_profileName_en}>Shigezumi Masaaki</p>
            <p className={styles.bl_profileDiscription_jp}>
              大学では、建築学び、その後兄の影響で専門学校で、映像の勉強をしました。
              趣味は、映画鑑賞やアニメを観ることです。
              大学までは、テニスを継続的に部活や個人でコートを借りてやっていました。
              30歳になっても色々な事に挑戦したいと思ってます！
            </p>
            <div className={styles.bl_profileDiscription_en}>
              In college, I studied architecture. My specialty is video. Because of my various experiences, I would like
              to become a designer who can solve the problems of various companies through web media design.
            </div>
          </div>
        </div>
        <h2 className={styles.bl_contsubTitle}>Skill</h2>
        <ul className={styles.bl_skillList}>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>
              HTML<span>/</span>CSS
            </div>
            <img className={styles.bl_skillBar} src={Bar3} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>JavaScript</div>
            <img className={styles.bl_skillBar} src={Bar4} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>jQuery</div>
            <img className={styles.bl_skillBar} src={Bar3} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>WordPress</div>
            <img className={styles.bl_skillBar} src={Bar2} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>Illustrator</div>
            <img className={styles.bl_skillBar} src={Bar4} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>Photoshop</div>
            <img className={styles.bl_skillBar} src={Bar5} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>After Effects</div>
            <img className={styles.bl_skillBar} src={Bar3} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>Figma</div>
            <img className={styles.bl_skillBar} src={Bar3} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>Autodesk Maya</div>
            <img className={styles.bl_skillBar} src={Bar4} alt="" />
          </li>
          <li className={styles.bl_skillItem}>
            <div className={styles.bl_skillTitle}>Houdini</div>
            <img className={styles.bl_skillBar} src={Bar3} alt="" />
          </li>
        </ul>
      </div>
    </>
  )
}

export default About
