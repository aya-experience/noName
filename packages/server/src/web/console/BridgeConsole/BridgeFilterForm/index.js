import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export const format = (onChange, name) => value => onChange({ [name]: value.target.value });

const form = {
  display: 'flex',
};


const BridgeFilterForm = ({ module, method, onChange }) => (
  <div style={form}>
    <FormControl fullWidth >
      <TextField placeholder="Module filter" value={module} onChange={format(onChange, 'module')} />
    </FormControl>
    <FormControl fullWidth >
      <TextField placeholder="Method filter" value={method} onChange={format(onChange, 'method')} />
    </FormControl>
  </div>
);


BridgeFilterForm.propTypes = {
  module: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BridgeFilterForm;
