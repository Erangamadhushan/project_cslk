// Building a file system structure with recursive union types
var filesystem = {
    type: "directory",
    name: "root",
    children: [
        {
            type: "directory",
            name: "src",
            children: [
            // Using the File class to create file objects
            // { type: "file", filename: "index.ts", size: 50 },
            // { type: "file", filename: "app.ts", size: 100 },
            ]
        }
    ]
};
// Function to get total size recursively
function getTotalSize(item) {
    if (item.type === "file") {
        return item.size;
    }
    else {
        return item.children.reduce(function (total, child) { return total + getTotalSize(child); }, 0);
    }
}
console.log(getTotalSize(filesystem)); // 350
