function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
  		return 'Nieprawidłowe dane';
	}
	else {
		return a * h / 2;
	}
}
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 7);
var triangle3Area = getTriangleArea(7, 12);
console.log(triangle1Area, triangle2Area, triangle3Area);