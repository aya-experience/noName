/* eslint no-bitwise: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Level from '../Level';
import LevelArea from '../LevelArea';
import LevelItem from '../LevelItem';
import Tag from '../Tag';
import Icon from '../Icon';
import Text from '../Text';
import Touchable from '../Touchable';

class TreeView extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { root } = this.props;
    const { open } = this.state;
    const hasChildren = root.children && !!root.children.length;
    const children =
      this.state.open &&
      hasChildren &&
      root.children.map(child => <TreeView root={child} key={child.id} />);
    const style = {
      paddingLeft: '4px',
    };
    return (
      <div>
        <Touchable onClick={this.toggle}>
          <Level>
            <LevelArea position="left">
              <LevelItem>
                <Text>{root.className}</Text>
              </LevelItem>
              <LevelItem>
                <Tag>
                  <Text>{root.id}</Text>
                </Tag>
              </LevelItem>
            </LevelArea>
            <LevelArea position="right">
              {hasChildren && (
                <React.Fragment>
                  <LevelItem>
                    <Tag>
                      <Text>{root.children && root.children.length}</Text>
                    </Tag>
                  </LevelItem>
                  <LevelItem>
                    <Icon name={open ? 'ion-chevron-down' : 'ion-chevron-right'} />
                  </LevelItem>
                </React.Fragment>
              )}
            </LevelArea>
          </Level>
        </Touchable>
        <div style={style}>{children}</div>
      </div>
    );
  }
}

TreeView.propTypes = {
  root: PropTypes.shape({
    id: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    props: PropTypes.object,
    children: PropTypes.array,
  }).isRequired,
};

export default TreeView;
