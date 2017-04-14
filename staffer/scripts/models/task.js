define(['backbone'], function(Backbone) {
    
    var task = Backbone.Model.extend({
        defaults: {
            id: 0,
            description: '',
            isComplete: false
        },
        idAttribute: 'id',
        validate: function(attrs) {
            if(attrs.description.length === 0) {
                return 'Please provide task description.';
            }
        },
        toggleComplete: function() {
            this.set('isComplete', !this.get('isComplete'));
        }
    });
    
    return task;
    
});