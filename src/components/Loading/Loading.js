import * as loading from '@/assets/animation/loading.json'
import { useWindowDimensions } from '@/components/hook/useWindowDimensions'
import React from 'react'
import Lottie from 'react-lottie'
import styles from './loading.module.scss'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading = () => {
  let masterwidth = null
  const width = useWindowDimensions()
  if (width > 1200) {
    masterwidth = 500
  } else {
    masterwidth = 300
  }
  return (
    <div className={styles.el_load}>
      <Lottie options={defaultOptions} width={masterwidth} height={masterwidth} />
    </div>
  )
}

export default Loading
