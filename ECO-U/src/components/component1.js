import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

Component1.defaultProps = {
  button: 'Co2 Emm cal',
  rootClassName: '',
}

Component1.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component1
