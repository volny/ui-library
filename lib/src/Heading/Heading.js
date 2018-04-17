import * as React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Heading.css'
import colors from '../colors.css'

const Heading = ({ children, color, level }) => {
  const cs = cx(styles.Heading, styles[`fontSize${level}`], colors[color])

  return React.createElement(
    `h${level}`,
    {
      className: cs,
    },
    children
  )
}

Heading.defaultProps = {
  level: '1',
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
