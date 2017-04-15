define([], function() {
    
    var validator = {
        required: function(val) {
            return val.length === 0;
        },
        alpha: function(val) {
            return /^[a-z]+$/i.test(val);
        },
        matches: function(pattern, val) {
            var regex = new RegExp(pattern);
            return regex.test(val);
        }
    };
    
    return validator;

});

