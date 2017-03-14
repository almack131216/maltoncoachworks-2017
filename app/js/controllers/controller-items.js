/* controller-items.js */

myControllers.controller('portfolioListCtrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "portfolio";    
    $scope.jsonKey = 'intro_portfolio';
    $controller('itemGetSetCtrl', {$scope: $scope});
    $scope.getItem(76);
    $scope.jsonKey = null;
    $controller('itemListParentCtrl', {$scope: $scope});    
});

myControllers.controller('testimonialsListCtrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "testimonials";
    $scope.jsonKey = 'intro_testimonials';
    $controller('itemGetSetCtrl', {$scope: $scope});
    $scope.getItem(508);
    $scope.jsonKey = null;
    $controller('itemListParentCtrl', {$scope: $scope});   
});

myControllers.controller('servicesListCtrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "services";
    $scope.jsonKey = 'intro_services';
    $controller('itemGetSetCtrl', {$scope: $scope});
    $scope.getItem(67);
    $scope.jsonKey = null;
    $controller('itemListParentCtrl', {$scope: $scope});
});

myControllers.controller('featuresListCtrl', function ($scope, $rootScope, $controller) {
    $rootScope.activeCategory = "services_section";    
    $scope.jsonKey = 'intro_services';
    $controller('itemGetSetCtrl', {$scope: $scope});
    $scope.jsonKey = null;    
    $controller('itemListParentCtrl', {$scope: $scope});
});

myControllers.controller('dynamicsCtrl', function ($scope, $rootScope) {

});

myControllers.controller('banner_carouselCtrl', function ($scope, $rootScope, $controller, config) {    
    $rootScope.activeCategory = "banner_carousel";
    $scope.jsonKey = 'banner_carousel';
    $controller('itemGetSetCtrl', {$scope: $scope});
    $scope.getItem(504);
    
    $scope.imgDirLarge = config.imgDirLarge;
});