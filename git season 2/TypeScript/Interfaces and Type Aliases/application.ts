// Building a file system structure with recursive union types


interface File {
  type: "file"; // Restricting to "file" since that's the only type used in the filesystem object
  filename: string;
  size: number;
}

type FileSystemItem = File | Directory;

interface Directory {
  type: "directory";
  name: string;
  children: FileSystemItem[];
}


const filesystem: Directory = {
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
function getTotalSize(item: FileSystemItem): number {
  if (item.type === "file") {
    return item.size;
  } else {
    return item.children.reduce((total, child) => total + getTotalSize(child), 0);
  }
}

console.log(getTotalSize(filesystem)); // 350