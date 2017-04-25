import React from 'react';
import Input from '../Input/Input';

var HexInput = React.createClass({
  updateField: function (val) {
    this.props.onChange(val);
  },
  handleBlur: function(event) {
    this.updateField(event.target.value);
  },
  handleChange: function(event) {
    var hex = event.target.value;

    if (hex.length === 6 && /[0-9A-F]{6}$/i.test(hex)) {
      this.updateField(hex);
    }

  },
  render: function() {
    return (
      <Input
        type='tel'
        label={this.props.label}
        value={this.props.value}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      />
    )
  }
});

export default HexInput;
