﻿<reference types="vite-plugin-svgr/client" />

import Airplane from '../../assets/images/icons/airplane.svg?react'
import styles from './Logo.module.scss'


const Logo = () => {
  return (
    <a href='#' className={styles.logo}>
      <Airplane className={styles.airplane}/>
      <span className={styles.logo_span}>Поиск авиабилетов</span>
    </a>
  )
}

export default Logo