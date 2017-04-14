define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    
    var staffTileView = Backbone.View.extend({
        tagName: 'div',
        className: 'col m12 t6 l3',
        template: _.template($('#staff-tile-template').html()),
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    
    return staffTileView;
    
});