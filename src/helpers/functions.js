function getPercentFrom255(percent) {
  var num = Number(percent); // The Number() only visualizes the type and is not needed
  var roundedString = num.toFixed(2);
  var rounded = Number(roundedString); // toFixed() returns a string (often suitable for printing already)

  return (255 / 100) * rounded * 100;
}

function getPercentToRgb({ r, g, b }) {
  return `${getPercentFrom255(r)}, ${getPercentFrom255(g)}, ${getPercentFrom255(
    b
  )}`;
}

export { getPercentToRgb };
