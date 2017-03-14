myControllers.controller('navCtrl', function ($scope, $rootScope, $controller, $http, $location, buildSQLService, $filter, $stateParams) {

    $scope.loadSearch = function () {
        
        $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function (event) {
            event.preventDefault();
            $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
            $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
            $('a[href="#toggle-search"]').closest('li').toggleClass('active');

            if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
                /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
                setTimeout(function () {
                    $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
                }, 100);
            }
        });

        $(document).on('keyup', function (event) {
            if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
                //console.log('chars: ' + $scope.keywords.length);
                $('a[href="#toggle-search"]').trigger('click');
            }
        });

        //loadInitScroll();
    }

    // The function that will be executed on button click (ng-click="search()")
    $scope.search = function () {
        $rootScope.keywords = $('input.inpKeywords').val();
        console.log('search > chars: ' + $('input.inpKeywords').val().length + ' - ' + $rootScope.keywords.length + ' (' + $rootScope.keywords + ')' );
        if ($rootScope.keywords && $rootScope.keywords.length >= 3) {
            console.log('search > GO...');        
            $rootScope.sqlKeyword = $rootScope.keywords;
            $location.path("/search/" + $rootScope.sqlKeyword);
        }
    };
    
});