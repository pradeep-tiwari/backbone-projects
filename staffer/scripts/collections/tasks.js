define(['backbone', 'models/task'], function(Backbone, Task) {
    
    var tasks = Backbone.Collection.extend({
        model: Task
    });
    
    return tasks;
    
});