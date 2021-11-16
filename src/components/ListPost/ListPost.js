import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListPost.module.scss'

const ListPost = ({ data }) => {
  return (
    <div className={styles.ly_cont}>
      <h1 className={styles.bl_contTitle}>Blog</h1>
      <ul className={styles.bl_cardUnit}>
        {React.Children.toArray(
          data.items.map((item) => (
            <>
              <li className={styles.bl_card}>
                <Link to={`/blog/${item.sys.id}`} className={styles.bl_card_media}>
                  <div className={styles.bl_card_body}>
                    <h2 className={styles.bl_card_ttl}>{item.fields.shortTitle}</h2>
                    <div className={styles.bl_card_txt}>
                      <h3 className={styles.bl_card_cat}>{item.fields.category}</h3>
                      <h3 className={styles.bl_card_date}>{moment(item.fields.createat).format('YYYY/MM/DD')}</h3>
                    </div>
                  </div>
                  <div className={styles.ly_media_desc}>
                    <p className={styles.bl_media_desc}>{item.fields.subTitle}</p>
                  </div>
                </Link>
              </li>
            </>
          ))
        )}
      </ul>
    </div>
  )
}

export default ListPost
