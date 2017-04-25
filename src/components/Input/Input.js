import React from 'react';
import Box from '../Box/Box';
import './Input.css';

var Input = React.createClass({
  getInitialState: function() {
    return {
      focus: false
    }
  },
  handleFocus: function() {
    this.setState({focus: true});
  },
  handleBlur: function() {
    this.setState({focus: false});
    this.props.onBlur;
  },
  render: function() {
    return (
      <Box className={'input' + (this.state.focus ? ' focus' : '')}>
        <label>{this.props.label}</label>
        <input
          type='tel'
          value={this.props.value}
          onBlur={this.handleBlur}
          onChange={this.props.onChange}
          onFocus={this.handleFocus}
          onKeyDown={this.props.onKeyDown}
        />
      </Box>
    )
  }
});

export default Input;
