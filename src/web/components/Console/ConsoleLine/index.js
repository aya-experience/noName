import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Level from '../../Level';
import Icon from '../../Icon';
import LevelItem from '../../LevelItem';
import LevelArea from '../../LevelArea';
import Tag from '../../Tag';

const ConsoleLine = ({ data }) => {
  const style = {
    backgroundColor: data.type === 0 ? '#ff8989' : '#a1f28e',
    marginBottom: '1px',
  };
  return (
    <li style={style}>
      <Level>
        <LevelArea position="left">
          <LevelItem>
            <Icon name={data.type === 1 ? 'ion-social-javascript' : 'ion-iphone'} />
          </LevelItem>
          <LevelItem>
            <Text className="is-size-7">{JSON.stringify(data.args)}</Text>
          </LevelItem>
        </LevelArea>
        <LevelArea position="right">
          <LevelItem>
            <Tag className="is-radiusless" rounded color="info">
              {data.module}@{data.method}
            </Tag>
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
