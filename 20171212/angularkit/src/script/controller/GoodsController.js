angular.moudule('controllers').controller('GoodsController',[
    '$scope',
    '$route',
    '$routeParams',
    'GoodsService',
    function(
      $scope,
      $route,
      $routeParams,
      GoodsService
    ){
      $scope.goodsList = GoodsService.fetchGoodsList().then(function(data){
        console.log(data);
        $scope.goodsList = data.data.data;
     });
    }])