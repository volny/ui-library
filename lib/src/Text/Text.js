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
    // SHOULD BE
    // align === typography[`${align}Align`],
    // italic ? typography.fontStyleItalic : typography.fontStyleNormal,
    // bold ? typography.fontWeightBold : typography.fontWeightNormal,
    // caption ? styles.caption : styles.paragraph,
    // color === colors[color]

    align === 'center' && typography.centerAlign,
    align === 'justify' && typography.justifyAlign,
    align === 'left' && typography.leftAlign,
    align === 'right' && typography.rightAlign,
    italic && typography.fontStyleItalic,
    !italic && typography.fontStyleNormal,
    bold && typography.fontWeightBold,
    !bold && typography.fontWeightNormal,
    caption ? styles.caption : styles.paragraph,
    color === 'darkGrey' && colors.darkGrey,
    color === 'white' && colors.white,
    color === 'green' && colors.green,
    color === 'darkGrey70' && colors.darkGrey70,
    color === 'darkGrey30' && colors.darkGrey30,
    color === 'darkGrey10' && colors.darkGrey10,
    color === 'white90' && colors.white90,
    color === 'white30' && colors.white30,
    color === 'green30' && colors.green30,
    color === 'green20' && colors.green20,
    color === 'yellow' && colors.yellow,
    color === 'red' && colors.red
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
