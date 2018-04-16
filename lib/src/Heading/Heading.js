import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, withComponent } from 'styled-components'

import { fontStyle } from '../typography.js'
import colors from '../colors.js'

const mapLevelToFontSize = level => {
  const map = {
    '1': '39',
    '2': '31.2',
    '3': '20',
    '4': '16',
    '5': '12.8',
  }

  return map[level]
}

const Heading = ({ children, color = 'darkGrey ', level = 1 }) => {
  const Styled = styled.h1`
    ${fontStyle}
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 300;
    color: ${color ? colors[color] : colors.darkGrey};
    font-size: ${mapLevelToFontSize(level)}px;
    line-height: ${mapLevelToFontSize(level)}px;
  `

  const Level = Styled.withComponent(`h${level}`)

  return <Level>{children}</Level>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
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
  level: PropTypes.string,
}

export default Heading
