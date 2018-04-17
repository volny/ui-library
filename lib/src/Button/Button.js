import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Text } from '../Text/Text'
import styles from './Button.css'
import typography from '../typography.css'
import colors from '../colors.css'

const Button = ({disabled, inline, onClick, text, type}) => {
  const cs = classnames(styles.button, {
    [styles.disabled]: disabled,
    [styles.enabled]: !disabled,
    [styles.inline]: inline,
    [styles.block]: !inline,
  });

  return (
    <button
      className={cs}
      disabled={disabled}
      name={name}
      onClick={onClick || null}
      type={type}
    >
      <Text
        align="center"
        bold
        color={disabled ? 'darkGrey30' : colors['darkGrey']}
        size={size}
      >
        {text}
      </Text>
    </button>
  );
}

Button.defaultProps = {
  inline: false,
  disabled: false,
}

Button.propTypes = {
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

export default Button
