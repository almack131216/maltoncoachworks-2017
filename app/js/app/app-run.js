myRuns.run([
    "$rootScope", "$state", "$stateParams", "$http", "config", function ($rootScope, $state, $stateParams, $http, config) {
        $rootScope.$state = $state;
        $rootScope.isSearchable = config.isSearchable;

        $rootScope.pageLocation = {
            "search": { pageTitle: "Search", sqlLimit: 50 },
            "about": { categoryID: 3, subcategoryID: 3, pageTitle: "About Us" },
            "banner_carousel": { categoryID: 6, subcategoryID: 1, sqlLimit: 4, pageTitle: "Malton Coachworks" },
            "classifieds": { categoryID: 2, pageTitle: "Cars for Sale" },
            "portfolio": { categoryID: 6, subcategoryID: 1, sqlLimit: 100, pageTitle: "Portfolio" },
            "services": { categoryID: 8, subcategoryID: 18, pageTitle: "Services" },
            "services_section": { categoryID: 8, subcategoryID: 18, sqlLimit: 4, pageTitle: "Services" },
            "staff": { categoryID: 8, subcategoryID: 14, pageTitle: "Meet our Staff" },
            "testimonials": { categoryID: 8, subcategoryID: 15, pageTitle: "Happy Customers" },
            "news": { categoryID: 8, subcategoryID: 16, pageTitle: "News & Press" },            
            "block_1": { categoryID: 6, subcategoryID: 1, sqlLimit: 3, pageTitle: "Portfolio" },
            "block_2": { categoryID: 8, subcategoryID: 15, sqlLimit: 4, pageTitle: "Testimonials" },
            "block_videos": { categoryID: 7, sqlLimit: 10, pageTitle: "Videos" },
            "block_3": { categoryID: 2, sqlLimit: 3, pageTitle: "Cars For Sale" }
        };

        if (!$rootScope.commonData) $http.get('app/js/php/php-json.php?user=999')
            .then(function (res) {
                $rootScope.commonData = res;
                //console.log($rootScope.commonData);
            });

        //call on each page change
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $(".navbar-collapse").collapse('hide');//close header menu
                window.scrollTo(0, 0);
                $(".bootsnipp-search").removeClass("open");
            });

        //version number
        $rootScope.vDate = config.vDate;
    }
]);