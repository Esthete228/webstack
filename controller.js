angular.module('Lab1', [])
    .controller('Controller', function($scope, UserService) {
        $scope.users = UserService.getUsers();
        $scope.search = '';

        $scope.filterUsers = function() {
            return $scope.users.filter(function(user) {
                return user.name.toLowerCase().indexOf($scope.search.toLowerCase()) !== -1;
            });
        };

        $scope.addUser = function(name, email) {
            if (name && email) {
                UserService.addUser({ name: name, email: email });
                $scope.users = UserService.getUsers();
                $scope.name = '';
                $scope.email = '';
            } else {
                alert('Please enter both name and email!');
            }
        };

        $scope.removeUser = function(user) {
            UserService.removeUser(user);
            $scope.users = UserService.getUsers();
        };
    });
