
var $ = require('../libs/jquery');
function hello (){
  console.log('hola desde modules');
  console.log($('.content'))
}

module.exports = hello;