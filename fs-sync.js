const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log("start");

writeFileSync(
  "./content/result.txt",
  `The result is :\n ${first} \n ${second}\n`,
  { flag: "a" }
);
console.log("Done with the task");
