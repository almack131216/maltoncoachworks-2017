/* controller-item-list-parent.js */

myControllers.controller('itemListParentCtrl',
['$scope', '$rootScope', '$http', '$log', 'myFactory',  'buildSQLService', '$stateParams', 'config',
function($scope, $rootScope, $http, $log, myFactory, buildSQLService, $stateParams, config) {
    $scope.pendingRequest = true;
    $scope.data = myFactory.data;
    
    $scope.imgDir = config.imgDir;
    $scope.imgDirLarge = config.imgDirLarge;
    $scope.imgDirThumbs = config.imgDirThumbs;

    $scope.externalSite = config.externalSite;
    $scope.externalSiteImgDir = config.externalSiteImgDir;	
    
    $scope.meta_title = $rootScope.pageLocation[$rootScope.activeCategory]['pageTitle'];
    $scope.title = $rootScope.pageLocation[$rootScope.activeCategory]['pageTitle'];
    $scope.dylink = $rootScope.activeCategory + "-product";
    if($rootScope.activeCategory == "services_section") $scope.dylink = "services-product";
    
    $scope.categoryID = $rootScope.pageLocation[$rootScope.activeCategory]['categoryID'];
    $scope.subcategoryID = $rootScope.pageLocation[$rootScope.activeCategory]['subcategoryID'];    

    if($rootScope.activeCategory=="search") $rootScope.sqlKeyword = $scope.sanitizeKeywordsOut($stateParams.q);
    //console.log('searchCtrl: ' +  $rootScope.sqlKeyword + ' / ' + $stateParams.q);

	//if($scope.categoryID==8 && ($scope.subcategoryID==14 || $scope.subcategoryID==18)){
		$scope.imgDir = config.imgDir;
	    $scope.imgDirLarge = config.imgDirLarge;
	    $scope.imgDirThumbs = config.imgDirThumbs;
	//}

	$scope.sqlLimit = $rootScope.pageLocation[$rootScope.activeCategory]['sqlLimit'];
    
    $scope.mySQL = buildSQLService.getURL($rootScope.activeCategory+"Ctrl",$scope.categoryID,$scope.subcategoryID,$scope.sqlLimit,$rootScope.sqlKeyword);
    console.log('mySQL: ' + $scope.mySQL);
    console.log('jsonKey: ' + $scope.jsonKey);    
    //$rootScope.commonData = null;

    if($scope.jsonKey && $rootScope.commonData){
        $scope.products = $rootScope.commonData.data[$scope.jsonKey];
        $scope.pendingRequest = false;
    }else{

        $http.get($scope.mySQL)
		.success(function(data) {
            console.log('(list) success: ' + JSON.stringify(data));
			$scope.products = data;
            $scope.pendingRequest = false;

            if(data.length==1 && data[0]==null){
                $scope.products = null;
            }
            if($rootScope.activeCategory=="search"){
                //console.log('search for "' + $rootScope.sqlKeyword + '"');
                if($scope.products){
                    $scope.searchResultsTitle = $scope.products.length + ' search results for "' + $rootScope.sqlKeyword + '"';
                }else{
                    $scope.searchResultsTitle = 'Sorry, no search results for "' + $rootScope.sqlKeyword + '"';
                }
                $scope.filterTagArr = [];
                $scope.filterTagLabelArr = [];
                for(i=0;i<$scope.products.length;i++){
                    //console.log(i + ' > ' + $scope.products[i].filterTag + ', ' + $scope.products[i].subcategoryName);
                    if($scope.filterTagArr.indexOf($scope.products[i].filterTag) == -1){
                        $scope.filterTagArr.push($scope.products[i].filterTag);
                        $scope.filterTagLabelArr.push($scope.products[i].subcategoryName);
                    }
                }
            }
		})
		.error(function(err) {
            //alert('error' + data);
			$log.error(err);
            $scope.pendingRequest = false;
		})
    }    

    $scope.sanitizeURL = function(getString){
        //console.log('sanitizeURL: ' + getString);
        return getString.replace(/\s+/g, '-').toLowerCase();
    }

}]);