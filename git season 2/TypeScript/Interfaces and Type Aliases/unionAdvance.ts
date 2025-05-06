// Union Types with Interfaces and classes

// Union of interfaces

interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function calculateArea(shape: Shape): number {
    switch(shape.kind) {
        case "square":
            return shape.size * shape.size;
        break;
        case "rectangle":
            return shape.width * shape.height;
        break;
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        break;
    }
}

const mySquare: Square = { kind: "square", size: 10 };
const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };
const myCircle: Circle = { kind: "circle", radius: 5 };

console.log(calculateArea(mySquare)); // 100
console.log(calculateArea(myRectangle)); // 200
console.log(calculateArea(myCircle)); // 78.53981633974483

// console.log(calculateArea({ kind: "triangle", base: 10, height: 20 })); // Error: Type '{ kind: "triangle"; base: number; height: number; }' is not assignable to type 'Shape'.

// =====================================================================================================================

// Advanced Union Types

// Union with literal types
type Alignment = "left" | "right" | "center" | "justify";
type TextAlignment = Alignment | "start" | "end";

function TextAlign(text: string,alignment: TextAlignment) {
    console.log(`Text: ${text}, Alignment: ${alignment}`);
}

// ---------------------------------------------------------------------------------

console.log("TypeScript", "start"); // Text: TypeScript, Alignment: start
console.log("TypeScript", "left"); // Text: TypeScript, Alignment: left

// Extracting types from unions

type ResponseSuccess = {
    status: "success",
    code: 200
}

type ResponseError = {
    status: "error",
    code: 404
}

type ResponseValue = ResponseSuccess | ResponseError;

// Extract only the success response

type SuccessStatus = Extract<ResponseValue, { status: "success" }>;

// Extract only the error response

type ErrorStatus = Exclude<ResponseValue, { status: "success" }>;
type ErrorStatus1 = Extract<ResponseValue, { status: "error" }>;

// Excluding types from unions
type NonNullabledId = Exclude<string | number | null | undefined, null | undefined>;
// NonNullabledId is string | number

// =============================================================================================================

// Generics with Union Types

// Generic function with union type parameter
function getValue<T>(value: T[]): T | undefined {
    if (value.length > 0) {
        return value[0];
    }
    return undefined;
}

// T extends string | number means T can only be string or number or a subtype

function formatValue<T extends string | number >(value: T): string {
    if(typeof value === "string") {
        return value.trim();
    }
    return value.toString().trim();
}

console.log(formatValue("  Hello World    ")); // "Hello World"
console.log(formatValue(42)); // "42"
//console.log(formatValue(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


// =============================================================================================================
// Conditional Types with Union Types

type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>; // true;
type Result2 = IsString<number>; // false;
type Result3 = IsString<"Hello">; // true;

type Result4 = IsString<string | number>; // true | false; (distributive conditional type)

// Distributed conditional types
type Nullable<T> = T | null | undefined;
type NotNullable<T> = T extends null | undefined ? never : T;

type NullableString = Nullable<string>; // string | null | undefined
type NotNullableString = NotNullable<string | number | null | undefined>; // string


// Mapped Types with Union Types

type RequiredProperties = "id" | "name" ;
type UserProps = "id" | "name" | "age" | "email";

type User = {
    [K in UserProps]: K extends RequiredProperties ? {required: true} : {required : false};
}

// Creates:
// {
//   id: { required: true },
//   name: { required: true },
//   email: { required: false },
//   age: { required: false }
// }


// =======================================================================================================================

// Event system with union types
type MouseEventProp = {
    type: "click" | "dblclick" | "mousemove" | "mousedown" | "mouseup";
    target: HTMLElement;
    position: {
        x: number;
        y: number;
    }
}

type KeyboardEventProp = {
    type: "keydown" | "keyup" | "keypress";
    key: string;
    modifiers: { 
        ctrl: boolean;
        shift: boolean
    }
}


type UserEvent = MouseEvent  | KeyboardEvent | { type: "focus"; target: HTMLElement } | { type: "blur"; target: HTMLElement };

function handleUserEvents(event: UserEvent) {
  // Common property check
  console.log(`Event type: ${event.type}`);
  
//   // Type-specific handling
//   if (event.type === "click" || event.type === "mousedown" || event.type === "mouseup") {
//     // TypeScript knows event is MouseEvent here
//     console.log(`Mouse position: ${event.position.x | event.getModifierState.ctrl}, ${event.position.y}`);
//   } else if (event.type === "keydown" || event.type === "keyup" || event.type === "keypress") {
//     // TypeScript knows event is KeyboardEvent here
//     console.log(`Key pressed: ${event.key}`);
//     if (event.modifiers.ctrl) {
//       console.log("Ctrl was pressed");
//     }
//   }
}
