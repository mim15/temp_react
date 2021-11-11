import { createClient } from 'contentful-management'
import { useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import AboutWriterCard2 from '../components/AboutWriterCard2/AboutWriterCard2'
import BlogBottom from '../components/BlogBottom/BlogBottom'
import BlogHeader from '../components/BlogHeader/BlogHeader'
import CommentSection from '../components/CommentSection/CommentSection'
import SpinnerFullscreen from '../components/SpinnerFullscreen/SpinnerFullscreen'
import Container from '../components/Wrapper/Container'
import { ReadingSection } from '../components/Wrapper/ReadingSection'
import { SpaceTop } from '../components/Wrapper/SpaceTop'
import BlogContent from '../containers/BlogContent/BlogContent'
import EditorPicked from '../containers/EditorPicked/EditorPicked'
import client from '../contentful/createClient'
import { scrollToTop } from '../util/scrollToTop'

const a = ['Less Than 5 Minutes', 'Inspiration', 'Easy Read', 'Simple', 'English', 'Modern', 'Superb']

const genTags = () => {
  // Salin array
  const b = [...a]
  // Randomize berapa tags yang harus diambil
  const r = Math.floor(Math.random() * b.length)

  const choosenTags = []
  for (let i = 0; i < r; i += 1) {
    // Randomize nomor berapa yang harus diambil
    const r2 = Math.floor(Math.random() * b.length)
    const choose = b.splice(r2, 1)[0]
    choosenTags.push(choose)
  }

  if (choosenTags.length === 0) {
    choosenTags.push(b[r])
  }

  return choosenTags
}

const c = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_KEY,
})

const BlockSingle = () => {
  const history = useHistory()
  const { slug } = useParams()
  const [blog, setBlog] = useState()
  const mountedRef = useRef(true)
  const [loading, setLoading] = useState(false)

  const getBlog = async () => {
    setLoading(true)
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      })

      const blog = res.items[0]
      if (blog) {
        setBlog(blog)
        setLoading(false)
      } else {
        history.push('/404')
      }

      scrollToTop()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlog()
    return () => {
      mountedRef.current = false
    }
  }, [slug])

  if (loading || !blog) return <SpinnerFullscreen />

  return (
    <>
      <SpaceTop />
      <Container>
        <ReadingSection>
          <BlogHeader blog={blog} />
          <BlogContent blog={blog} />
          <hr />
          <BlogBottom blog={blog} />
          <AboutWriterCard2 />
          <CommentSection blog={blog} />
        </ReadingSection>
      </Container>
      <EditorPicked />
    </>
  )
}

export default BlockSingle
