import { ListPost } from '@/components/ListPost'
import { fetcher } from '@/utils/fetcher'
import * as React from 'react'
import useSWR from 'swr'

const Blog = () => {
  const { data, error } = useSWR(
    'https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4',
    fetcher
  )

  if (error) {
    return <div>Ha ocurrido un error compadre</div>
  }
  if (!data) {
    return <div>Loading....</div>
  }

  return (
    <>
      <ListPost data={data} error={error} />
    </>
  )
}

export default Blog
