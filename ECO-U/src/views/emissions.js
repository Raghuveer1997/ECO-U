import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './emissions.module.css'

const Emissions = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Alert Vivacious Bear</title>
        <meta property="og:title" content="Alert Vivacious Bear" />
      </Helmet>
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
      <span className={styles['text']}>Miles Travelled:</span>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        Calculate Emission
      </button>
      <span className={styles['text1']}>
        {' '}
        Reduced CO emissions -
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span className={styles['text2']}>2</span>
      <span className={styles['text3']}>15 kg</span>
      <img
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmgvJAuCf_zWxiA0xwM1DRZt2CwC6DhOJKA&amp;usqp=CAU"
        className={styles['image']}
      />
      <span className={styles['text4']}>ECO-U</span>
    </div>
  )
}

export default Emissions
