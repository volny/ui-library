import * as React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Link.css'
import layout from '../layout.css'

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
    const rel = target === 'blank' ? 'noopener noreferrer' : null
    const linkTarget = target ? `_${target}` : null

    return (
      <a
        className={cx(styles.link, inline ? '' : layout.block)}
        href={href}
        onClick={this.handleClick}
        rel={rel}
        target={linkTarget}
      >
        {children}
      </a>
    )
  }
}

export default Link
