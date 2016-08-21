var detailCtrl=function($http){
   var vm=this;

  vm.$routerOnActivate=function(next,previous){
    var id=next.params.id;
    $http.get('https://api.github.com/users/'+id)
    .then(function(response){
       vm.user=response.data;
    });
  };
};

appModule.controller('detailCtrl',detailCtrl);

appModule.component('detailComponent',{
  templateUrl:'app/templates/detail.html',
  controller:'detailCtrl',
  controllerAs:'vm'
});