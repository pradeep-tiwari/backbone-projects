define(['backbone', 'collections/tasks'], function(Backbone, Tasks) {
    
    var staff = Backbone.Model.extend({
        defaults: {
            id: 0,
            firstName: '',
            lastName: '',
            imgUrl: '',
            description: '',
            tasks: new Tasks()
        },
        idAttribute: 'id',
        validate: function(attrs) {
            if(attrs.firstName.length === 0 || attrs.lastName.length === 0) {
                return 'Please provide first name and last name.';
            }
        }
    });
    
    return staff;
    
});