myDirectives.directive('searchForm', function (config) {
    return {
        scope: false,
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: "navCtrl",
        templateUrl: 'app/widgets/navbar-search.html?v=' + config.vDate
    };
});