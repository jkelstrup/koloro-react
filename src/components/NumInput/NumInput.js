import React from 'react';
import Input from '../Input/Input';

var NumInput = React.createClass({
  getInitialState: function () {
    return {
      saneValue: this.props.value
    }
  },
  updateField: function (val) {
    if (!isNaN(val)) {
      if (val < this.props.min) {
        this.props.rollover
          ? val += this.props.max
          : val = this.props.min;
      } else if (val > this.props.max) {
        this.props.rollover
          ? val %= this.props.max
          : val = this.props.max;
      }
      this.setState({saneValue: val});
      this.props.onChange(val);
    }
  },
  handleBlur: function(event) {
    this.updateField(event.target.value);
  },
  handleChange: function(event) {
    this.updateField(event.target.value);
  },
  handleKeyDown: function(event) {
    const UP = 38;
    const DOWN = 40;
    var val = event.target.value * 1;
    var target = event.target;

    if (event.keyCode === UP) {
      event.preventDefault();
      event.shiftKey ? val += 10 : val++;
      this.updateField(val);
    } else if (event.keyCode === DOWN) {
      event.preventDefault();
      event.shiftKey ? val -= 10 : val--;
      this.updateField(val);
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
        onKeyDown={this.handleKeyDown}
      />
    )
  }
});

export default NumInput;
