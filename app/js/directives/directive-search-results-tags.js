myDirectives.directive('searchResultsTags', function (config) {
    return {
        scope: {
            resultsCount: '=',
            resultsTagThreshold: '=',
            resultsTagArr: '=',
            resultsTagNameArr: '=',
            filterLabel: '='
        },
        restrict: 'AE',
        replace: true,
        transclude: true,
        controller: 'searchCtrl',
        templateUrl: 'app/widgets/search-results-tags.html?v=' + config.vDate
    };
});