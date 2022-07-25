const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail.js');
const getNotes  = require('./notes.js')

console.log(getNotes());
console.log(validator.isURL('rkgmail.com'))