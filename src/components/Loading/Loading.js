import * as loading from '@/assets/animation/loading.json'
import React from 'react'
import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading = () => {
  return (
    <>
      <Lottie options={defaultOptions} width={500} height={500} />
    </>
  )
}

export default Loading
