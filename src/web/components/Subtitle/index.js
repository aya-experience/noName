import React from 'react';
import PropTypes from 'prop-types';
import Typographie from '../Typography';

export default function Subtitle(props) {
  const raisedLevel = props.level + 1;
  const tag = `h${raisedLevel}`;
  return (
    <Typographie tag={tag} className="subtitle" {...props} size={raisedLevel}>
      {props.children}
    </Typographie>
  );
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

Subtitle.defaultProps = {
  level: 1,
};
