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