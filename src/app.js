
var $ = require('jquery');

$('.load_link').on('click', function() {
    
    require.ensure(['./extra'], function(require) {
        var extra = require('./extra');
        // use extra
    }, 'extra');
});

console.log('This is app.js...');
