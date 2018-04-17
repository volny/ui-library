import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Text.css'
import typography from '../typography.css'
import colors from '../colors.css'

const Text = ({
  children,
  align = 'left',
  caption = false,
  color = caption ? 'darkGrey70' : 'darkGrey',
  inline = false,
  italic = false,
  bold = false,
}) => {
  const cs = cx(
    caption ? styles.caption : styles.paragraph,
    typography[`${align}Align`],
    colors[color],
    bold ? typography.fontWeightBold : typography.fontWeightNormal,
    italic ? typography.fontStyleItalic : typography.fontStyleNormal
  )

  const Tag = inline ? 'span' : 'div'
  return <Tag className={cs}>{children}</Tag>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  color: PropTypes.oneOf([
    'darkGrey',
    'white',
    'green',
    'darkGrey70',
    'darkGrey30',
    'darkGrey10',
    'white90',
    'white30',
    'green30',
    'green20',
    'yellow',
    'red',
  ]),
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  caption: PropTypes.bool,
}

export default Text
