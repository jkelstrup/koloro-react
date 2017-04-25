export default function Rgb2Hsv(rgb) {
  var h, s, v;
  var min, max, delta;

  var r = rgb.r / 255,
      g = rgb.g / 255,
      b = rgb.b / 255;

  min = Math.min(r,g,b);
  max = Math.max(r,g,b);

  v = max;

  delta = max - min;

  if (max === 0) {
    // Everything is 0. Let's return black.
    h = 0;
    s = 0;
    v = 0;
    return {h: h, s: s, v: v};
  } else if (min === 1) {
    // Everything is 255. Let's return white.
    h = 0;
    s = 0;
    v = 100;
    return {h: h, s: s, v: v};
  } else {
    s = delta / max;
  }

  if ( r === g && g === b ) {
    h = 0;
  } else if ( r === max ) {
    h = ( g - b ) / delta;
  } else if ( g === max ) {
    h = 2 + ( b - r ) / delta;
  } else {
    h = 4 + ( r - g ) / delta;
  }

  h *= 60;

  if ( h < 0 ) {
    h += 360;
  }

  h = Math.round(h);
  s = Math.round(s * 100);
  v = Math.round(v * 100);

  return {h: h, s: s, v: v};
}
