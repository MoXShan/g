/**
 * @fileOverview ellipse math
 * @author dxq613@gmail.com
 * @author hankaiai@126.com
 * @ignore
 */
module.exports = {
  xAt: function(psi, rx, ry, cx, t) {
    return rx * Math.cos(psi) * Math.cos(t) - ry * Math.sin(psi) * Math.sin(t) + cx;
  },
  yAt: function(psi, rx, ry, cy, t) {
    return rx * Math.sin(psi) * Math.cos(t) + ry * Math.cos(psi) * Math.sin(t) + cy;
  },
  xExtrema: function(psi, rx, ry) {
    return Math.atan((-ry / rx) * Math.tan(psi));
  },
  yExtrema: function(psi, rx, ry) {
    return Math.atan((ry / (rx * Math.tan(psi))));
  }
};
