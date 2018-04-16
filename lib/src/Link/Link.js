import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../colors.js'

const Link = ({ children, inline = false, target = null, href, onClick }) => {
  const Styled = styled.a`
    text-decoration: underline;
    color: ${colors.darkGrey70};
    outline: none;
    &:hover,
    &:focus {
      color: ${colors.darkGrey};
    }
    ${inline || 'display: block;'};
    cursor: pointer;
  `

  return (
    <Styled href={href} onClick={onClick} target={target ? `_${target}` : null}>
      {children}
    </Styled>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([null, 'self', 'blank']),
}

export default Link
