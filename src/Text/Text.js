// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import typography from '../typography.css';
import colors from '../Colors.css';

const Text = ({
  children,
  align = 'left',
  color = 'darkGrey',
  inline = false,
  italic = false,
  bold = false,
  caption = false,
}) => {
  const Tag = inline ? 'span' : 'div';
  return <Tag>{children}</Tag>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  color: PropTypes.oneOf([
    'darkGrey'
    'white'
    'green'
    'darkGrey70'
    'darkGrey30'
    'darkGrey10'
    'white90'
    'white30'
    'green30'
    'green20'
    'yellow'
    'red',
  ]),
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  caption: PropTypes.bool,
};

export default Text;
