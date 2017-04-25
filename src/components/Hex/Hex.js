import React from 'react';
import Box from '../Box/Box.js';
import HexInput from '../HexInput/HexInput.js';

import './Hex.css';

var Hex = React.createClass({
  handleHexChange: function(newHex) {
    this.props.onChange(newHex);
  },
  render: function() {
    return (
      <Box col className='hex-container'>
        <HexInput
          label='#'
          value={this.props.hex}
          min={0}
          max={100}
          onChange={this.handleHexChange}
        />
      </Box>
    )
  }
});

export default Hex;
