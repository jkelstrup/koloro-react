export default function Rgb2Hex(rgb) {
  var r = rgb.r.toString(16),
      g = rgb.g.toString(16),
      b = rgb.b.toString(16);

  function leadingZero(x) {
    if (x.length === 1) {
      return "0" + x;
    } else {
      return x;
    }
  }

  var hexCode = leadingZero(r) + leadingZero(g) + leadingZero(b);

  return hexCode;
}
