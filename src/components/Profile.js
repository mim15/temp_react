import pcprofile from '@/assets/img/profile_pc.svg'
import smprofile from '@/assets/img/profile_sm.svg'
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
