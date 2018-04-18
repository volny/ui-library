import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Text from '../Text/Text'
import styles from './Button.css'
// import colors from '../colors.css'

const Button = ({ active, disabled, inline, onClick, text, type }) => {
  const cs = cx(styles.button, {
    [styles.inline]: inline,
    [styles.block]: !inline,
    [styles.active]: active,
  })

  return (
    <Text>
      <button className={cs} disabled={disabled} onClick={onClick || null} type={type}>
        {text}
      </button>
    </Text>
  )
}

Button.defaultProps = {
  inline: false,
  disabled: false,
  type: 'button',
}

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default Button
