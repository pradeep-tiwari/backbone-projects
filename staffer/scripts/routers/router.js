define(
    ['jquery', 'underscore', 'backbone', 'components/appController'],
    function($, _, Backbone, appController) {
        var router = Backbone.Router.extend({
            routes: {
                '': 'home',
                'details/:id': 'details',
                'create': 'create'
            },
            start: function() {
                Backbone.history.start();
            },
            initialize: function() {
                for(var route in this.routes) {
                    this.route(
                        route,
                        this.routes[route],
                        $.proxy(appController[this.routes[route]], appController)
                    );
                }
            }
        });
        
        return new router();
    }
);