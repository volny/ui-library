import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '../colors.js'

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    onClick: PropTypes.func,
    target: PropTypes.oneOf([null, 'self', 'blank']),
  }

  handleClick(event) {
    const { href, onClick } = this.props
    if (onClick && href) {
      onClick({ event })
    }
  }

  render() {
    const { children, inline = false, target = null, href } = this.props
    const linkTarget = target ? `_${target}` : null

    const Styled = styled.a`
      text-decoration: underline;
      color: ${colors.darkGrey70};
      outline: none;
      &:hover,
      &:focus {
        color: ${colors.darkGrey};
      }
      ${inline || 'display: block;'};
    `

    return (
      <Styled href={href} onClick={this.handleClick} target={linkTarget}>
        {children}
      </Styled>
    )
  }
}

export default Link
