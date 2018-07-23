import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Divider from '@material-ui/core/Divider/Divider';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Subtitle from '../../../components/Subtitle';
import ObjectListView from '../../../components/ObjectListView';
import Text from '../../../components/Text';
import HighlightVariableText from '../../../components/HighlightVariableText';

const styles = {
  card: { height: '100%', borderRadius: '0' },
};

const NetworkDetail = ({
  request: {
    method, url, headers, data,
  },
}) => (
  <Card style={styles.card}>
    <CardHeader
      title={method}
      subheader={url}
    />
    <CardContent>
      <Divider />
      <Subtitle>Headers : </Subtitle>
      <Divider />
      {headers ? <ObjectListView data={headers} /> : <Text>No Props Available</Text>}
    </CardContent>

    {data && (
    <CardContent>
      <Divider />
      <Subtitle>Body : </Subtitle>
      <Divider />
      <HighlightVariableText value={data} />
    </CardContent>
    )}
  </Card>
);


NetworkDetail.propTypes = {
  request: PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    headers: PropTypes.object,
    data: PropTypes.object,
  }).isRequired,
};

export default NetworkDetail;
