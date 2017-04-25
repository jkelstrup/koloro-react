export default function Hex2Rgb(hex) {
  var r = parseInt(hex.substring(0,2), 16),
      g = parseInt(hex.substring(2,4), 16),
      b = parseInt(hex.substring(4), 16);

  return {r: r, g: g, b: b};
}
