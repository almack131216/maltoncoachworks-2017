myDirectives.directive('headerBar', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/widgets/sections/header.html?v=' + config.vDate
    };
});
myDirectives.directive('footerBar', function (config) {
    return {
        replace: true,
        restrict: 'AE',
        templateUrl: 'app/widgets/sections/footer.html?v=' + config.vDate
    };
});
myDirectives.directive('bannerBar', function (config) {
    return {
        scope: {
            bannerCarousel: '=',
            bannerText: '@',
            bannerBtnsSocial: '@'
        },
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: "@",
        name:'controllerName',
        templateUrl: 'app/widgets/sections/banner.html?v=' + config.vDate
    };
});