var app = angular.module('starkapp',[
    'ngRoute',
    'controllers',
    'services'
  ])
  
  // 注入子模块
  angular.module('controllers',[]);
  angular.module('services',[]);
  