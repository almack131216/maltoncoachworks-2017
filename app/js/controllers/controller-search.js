myControllers.controller('searchCtrl',
['$scope', '$rootScope', 'config', '$controller',
function ($scope, $rootScope, config, $controller) {

    $scope.sanitizeKeywordsIn = function(getString){
        //console.log('sanitizeKeywordsIn: ' + getString + ' = ' + encodeURIComponent(getString).replace(' ', '_'));
        return getString.replace(' ', '_');
    }
    $scope.sanitizeKeywordsOut = function(getString){
        //console.log('sanitizeKeywordsOut: ' + getString + ' = ' + encodeURIComponent(getString).replace('_', ' '));
        return getString.replace('_', ' ');
    }

    $scope.imgDir = config.imgDir;
    $scope.imgDirLarge = config.imgDirLarge;
    $scope.imgDirThumbs = config.imgDirThumbs;

    $scope.externalSite = config.externalSite;
    $scope.externalSiteImgDir = config.externalSiteImgDir;

    $scope.jsonKey = null;

    $rootScope.activeCategory = "search";
    $controller('itemListParentCtrl', {$scope: $scope});
    $rootScope.filterTagSelected = null;
    
    $scope.filterApply = function(getTag){        
        $rootScope.filterTagSelected = getTag;
        console.log('filterApply: ' + $rootScope.filterTagSelected);
    }
}]);