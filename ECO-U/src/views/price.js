import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './price.module.css'

const Price = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Price - Alert Vivacious Bear</title>
        <meta property="og:title" content="Price - Alert Vivacious Bear" />
      </Helmet>
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
      <span className={styles['text']}>Miles Travelled:</span>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        Calculate Savings
      </button>
      <span className={styles['text1']}>
        {' '}
        Amount Saved -
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span className={styles['text2']}>180 USD</span>
      <img
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmgvJAuCf_zWxiA0xwM1DRZt2CwC6DhOJKA&amp;usqp=CAU"
        className={styles['image']}
      />
      <span className={styles['text3']}>ECO-U</span>
    </div>
  )
}

export default Price
