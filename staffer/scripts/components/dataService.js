define(['collections/staffs', 'collections/tasks'], function(Staffs, Tasks) {
    
    function setMaxStaffId(staffs) {
        app.staffId = _.max(staffs, function(staff) {
            return staff.id;
        }).id;
    }
    
    function setMaxTaskId(tasks) {
        app.taskId = _.max(tasks, function(task) {
            return task.id;
        }).id;
    }
    
    function getStaffsFromCache() {
        var staffsString = localStorage.getItem('staffs');
        
        if(!staffsString) {
            generateInitialData();
            staffsString = localStorage.getItem('staffs');
        }
        
        return JSON.parse(staffsString);
    }
    
    function generateInitialData() {
        var staffs = [
            {
                id: 1,
                firstName: 'Bob',
                lastName: 'Williams',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Senior Software Engineer',
                tasks: [
                    {
                        id: 1,
                        description: '',
                        isComplete: true
                    },
                    {
                        id: 2,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 2,
                firstName: 'John',
                lastName: 'Yates',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 3,
                firstName: 'Tommy',
                lastName: 'Robins',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 4,
                firstName: 'Anthony',
                lastName: 'Dsouza',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 5,
                firstName: 'Rocky',
                lastName: 'Balboa',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 6,
                firstName: 'Doremon',
                lastName: 'Puff',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 7,
                firstName: 'Ron',
                lastName: 'Colemon',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            },
            {
                id: 8,
                firstName: 'Jasper',
                lastName: 'Collins',
                imgUrl: 'http://placehold.it/350x350',
                description: 'Linux Server Administrator',
                tasks: [
                    {
                        id: 3,
                        description: '',
                        isComplete: false
                    }
                ]
                
            }
        ];
        
        localStorage.setItem('staffs', JSON.stringify(staffs));
    }
    
    var dataService = {
        getData: function() {
            var staffs = getStaffsFromCache();
            var tasks = [];
            
            _.each(staffs, function(staff) {
                _.each(staff.tasks, function(task) {
                    tasks.push(task);
                });
                
                staff.tasks = new Tasks(staff.tasks);
            });
            
            app.staffs = new Staffs(staffs);
            setMaxStaffId(staffs);
            setMaxTaskId(tasks);
        },
        setData: function(staffs) {
            localStorage.setItem('staffs', JSON.stringify(staffs.toJSON()));
        }
    };
    
    return dataService;

});