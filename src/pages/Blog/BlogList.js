import Button from '@/assets/img/button.svg'
import Layout from '@/components/Layout'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.scss'

const Blog = () => {
  return (
    <>
      <Layout>
        <div className={styles.ly_cont}>
          <h1 className={styles.bl_contTitle}>Blog</h1>
          <div className={styles.cards}>
            <div className={styles.ly_media_body}>
              <div className={styles.bl_media_body}>
                <h2 className={styles.bl_media_ttl}>レストランのサイトデザイン</h2>

                <div className={styles.ly_media_txt}>
                  <h3 className={styles.bl_media_cat}>How To</h3>
                  <h3 className={styles.bl_media_day}>2021/12/01</h3>
                </div>
              </div>
              <div className={styles.ly_media_Button}>
                <p className={styles.bl_media_date}>工夫やどう作ったのかを文章に起して忘れないようにする為のブログ</p>
                <Link to="portofolio/blog_v01" className={styles.bl_Button}>
                  <img src={Button} alt="Button" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blog
