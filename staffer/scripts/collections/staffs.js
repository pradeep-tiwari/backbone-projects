define(['backbone', 'models/staff'], function(Backbone, Staff) {
    
    var staffs = Backbone.Collection.extend({
        model: Staff,
        create: function(options) {
            this.push(new Staff(options));
        }
    });
    
    return staffs;
    
});