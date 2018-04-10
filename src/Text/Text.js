import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import typography from '../typography.css';

const Text = ({
  children,
  align = 'left',
  bold = false,
  inline = false,
  italic = false,
  size = 'md',
}) => {
  const Tag = inline ? 'span' : 'div';
  return <Tag>{children}</Tag>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Text;
