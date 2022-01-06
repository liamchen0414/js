function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
/*
new Color(255, 40, 100); we need to use the keyword new to create object, otherwise <i>this<i> will refer to the global window
*/

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};
