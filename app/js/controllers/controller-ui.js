myControllers.controller('headCtrl', function ($scope, myFactory, $rootScope) {
    $scope.data = myFactory.data;

    $scope.meta_title = $scope.data['meta_title'];
    $rootScope.meta_description = $scope.data['meta_description'];
    $scope.meta_keywords = $scope.data['meta_keywords'];
    $scope.meta_author = $scope.data['meta_author'];

    $scope.title = $scope.data['str_company_name'];
    $scope.message = $scope.data['str_company_message'];
});

myControllers.controller('footerCtrl', ['$scope', '$rootScope', 'myFactory', function ($scope, $rootScope, myFactory) {
    $scope.data = myFactory.data;
}]);