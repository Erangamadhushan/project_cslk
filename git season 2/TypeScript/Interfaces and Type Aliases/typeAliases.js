// TypeScript type aliase
// Create a object without using type alias
var point_01 = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
};
var pointExample = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
};
var pointExample_02 = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
};
// ========================================================================
console.log(point_01, pointExample, pointExample_02);
// ========================================================================
var stValue = "Hello World";
var numValue = 10;
var boolValue = true;
var person_3 = {
    title: stValue,
    xValue: numValue,
    yValue: boolValue
};
console.log(point_01);
console.log(person_3);
// Type aliases can also be used to create union types, which allow a variable to hold multiple types of values.
