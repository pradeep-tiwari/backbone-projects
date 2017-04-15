// RequireJS Configuration: http://requirejs.org/docs/api.html#config
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        views: '../views',
        models: '../models',
        routers: '../routers',
        components: '../components',
        collections: '../collections'
    },
    shim: { // modules that were not created by using RequireJS define function
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});


// Load app
require(['views/formView', 'views/entriesView'], function(FormView, EntriesView) {
    $(document).ready(function() {        
        new FormView({el: '#entryForm'});
        new EntriesView({el: '#entriesTable'});
    });
});