import * as React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Link.css'
import layout from '../layout.css'

const Link = ({ children, inline, target, href, onClick }) => (
  <a
    className={cx(styles.link, inline ? '' : layout.block)}
    href={href}
    onClick={onClick || null}
    target={target ? `_${target}` : null}
  >
    {children}
  </a>
)

Link.defaultProps = {
  inline: false,
  target: null,
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  target: PropTypes.oneOf([null, 'self', 'blank']),
}

export default Link
