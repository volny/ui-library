import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Text from '../Text/Text'
import styles from './Button.css'
// import colors from '../colors.css'

const Button = ({ disabled, inline, onClick, text, type }) => {
  const cs = cx(styles.button, {
    [styles.disabled]: disabled,
    [styles.enabled]: !disabled,
    [styles.inline]: inline,
    [styles.block]: !inline,
  })

  return (
    <button className={cs} disabled={disabled} onClick={onClick || null} type={type}>
      <Text>{text.toUpperCase()}</Text>
    </button>
  )
}

Button.defaultProps = {
  inline: false,
  disabled: false,
  type: 'button',
}

Button.propTypes = {
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default Button
