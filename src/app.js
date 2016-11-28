
var a = require('./a.js');
var b = require('./b.js');
var $ = require('jquery');

$('.load_link').on('click', function() {
    
    require.ensure(['./extra'], function(require) {
        require('./extra');
        require('./b.js');

    }, 'extra');
});

console.log('This is app.js...');
