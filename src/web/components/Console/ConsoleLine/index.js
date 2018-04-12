import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Level from '../../Level';
import LevelItem from '../../LevelItem';
import LevelArea from '../../LevelArea';

const ConsoleLine = ({ data }) => (
  <li>
    <Level>
      <LevelArea position="left">
        <LevelItem>
          <Text>&gt;</Text>
        </LevelItem>
        <LevelItem>
          <Text>module: {data.module}</Text>
        </LevelItem>
        <LevelItem>
          <Text>method: {data.method}</Text>
        </LevelItem>
        <LevelItem>
          <Text>args:{JSON.stringify(data.args)}</Text>
        </LevelItem>
      </LevelArea>
    </Level>
  </li>
);

ConsoleLine.propTypes = {
  data: PropTypes.shape({
    method: PropTypes.string,
    module: PropTypes.string,
    args: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default ConsoleLine;
