define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    
    var AppController = {
        currentView: null,
        home: function() {
            var that = this;
            
            require(['views/homeView'], function(homeView) {
                var view = new homeView();
                that.renderView.call(that, view);
            });
        },
        details: function(id) {
            var that = this;
            
            require(['views/details'], function(detailsView) {
                var view = new detailsView({model: app.staffs.get(id)});
                that.renderView.call(that, view);
            });
        },
        create: function() {
            var that = this;
            
            require(['views/create'], function(createView) {
                var view = new createView();
                that.renderView.call(that, view);
            });
        },
        renderView: function(view) {
            // remove current view if any
            this.currentView && this.currentView.remove();
            $('#spa-shell').html(view.render().el);
            this.currentView = view;
        }
    };
    
    return AppController;

});