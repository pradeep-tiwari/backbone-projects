define(['backbone', 'models/phonebookEntry'], function(Backbone, PhonebookEntry) {    
        
    var FormView = Backbone.View.extend({
        template: _.template($('#newEntryTemplate').html()),
        events: {
            'submit': 'addEntry',
        },
        addEntry: function(evt) {
            evt.preventDefault();
            this.model = this.prepareNewEntry();
            
            if(this.model.isValid()) {
                this.renderNewEntry();
            } else {
                this.displayValidationErrors();
            }
        },
        resetForm: function() {
            this.el.reset();
        },
        prepareNewEntry: function() {
            return new PhonebookEntry({
                firstName: this.el.firstName.value,
                lastName: this.el.lastName.value,
                phoneNumber: this.el.phoneNumber.value
            });
        },
        renderNewEntry: function() {
            $('#entriesTable tbody').append(this.template(this.model.toJSON()));
            this.cleanValidationErrors();
            this.resetForm();
        },
        displayValidationErrors: function() {
            this.cleanValidationErrors();
            
            _.each(this.model.validationError, function(obj) {
                this.$('label[for="' + obj.attr + '"] .error-message').text(obj.err);
            });
        },
        cleanValidationErrors: function() {
            this.$el.find('.error-message').text('');
        }
    });
    
    return FormView;

});