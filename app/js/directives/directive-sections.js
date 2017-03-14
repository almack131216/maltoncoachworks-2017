/* load sections into viewing area on scroll */
//REF: http://stackoverflow.com/questions/20410447/lazy-loading-angular-views-and-controllers-on-page-scroll
//plnkr: http://plnkr.co/edit/p6cD7ZCx2VNgHfEJC3NM?p=preview
//NOTE: need 'ng-controller="featuresListCtrl"' on parent div of section file
myDirectives.directive('scrollLoad', function($compile) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var to = scope[attrs.scrollLoadTo]; //$scope.loadedSections
      var from = scope[attrs.scrollLoadFrom]; //$scope.sections

      $window = angular.element(window);
      $window.bind('scroll', function(event) {
        var scrollPos = document.body.scrollTop + document.documentElement.clientHeight;
        var elemBottom = element[0].offsetTop + element[0].offsetHeight;
        if (scrollPos >= elemBottom) { //scrolled to bottom of scrollLoad element
          $window.unbind(event); //this listener is no longer needed.
          if (to.length < from.length) { //if there are still elements to load
            //use $apply because we're in the window event context
            scope.$apply(to.push(from[to.length])); //add next section
          }
        }
      });
      
    }
  };
});

/* directive for loading the next section */
myDirectives.directive('btnLoadSection', function () {

    var link = function(scope){
      scope.loadNextSections = function(){
        if (scope.loadedSections.length < scope.sections.length) { //if there are still elements to load
          scope.loadedSections.push(scope.sections[scope.loadedSections.length]);
        }
      }        
    };

    return {
        link:link,
        template: '<div ng-if="sections.length > loadedSections.length" ' +
        'class="txt-align-center margin-bottom-2">' +
        '<button class="btn btn-primary btn-load-sections" ng-click="loadNextSections()">' +        
        '<i class="fa fa-arrow-down txt-after"></i>Load More</button></div>'
    };

});