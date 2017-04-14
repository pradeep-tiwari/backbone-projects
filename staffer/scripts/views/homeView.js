define(
    ['jquery', 'underscore', 'backbone', 'views/staffTileView', 'routers/router'],
    function($, _, Backbone, staffTileView, router) {    
        var homeView = Backbone.View.extend({
            tagName: 'div',
            className: 'row',
            initialize: function() {
                this.collection = app.staffs;
            },
            render: function() {
                this.$el.empty();
                //this.$el.append(this.addCreateStaffButton());
                this.collection.each(function(item) {
                    this.addOne(item);
                }, this);
                
                return this;
            },
            addOne: function(staff) {
                var view = new staffTileView({model: staff});
                this.$el.append(view.render().el);
            },
            addCreateStaffButton: function() {
                var btn = document.createElement('input');
                btn.type = 'button';
                btn.value = 'Create Staff';
                btn.className = 'btn btn-blue';
                btn.addEventListener('click', function() {
                    router.navigate('#/create', {trigger: true});
                });
                
                return btn;
            }
        });
        
        return homeView;
    }
);