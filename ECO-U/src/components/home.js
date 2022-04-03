import React from 'react'
import { Link } from 'react-router-dom'

import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['text']}>Let&apos;s GO!!</span>
      <span className={styles['text1']}>Hello Sandy!!</span>
      <Link
        to="/price"
        className={` ${styles['navlink']} ${projectStyles['button']} `}
      >
        Savings -&gt;
      </Link>
      <Link
        to="/emissions"
        className={` ${styles['navlink1']} ${projectStyles['button']} `}
      >
        Emissions -&gt;
      </Link>
      <span className={styles['text2']}>
        <span className={styles['text3']}>ECO-U</span>
      </span>
    </div>
  )
}