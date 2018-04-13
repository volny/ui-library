import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './BodyText.css';
import typography from '../typography.css';

export default function Text({
  text,
  align = 'left',
  bold = false,
  inline = false,
  italic = false,
  size = 'md',
}) {
  const cs = cx(
    styles.Text,
    align === 'center' && typography.alignCenter,
    align === 'justify' && typography.alignJustify,
    align === 'left' && typography.alignLeft,
    align === 'right' && typography.alignRight,
    italic && typography.fontStyleItalic,
    !italic && typography.fontStyleNormal,
    bold && typography.fontWeightBold,
    !bold && typography.fontWeightNormal
  );

  const Tag = inline ? 'span' : 'div';

  return <Tag className={cs}>{text}</Tag>;
}

Text.propTypes = {
  text: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
  bold: PropTypes.bool,
  inline: PropTypes.bool,
  italic: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};
