import Layout from '@/components/Layout'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const ListPost = ({ data }) => {
  return (
    <Layout>
      <section>
        {React.Children.toArray(
          data.items.map((item) => (
            <Link to={`/blog/${item.sys.id}`}>
              <h2>{item.fields.title}</h2>
              <p>{moment(item.fields.creationDate).format('ll')}</p>
            </Link>
          ))
        )}
      </section>
    </Layout>
  )
}

export default ListPost
