import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader'
import SpinnerFullScreen from '../components/SpinnerFullscreen/SpinnerFullscreen'
import { SpaceTop } from '../components/Wrapper/SpaceTop'
import BlogList from '../containers/BlogList/BlogList'
import EditorPicked from '../containers/EditorPicked/EditorPicked'
import useGetBlogList from '../hooks/useGetBlogList'

const title = 'All articles'
const num = 20

const Blog = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true)
  const [blogList, total, pageTitle] = useGetBlogList(params, setLoading)

  if (loading) {
    return <SpinnerFullScreen />
  }

  return (
    <>
      <SpaceTop />
      <PageHeader title={pageTitle} num={total} blog />
      <BlogList posts={blogList} total={total} params={params} />
      <EditorPicked />
    </>
  )
}

export default Blog
