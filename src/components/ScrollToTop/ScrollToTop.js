import ScrollTop from '@/assets/img/ScrollTop.svg'
import React, { useEffect, useState } from 'react'
import styles from './scrolltotop.module.scss'

const ScrollToTop = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none',
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s',
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <button className={styles.el_scrollTop} style={style} onClick={returnTop}>
      <img className={styles.el_btn} src={ScrollTop} alt="scroll to top" />
    </button>
  )
}

export default ScrollToTop
