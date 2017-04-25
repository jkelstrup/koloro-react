import React from 'react';
import Box from '../Box/Box.js';
import NumInput from '../NumInput/NumInput';

var Hsv = React.createClass({
  handleHueChange: function(newValue) {
    this.props.onChange({
      h: newValue,
      s: this.props.s,
      v: this.props.v
    })
  },
  handleSaturationChange: function(newValue) {
    this.props.onChange({
      h: this.props.h,
      s: newValue,
      v: this.props.v
    })
  },
  handleValueChange: function(newValue) {
    this.props.onChange({
      h: this.props.h,
      s: this.props.s,
      v: newValue
    })
  },
  render: function() {
    // var opacity = 1-(Math.abs((1-this.props.brightness)-.5));
    // var styles = this.props.brightness > .5 ? 'light' : 'dark';
    return (
      // <Box col style={{opacity: opacity}} className={styles}>
      <Box col>
        <NumInput
          label='H'
          value={this.props.h}
          min={0}
          max={360}
          rollover
          onChange={this.handleHueChange}
        />
        <NumInput
          label='S'
          value={this.props.s}
          min={0}
          max={100}
          onChange={this.handleSaturationChange}
        />
        <NumInput
          label='V'
          value={this.props.v}
          min={0}
          max={100}
          onChange={this.handleValueChange}
        />
      </Box>
    )
  }
});

export default Hsv;
