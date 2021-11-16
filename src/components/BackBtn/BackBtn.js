import React from 'react'
import { Link } from 'react-router-dom'
import styles from './backbtn.module.scss'

const BackBtn = (props) => {
  return (
    <>
      <Link to={props.backLink} className={styles.bl_cont_breadcrumb}>
        Back
      </Link>
    </>
  )
}
export default BackBtn
