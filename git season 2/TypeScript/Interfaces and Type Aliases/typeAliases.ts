// TypeScript type aliase

// Type aliases are a way to create a new name for an existing type. They can be used to simplify complex types or to create more meaningful names for types.
// Type aliases can be used for primitive types, union types, intersection types, and more.

type St = string;
type Num = number;
type Bool = boolean;

// Create a object without using type alias
const point_01 = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
}

// Create a object using type alias
type Point = {
    title: string;
    xValue: number;
    yValue: number;
}

// ========================================================================
// Create a object using type alias with type alias name
type point = {
    title : St;
    xValue : Num;
    yValue : Num;
}

const pointExample: point = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
}

// ========================================================================
// Create a object using type alias with type alias name and without type alias name
type point_02 = {
    title: string;
    xValue: number;
    yValue: number;
}

const pointExample_02: point_02 = {
    title: "Point 1",
    xValue: 10,
    yValue: 20
}
// ========================================================================

console.log(point_01, pointExample, pointExample_02);
// ========================================================================

const stValue: St = "Hello World";
const numValue: Num = 10;
const boolValue: Bool = true;

// =========================================================================
//typealiase with interfaces

interface Pointerface {
    title: St,
    xValue: Num,
    yValue: Bool
}

const person_3: Pointerface = {
    title: stValue,
    xValue: numValue,
    yValue: boolValue
}

console.log(point_01);
console.log(person_3);

// Type aliases can also be used to create union types, which allow a variable to hold multiple types of values.

