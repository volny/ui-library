import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../colors.js'

const Styled = styled.a`
  ${({ inline }) => `
    text-decoration: underline;
    color: ${colors.darkGrey70};
    outline: none;
    &:hover,
    &:focus {
      color: ${colors.darkGrey};
    }
    ${inline || 'display: block;'};
    cursor: pointer;
  `}
`
const Link = ({ children, inline, target, href, onClick }) => (
  <Styled
    href={href}
    onClick={onClick ? onClick : null}
    target={target ? `_${target}` : null}
    inline={inline}
  >
    {children}
  </Styled>
)

Link.defaultProps = {
  inline: false,
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([null, 'self', 'blank']),
}

export default Link
