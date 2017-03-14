myControllers.controller('introCtrl', ['$scope', '$controller', '$http', function ($scope, $controller, $http) {
    $scope.jsonKey = 'intro';
    $controller('itemGetSetCtrl', { $scope: $scope });
    $scope.getItem(506);
}]);

app.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.sections = ['dynamics', 'features']; //html files to load (top.html, etc)
    $scope.loadedSections = [$scope.sections[0]]; //loaded html files
    $scope.bannerLoaded = false;
}]);

myControllers.controller('aboutCtrl', ['$scope', '$controller', function ($scope, $controller) {
    $scope.jsonKey = 'about';
    $controller('itemGetSetCtrl', { $scope: $scope });
    $scope.getItem(514);
    $scope.sections = ['features', 'dynamics'];
    $scope.loadedSections = [$scope.sections[0]];
}]);

myControllers.controller('contactCtrl', ['$scope', 'myFactory', function ($scope, myFactory) {
    $scope.data = myFactory.data;
    $scope.meta_title = $scope.data['meta_title'];
}]);