var appModule=angular.module('appModule',['ngComponentRouter']);

appModule.value('$routerRootComponent','app');

appModule.component('app',{
  template:'<header-component></header-component><ng-outlet></ng-outlet>',
  $routeConfig:[
    {path:'/',component:'homeComponent',name:'Home'},
    {path:'/about',component:'aboutComponent',name:'About'},
    {path:'/users',component:'userListComponent',name:'UserList'}
  ]
});