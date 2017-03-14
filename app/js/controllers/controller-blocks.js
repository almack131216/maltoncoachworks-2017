myControllers.controller('block_custom', function ($scope, $rootScope, $controller, myFactory) {
    $scope.data = myFactory.data;
    $scope.title = 'test';
});

myControllers.controller('block_1Ctrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "block_1";
    $scope.jsonKey = 'portfolio';
    $scope.dylink = "portfolio-product";
    $controller('itemListParentCtrl', {$scope: $scope});
});

myControllers.controller('block_2Ctrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "block_2";
    $scope.jsonKey = 'testimonials';
    $scope.dylink = "testimonials-product";
    $controller('itemListParentCtrl', {$scope: $scope});
});

myControllers.controller('block_3Ctrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "block_3";
    $scope.jsonKey = 'classifieds';  
    $controller('itemListParentCtrl', {$scope: $scope});
});

