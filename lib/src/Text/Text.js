import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, withComponent } from 'styled-components'

import { fontStyle } from '../typography.js'
import colors from '../colors.js'

const Styled = styled`
  ${fontStyle}
  ${({ color, align, italic, bold, caption }) => `
    color: ${color ? colors[color] : colors.darkGrey};
    line-height: 20px;
    text-align: ${align};
    font-style: ${italic ? 'italic' : 'normal'};
    font-weight: ${bold ? 'bold' : '300'};
    font-size: ${caption ? '12.8px' : '16px'};
    letter-spacing: ${caption ? '.5px' : 'normal'};
  `}
`

const Text = props => {
  const Tag = Styled.withComponent(props.inline ? 'span' : 'p')
  return <Tag {...props}>{props.children}</Tag>
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
