/* directives.js */
myDirectives.directive('introBar', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/widgets/sections/intro.html?v=' + config.vDate
    };
});
myDirectives.directive('features', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/widgets/sections/features.html?v=' + config.vDate
    };
});
myDirectives.directive('slideshowBar', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/widgets/sections/slideshow.html?v=' + config.vDate
    };
});
myDirectives.directive('itemsList', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/templates/items.html?v=' + config.vDate
    };
});
myDirectives.directive('blockShared', function (config) {
    return {
        scope: {
            blockType: '@',
            blockTitle: '@'
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: "@",
        name:'controllerName',
        templateUrl: 'app/widgets/dynamic/block-shared.html?v=' + config.vDate
    };
});