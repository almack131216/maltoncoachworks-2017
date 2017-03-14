myControllers.controller('itemGetSetCtrl', function ($scope, $http, $rootScope, myFactory) {
    $scope.data = myFactory.data;

    $scope.getItem = function (getID) {
        if ($scope.jsonKey && $rootScope.commonData) {
            $scope.product = $rootScope.commonData.data[$scope.jsonKey];
            $scope.productParent = $scope.product;
            $scope.itemID = $scope.product['id'];
            $scope.itemName = $scope.product['name'];
            $scope.itemImg = $scope.product['image_large'];
            $scope.itemSnippet = $scope.product['snippet'];//trimmed
            $scope.itemSnippetFull = $scope.product['snippetFull'];
            $scope.itemDescription = $scope.product['description'];
        
            $rootScope.itemName = $scope.product['name'];
            if($scope.product['snippetFull']) $rootScope.meta_description = $scope.product['snippetFull'];
            console.log('(JSON item) success: ' + $scope.product);

            $scope.pendingRequest = false;
        } else {
            if(!$scope.product) $http.get('./app/js/php/popData.php?ctrlSQL=itemDetailsCtrl&itemID=' + getID)
                .success(function (data) {
                    $scope.product = data;
                    $scope.productParent = data[0];
                    $scope.itemID = data[0]['id'];
                    $scope.itemName = data[0]['name'];
                    $scope.itemImg = data[0]['image_large'];
                    $scope.itemSnippet = data[0]['snippet'];//trimmed
                    $scope.itemSnippetFull = data[0]['snippetFull'];
                    $scope.itemDescription = data[0]['description'];
                
                    $rootScope.itemName = data[0]['name'];
                    if(data[0]['snippetFull']) $rootScope.meta_description = data[0]['snippetFull'];
                    debugConsoleLog && console.log('(item) success: ' + JSON.stringify(data));
                    $scope.pendingRequest = false;
                })
                .error(function (err) {
                    //alert('error' + data);
                    $log.error(err);
                })
        }
    };

    // $rootScope.updateField = function () {
    //     //alert('updateField...');
    //     $http.post('./app/js/php/saveData.php?itemID=' + $scope.itemID,
    //         {
    //             'id': $scope.itemID,
    //             'name': $scope.itemName,
    //             'description': $scope.itemDescription
    //         }
    //     ).success(function (data, status, headers, config) {
    //         //Success code here
    //         //alert('SQL success: ' + $scope.itemID + ' > ' + $scope.itemName + ' > ' + $scope.itemDescription);
    //     }).error(function (data, status, headers, config) {
    //         //Error code here
    //         alert('SQL error');
    //     });
    // };
});

myControllers.controller('itemDetailsCtrl',
['$scope', '$sce', '$rootScope', '$http', '$log', 'myFactory', '$stateParams', 'config', '$controller',
function ($scope, $sce, $rootScope, $http, $log, myFactory, $stateParams, config, $controller) {
    //$scope.data = myFactory.data;

    $scope.imgDir = config.imgDir;
    $scope.imgDirLarge = config.imgDirLarge;
    $scope.imgDirThumbs = config.imgDirThumbs;

    $scope.externalSite = config.externalSite;
    $scope.externalSiteImgDir = config.externalSiteImgDir;

    angular.extend(this, $controller('itemGetSetCtrl', { $scope: $scope }));
    $scope.getItem($stateParams.id);
}]);