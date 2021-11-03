import pcprofile from '@/assets/img/pc_profile.png'
import smprofile from '@/assets/img/sm_profile.png'
import styles from '@/styles/profile.module.scss'
import React from 'react'
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'

const Profile = () => {
  return (
    <>
      <ResponsiveImage alt="Shige photo" className={styles.bl_Profile_imgWrapper}>
        <ResponsiveImageSize default minWidth={0} path={smprofile} />
        <ResponsiveImageSize minWidth={768} path={pcprofile} />
      </ResponsiveImage>
    </>
  )
}

export default Profile
