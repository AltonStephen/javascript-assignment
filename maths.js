let arr = [[2, 4, 5, 6], [8, 3, 1, 3], [7, 9, 4, 2], [5, 8, 3, 6]];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], `(equals arr[${i}])`);
}
// [2, 4, 5, 6] (equals arr[0])
// [8, 3, 1, 3] (equals arr[1])
// [7, 9, 4, 2] (equals arr[2])
// [5, 8, 3, 6] (equals arr[3])

// Area of a triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
//circumference and surface area
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));