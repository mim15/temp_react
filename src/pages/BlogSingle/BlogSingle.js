import Layout from '@/components/Layout'
import { fetcher } from '@/utils/fetcher'
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import styles from './blogsingle.module.scss'

const md = require('markdown-it')()

const BlogSongle = () => {
  const params = useParams()
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/master/entries/${params.id}?access_token=${process.env.REACT_APP_CDA_TOKEN}`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Layout>
        <div className={styles.ly_cont}>
          <h2>{data.fields.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: md.render(data.fields.description) }}></div>
        </div>
      </Layout>
    </>
  )
}

export default BlogSongle
