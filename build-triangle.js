
//makes one line of stars
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

// makes the number of rows requested with the number of lines with the length of the line calculated via makeLine function, to return the whole triangle
function buildTriangle(row) {
  var triangle = "";
  for (t = 1; t <= row; t++) {
    triangle = triangle + makeLine(t);

  }

  return triangle;

}

//test
console.log(buildTriangle(10));