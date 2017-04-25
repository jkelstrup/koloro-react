import React from 'react';
import Box from '../Box/Box.js';
import NumInput from '../NumInput/NumInput';

var Rgb = React.createClass({
  handleRedChange: function(newValue) {
    this.props.onChange({
      r: newValue * 1,
      g: this.props.g,
      b: this.props.b,
    })
  },
  handleGreenChange: function(newValue) {
    this.props.onChange({
      r: this.props.r,
      g: newValue * 1,
      b: this.props.b,
    })
  },
  handleBlueChange: function(newValue) {
    this.props.onChange({
      r: this.props.r,
      g: this.props.g,
      b: newValue * 1,
    })
  },
  render: function() {
    // var opacity = 1-(Math.abs((1-this.props.brightness)-.5));
    // var styles = this.props.brightness > .5 ? 'light' : 'dark';
    return (
      // <Box col style={{opacity: opacity}} className={styles}>
      <Box col>
        <NumInput
          label='R'
          value={this.props.r}
          min={0}
          max={255}
          onChange={this.handleRedChange}
        />
        <NumInput
          label='G'
          value={this.props.g}
          min={0}
          max={255}
          onChange={this.handleGreenChange}
        />
        <NumInput
          label='B'
          value={this.props.b}
          min={0}
          max={255}
          onChange={this.handleBlueChange}
        />
      </Box>
    )
  }
});

export default Rgb;
