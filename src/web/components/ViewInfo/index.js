import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Subtitle from '../Subtitle/index';
import ObjectListView from '../ObjectListView/index';

const styles = {
  card: { height: '100%', borderRadius: '0' },
};
const ViewInfo = ({ value: { id, className, props } }) => (
  <Card style={styles.card}>
    <CardHeader
      title={className}
      subheader={`id : ${id}`}
    />
    <Divider />
    <CardContent>
      <Subtitle>Props : </Subtitle>
      <ObjectListView data={props} />
    </CardContent>
  </Card>
);

ViewInfo.propTypes = {
  value: PropTypes.shape({}).isRequired,
};

export default ViewInfo;
