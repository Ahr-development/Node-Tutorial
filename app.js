const lodash = require('lodash')

const array = [1,2,3,4,5,[6,7,8,[9,10,[11]]]]

console.log(lodash.flattenDeep(array)); 

