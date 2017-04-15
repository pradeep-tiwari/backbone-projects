define(
    ['backbone', 'components/fakeDataService', 'views/formView'],
    function(Backbone, fakeData, FormView) {

        var EntriesView = Backbone.View.extend({
            template: _.template($('#newEntryTemplate').html()),
            tagName: 'tr',
            events: {
                'click .removeEntry': 'removeEntry'
            },
            initialize: function() {
                var that = this;
                
                _.each(fakeData, function(data) {
                    $('#entriesTable tbody').append(that.template(data));
                });
            },
            removeEntry: function(evt) {
                evt.target.closest('tr').remove();
            }
        });
    
        return EntriesView;
    
    }
);