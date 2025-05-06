// Union Types with Interfaces and classes
function calculateArea(shape) {
    switch (shape.kind) {
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
var mySquare = { kind: "square", size: 10 };
var myRectangle = { kind: "rectangle", width: 10, height: 20 };
var myCircle = { kind: "circle", radius: 5 };
console.log(calculateArea(mySquare)); // 100
console.log(calculateArea(myRectangle)); // 200
console.log(calculateArea(myCircle)); // 78.53981633974483
function TextAlign(text, alignment) {
    console.log("Text: ".concat(text, ", Alignment: ").concat(alignment));
}
// ---------------------------------------------------------------------------------
console.log("TypeScript", "start"); // Text: TypeScript, Alignment: start
console.log("TypeScript", "left"); // Text: TypeScript, Alignment: left
// NonNullabledId is string | number
// =============================================================================================================
// Generics with Union Types
// Generic function with union type parameter
function getValue(value) {
    if (value.length > 0) {
        return value[0];
    }
    return undefined;
}
// T extends string | number means T can only be string or number or a subtype
function formatValue(value) {
    if (typeof value === "string") {
        return value.trim();
    }
    return value.toString().trim();
}
console.log(formatValue("  Hello World    ")); // "Hello World"
console.log(formatValue(42)); // "42"
function handleUserEvents(event) {
    // Common property check
    console.log("Event type: ".concat(event.type));
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
