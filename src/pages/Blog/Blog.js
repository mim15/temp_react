import { ListPost } from '@/components/ListPost'
import { fetcher } from '@/utils/fetcher'
import * as React from 'react'
import useSWR from 'swr'

const Blog = () => {
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/master/entries?access_token=${process.env.REACT_APP_CDA_TOKEN}&content_type=article
`,
    fetcher
  )

  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div></div>
  }

  return (
    <>
      <ListPost data={data} error={error} />
    </>
  )
}

export default Blog
