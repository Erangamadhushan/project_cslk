// Union type in TypeScript 
// Union types allow a variable to hold multiple types of values
// Example of union type
var value; // value can be either a string or a number
value = "Hello"; // valid
console.log(value); // Output: Hello
value = 42; // valid
//value = true; // invalid, Type 'boolean' is not assignable to type 'string | number'
console.log(value); // Output: 42
// Function with union type parameter
function displayId(id) {
    console.log("ID : ".concat(id));
}
displayId(101); // No Error
displayId("A001"); // No Error
// Union with null/undefined
var userName;
userName = "Eranga Madhushan";
userName = null;
userName = undefined;
// ===========================================================================
// Type Norrowing Examples
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        // pet is now known to be Fish
        pet.swim();
    }
    else {
        pet.fly();
    }
}
// ---------------------------------------------------------------------------------
var Fish1 = /** @class */ (function () {
    function Fish1(name) {
        this.name = name;
    }
    ;
    Fish1.prototype.swim = function () {
        console.log("Fish is swimming");
    };
    Fish1.prototype.layEggs = function () {
        console.log("Fish is laying eggs");
    };
    return Fish1;
}());
// ---------------------------------------------------------------------------------
var Bird1 = /** @class */ (function () {
    function Bird1(name) {
        this.name = name;
    }
    ;
    Bird1.prototype.fly = function () {
        console.log("Bird is flying");
    };
    Bird1.prototype.layEggs = function () {
        console.log("Bird is laying eggs");
    };
    return Bird1;
}());
// ---------------------------------------------------------------------------------
var fistType1 = new Fish1("Nemo");
fistType1.swim(); // Fish is swimming
fistType1.layEggs(); // Fish is laying eggs
move(fistType1); // Fish is swimming
// --------------------------------------------------------------------------
var birdType1 = new Bird1("Parrot");
birdType1.fly();
birdType1.layEggs();
move(birdType1); // Bird is flying
// ===================================================================
