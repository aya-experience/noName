import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Level from '../../Level';
import Icon from '../../Icon';
import LevelItem from '../../LevelItem';
import LevelArea from '../../LevelArea';

const ConsoleLine = ({ data }) => {
  const style = {
    backgroundColor: data.type === 0 ? '#ff8989' : '#a1f28e',
  };
  return (
    <li style={style}>
      <Level>
        <LevelArea position="left">
          <LevelItem>
            <Icon name={data.type === 1 ? 'ion-social-javascript' : 'ion-iphone'} />
          </LevelItem>
          <LevelItem>
            <Text>{JSON.stringify(data.args)}</Text>
          </LevelItem>
        </LevelArea>
        <LevelArea position="right">
          <LevelItem>
            <Text>
              {data.module}@{data.method}
            </Text>
          </LevelItem>
        </LevelArea>
      </Level>
    </li>
  );
};

ConsoleLine.propTypes = {
  data: PropTypes.shape({
    method: PropTypes.string,
    module: PropTypes.string,
    args: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default ConsoleLine;
