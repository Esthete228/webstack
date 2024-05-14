angular.module('Lab1')
    .service('UserService', function() {
        var users = [
            { name: 'Peter Parker', email: 'parker@example.com' },
            { name: 'Marry Jane', email: 'jane@example.com' },
            { name: 'Gordon Freeman', email: 'freeman@example.com' }
        ];

        return {
            getUsers: function() {
                return users;
            },
            addUser: function(user) {
                users.push(user);
            },
            removeUser: function(user) {
                var index = users.indexOf(user);
                if (index !== -1) {
                    users.splice(index, 1);
                }
            }
        };
    });
