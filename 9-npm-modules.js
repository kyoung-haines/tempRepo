// Using imported library
const _ = require('lodash');

const items = [[1, 2, 3], [4, 5, 6], 7];

const newItemsArray = _.flattenDeep(items);
console.log(newItemsArray);