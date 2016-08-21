var userListCtrl = function ($http) {
    var vm = this;

    vm.$onInit = function () {
        $http.get('https://api.github.com/users')
            .then(function (response) {
                vm.users = response.data;
            });
    }
};


appModule.controller('userListCtrl', userListCtrl);


appModule.component('userListComponent', {
    templateUrl: 'app/templates/userList.html',
    controller: 'userListCtrl',
    controllerAs: 'vm'
});