import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import Divider from '@material-ui/core/Divider/Divider';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Subtitle from '../../../components/Subtitle';
import ObjectListView from '../../../components/ObjectListView';
import HighlightVariableText from '../../../components/HighlightVariableText';

const styles = {
  card: { height: '100%', borderRadius: '0' },
};

const NetworkDetail = ({
  request: {
    method, url, headers, data, responseType,
  },
}) => (
  <Card style={styles.card}>
    <CardHeader
      title={`${method} - ${responseType}`}
      subheader={url}
    />
    {headers && headers.length > 0 && (
      <CardContent>
        <Divider />
        <Subtitle>Headers : </Subtitle>
        <Divider />
        <ObjectListView data={
          headers.reduce((acc, item) => ({ ...acc, [item[0]]: item[1] }), {})
        }
        />
      </CardContent>
    )}

    {data && (
    <CardContent>
      <Divider />
      <Subtitle>Data : </Subtitle>
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
    responseType: PropTypes.string.isRequired,
    headers: PropTypes.array,
    data: PropTypes.object,
  }).isRequired,
};

export default NetworkDetail;
