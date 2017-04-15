define(['components/validationService', 'backbone'], function(validator, Backbone) {
    
    var PhonebookEntry = Backbone.Model.extend({
        validate: function(attrs) {
            var errors = [];
            var err = '';
            var that = this;
            
            _.each(_.keys(attrs), function(key) {
                err = that['validate' + key[0].toUpperCase() + key.slice(1)](attrs[key]);
                
                if(err) {
                    errors.push({attr: key, err: err});
                }
            });
            
            return errors.length ? errors : null;            
        },
        validateFirstName: function(val) {
            if(validator.required(val)) {
                return 'Required';
            } else if(!validator.alpha(val)) {
                return 'Invalid';
            }
        },
        validateLastName: function(val) {
            if(validator.required(val)) {
                return 'Required';
            } else if(!validator.alpha(val)) {
                return 'Invalid';
            }
        },
        validatePhoneNumber: function(val) {
            if(validator.required(val)) {
                return 'Required';
            } else if(!validator.matches('^[0-9]{3}-[0-9]{3}-[0-9]{4}$', val)) {
                return 'Invalid';
            }
        }
        
    });
    
    return PhonebookEntry;
    
});

