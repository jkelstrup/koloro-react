export default function Hsv2Rgb(hsv) {
  var r, g, b,
      i, f, p, q, t;

  var h = hsv.h;
  if (h === 360) h = 0;
  var s = hsv.s / 100;
  var v = hsv.v / 100;

  if (s === 0) {

    r = Math.round(v * 255);
    g = Math.round(v * 255);
    b = Math.round(v * 255);

    return {r: r, g: g, b: b};
  }

  h /= 60;
  i = Math.floor( h );
  f = h - i;
  p = v * ( 1 - s );
  q = v * ( 1 - s * f );
  t = v * ( 1 - s * ( 1 - f ) );

  switch(i) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    default:		// case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  return {r: r, g: g, b: b};
}
