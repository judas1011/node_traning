const _ = require("lodash");
const item = [1, [2, 3, [3, 5, [7]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);
