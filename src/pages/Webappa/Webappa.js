import Layout from '@/components/Layout'
import React from 'react'
import styles from './webappa.module.scss'

const WebappA = () => {
  return (
    <>
      <Layout>
        <div className={styles.ly_cont}>
          <h1 className={styles.bl_contTitle}>WebappA</h1>
        </div>
      </Layout>
    </>
  )
}

export default WebappA