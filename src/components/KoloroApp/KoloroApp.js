import React from 'react';
import Box from '../Box/Box.js';
import Rgb from '../Rgb/Rgb.js';
import Hsv from '../Hsv/Hsv.js';
import Hex from '../Hex/Hex.js';
import {
  Hsv2Rgb,
  Rgb2Hsv,
  Rgb2Hex,
  Hex2Rgb
} from '../../utils/ColorConverter';

import './KoloroApp.css';

var KoloroApp = React.createClass({
  getInitialState: () => ({
    rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    hsv: {
      h: 0,
      s: 0,
      v: 0
    },
    hex: '000000',
    brightness: 0
  }),
  calcBrightness: function(rgb) {
    return Math.round((Math.sqrt(0.299 * (rgb.r/255)*(rgb.r/255) + 0.587 * (rgb.g/255)*(rgb.g/255) + 0.114 * (rgb.b/255)*(rgb.b/255))) * 1000) / 1000;
  },
  handleRgbChange: function(newRgb) {
    this.setState({
      rgb: newRgb,
      hsv: Rgb2Hsv(newRgb),
      hex: Rgb2Hex(newRgb),
      brightness: this.calcBrightness(newRgb)
    });
  },
  handleHsvChange: function(newHsv) {
    this.setState({
      hsv: newHsv,
      rgb: Hsv2Rgb(newHsv),
      hex: Rgb2Hex(Hsv2Rgb(newHsv)),
      brightness: this.calcBrightness(Hsv2Rgb(newHsv))
    })
  },
  handleHexChange: function(newHex) {
    this.setState({
      hex: newHex,
      rgb: Hex2Rgb(newHex),
      hsv: Rgb2Hsv(Hex2Rgb(newHex)),
      brightness: this.calcBrightness(Hex2Rgb(newHex))
    })
  },
  render: function() {
    var opacity = 1-(Math.abs((1-this.state.brightness)-.5));
    var styles = this.state.brightness > .5 ? 'light' : 'dark';
    return (
      <Box col className='koloro-app' style={{backgroundColor: '#' + this.state.hex}}>
        <Box col style={{opacity: opacity}} className={'controls ' + styles}>
          <Box row>
            <Rgb
              r={this.state.rgb.r}
              g={this.state.rgb.g}
              b={this.state.rgb.b}
              onChange={this.handleRgbChange}
              brightness={this.state.brightness}
            />
            <Hsv
              h={this.state.hsv.h}
              s={this.state.hsv.s}
              v={this.state.hsv.v}
              onChange={this.handleHsvChange}
              brightness={this.state.brightness}
            />
          </Box>
          <Hex
            hex={this.state.hex}
            onChange={this.handleHexChange}
            brightness={this.state.brightness}
          />
        </Box>
      </Box>
    );
  }
});

export default KoloroApp;
