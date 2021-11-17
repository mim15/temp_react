import { BackBtn } from '@/components/BackBtn'
import { fetcher } from '@/utils/fetcher'
import moment from 'moment'
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import styles from './blogsingle.module.scss'

const md = require('markdown-it')()

const BlogSongle = () => {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/master/entries/${
      useParams().id
    }?access_token=${process.env.REACT_APP_CDA_TOKEN}`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className={styles.ly_cont}>
        <div className={styles.bl_contTitle}>Blog</div>
        <BackBtn backLink="/blog" />
        <h1 className={styles.bl_contsubTitle}>{data.fields.title}</h1>
        <div className={styles.bl_cont_date}>{moment(data.fields.createat).format('YYYY/MM/DD')}</div>
        <div className={styles.bl_contBody} dangerouslySetInnerHTML={{ __html: md.render(data.fields.content) }}></div>
      </div>
    </>
  )
}

export default BlogSongle
