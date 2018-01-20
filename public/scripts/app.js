'use strict';

console.log('app.js is running');

//jsx- javascript XMLd

var template = React.createElement(
  'p',
  null,
  'This is a jsx from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
