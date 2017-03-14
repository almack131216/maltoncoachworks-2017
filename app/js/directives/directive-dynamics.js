myDirectives.directive('dynamicDirectives', ['$compile', '$rootScope', function($compile, $rootScope) {
    //alert(JSON.stringify(user));
    
    var addDirectiveToElement = function(scope, element, dir) {
        var propName;
        if (dir.if) {
            propName = Object.keys(dir)[1];
            var addDirective = scope.$eval(dir.if);
            if (addDirective) {                                
                element.attr(propName, dir[propName]);
            }
        } else { // No condition, just add directive
            propName = Object.keys(dir)[0];
            element.attr(propName, dir[propName]);
        }
    };

    var linker = function(scope, element, attrs) {
        var directives = scope.$eval(attrs.dynamicDirectives);

        if (!directives || !angular.isArray(directives)) {
            return $compile(element)(scope);
        }

        // Add all directives in the array
        angular.forEach(directives, function(dir){
            addDirectiveToElement(scope, element, dir);
        });

        // Remove attribute used to add this directive
        //element.removeAttr("dynamic-directives");
        element.removeAttr(attrs.$attr.dynamicDirectives);
        // Compile element to run other directives
        $compile(element)(scope);
    };

    return {
        replace: false,
        priority: 1000, // Run before other directives,
        terminal: true, // Stop other directives running
        link: linker
    };
}]);