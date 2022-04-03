import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button}
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  button: 'Price Cal',
  rootClassName: '',
}

AppComponent.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
