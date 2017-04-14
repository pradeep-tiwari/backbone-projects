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


// Sets namespace
var app = app || {};

// Load dataService module
require(['routers/router', 'components/dataService'], function(router, dataService) {
    $(document).ready(function() {
        dataService.getData();
        router.start();
    });
});