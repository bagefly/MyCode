angular.moudule('controllers').controller('MovieController',[
    '$scope',
    '$route',
    '$routeParams',
    'MovieService',
    function(
      $scope,
      $route,
      $routeParams,
      GoodsService
    ){
      $scope.movieList = MovieService.fetchGoodsList().then(function(data){
        console.log(data);
        $scope.movieList = data.data.subjects;
     });
    }])