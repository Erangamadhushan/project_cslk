// Union type in TypeScript 
// Union types allow a variable to hold multiple types of values

// Example of union type
let value: string | number; // value can be either a string or a number
value = "Hello"; // valid
console.log(value); // Output: Hello

value = 42; // valid
//value = true; // invalid, Type 'boolean' is not assignable to type 'string | number'

console.log(value); // Output: 42


// Function with union type parameter

function displayId(id: number | string) {
    console.log(`ID : ${id}`);
}
displayId(101); // No Error
displayId("A001"); // No Error

// Union with null/undefined

let userName: string | null | undefined;

userName = "Eranga Madhushan";
userName = null;
userName = undefined;

// ===========================================================================
// Type Norrowing Examples

function printId(id: number | string) {
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}

// ===============================================================

// Using custom type predicates
interface Bird {
    fly: () => void;
    layEggs: () => void;
}

interface Fish {
    swim: () => void;
    layEggs: () => void;
}


function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}


function move(pet: Fish | Bird) {
    if(isFish(pet)) {
        // pet is now known to be Fish
        pet.swim();
    }
    else {
        pet.fly();
    }
}

// ---------------------------------------------------------------------------------
class Fish1 implements Fish {

    public constructor(protected name:string) {};

    public swim():void {
        console.log("Fish is swimming");
    }
    public layEggs() {
        console.log("Fish is laying eggs");

    }
}

// ---------------------------------------------------------------------------------
class Bird1 implements Bird {

    public constructor(protected name:string) {};

    public fly():void {
        console.log("Bird is flying");
    }
    public layEggs() {
        console.log("Bird is laying eggs");

    }
}
// ---------------------------------------------------------------------------------

const fistType1 = new Fish1("Nemo");
fistType1.swim(); // Fish is swimming
fistType1.layEggs(); // Fish is laying eggs

move(fistType1); // Fish is swimming

// --------------------------------------------------------------------------

const birdType1 = new Bird1("Parrot");
birdType1.fly();
birdType1.layEggs();

move(birdType1); // Bird is flying

// ===================================================================

