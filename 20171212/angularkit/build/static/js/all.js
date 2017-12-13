var app = angular.module('starkapp',[
  'ngRoute',
  'controllers',
  'services'
])

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);

app.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<h1>今天好冷哦！{{msg}}</h1>',
      controller: function ($scope) {
        $scope.msg = "是捏，就是好冷！";
      }
    })
      .when('/stark', {
        template: '<h1>this is stark page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/starkwang', {
        template: '<h1>this is starkwang page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，嘿嘿！";
        }
      })
      .when('/shudong', {
        templateUrl: '/view/tpl.html',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/movieList', {
        templateUrl: '/view/movieList.html',
        controller: 'MovieController'
      });
      $locationProvider.html5Mode(true);
    // 需要在localhost下面运行
  }])
angular.module('controllers').controller('MovieController',[
  '$scope',
  '$route',
  '$routeParams',
  'MovieService',
  function(
    $scope,
    $route,
    $routeParams,
    MovieService
  ){
     MovieService.fetchGoodsList().then(function(data){
       console.log(data);
       $scope.movieList = data.data.subjects;
    });
  }])
angular.module('starkapp').directive('appHead',[function() {
  return {
      restrict:'A',
      templateUrl:'/view/common/head.html'
  }
}])
angular.module('starkapp')
    .factory('MovieService',['$http',function($http) {
      return{
        fetchGoodsList:function(){
          return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/movie').then(function(data){
            return data;
          })
        }
      }
  
}])