//Modules
//CommonJS -> Every Files is Module (by default)

//Modules - Encapsulated Code (only share minimum)
const names = require('./4-name')
const utils = require('./5-utils')
const data = require('./6-two-Export')
require('./7-mind-grenade')

utils(data.items[0])