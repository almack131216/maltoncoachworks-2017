myDirectives.directive('contactForm', function (config) {
    return {
        scope: true,
        replace: true,
        restrict: 'AE',
        controller: 'contactCtrlForm',
        templateUrl: 'app/widgets/contact-form.html?v=' + config.vDate
    };
});