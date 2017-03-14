/* app-routes.js */

app.config(['$urlRouterProvider','$stateProvider','config', function($urlRouterProvider,$stateProvider,config){
    $urlRouterProvider.otherwise('/');

    var vDate = config.vDate;

    $stateProvider
        .state('login',{
            url:'/login',
            templateUrl: 'app/templates/login.html?v=' + vDate,
            login: true,
            data: {login: true, public: true}
        })
        .state('signup',{
            url:'/signup',
            templateUrl: 'app/templates/signup.html?v=' + vDate,
            data: {login: false, public: true}
        })
        .state('home',{
            url:'/',
            templateUrl:'app/templates/home.html?v=' + vDate,        
            controller: 'homeCtrl',
            ncyBreadcrumb: {
              label: 'Home'
            },
            data: {login: false, public: true, hasPermission: ['admin']}
        })
        .state('about',{
            url:'/about',
            templateUrl:'app/templates/about.html?v=' + vDate,
            controller: 'aboutCtrl',
            ncyBreadcrumb: {
              label: 'About Us',
                parent: 'home'
            },
            data: {login: false, public: true}
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'app/templates/contact.html?v=' + vDate,
            controller: 'contactCtrl',
            ncyBreadcrumb: {
              label: 'Contact Us',
                parent: 'about'
            },
            data: {login: false, public: true}
        })
        .state('contact-newsletter', {
            url: "/contact/newsletter",            
            templateUrl: 'app/templates/contact.html?v=' + vDate,
            controller: 'contactCtrl',
            ncyBreadcrumb: {
              label: 'Newsletter Request',
              parent: 'about'
            },
            data: {login: false, public: true}
        })
        .state('contact-product', {
            url: "/contact/:name/:id",
            templateUrl: 'app/templates/contact.html?v=' + vDate,
            controller: 'contactProductCtrl',
            ncyBreadcrumb: {
              label: '{{ itemName }} Enquiry',
              parent: 'contact'
            },
            data: {login: false, public: true}
        })
        .state('restoration',{
            url:'/restoration',
            templateUrl:'app/templates/items-wrap.html?v=' + vDate,
            ncyBreadcrumb: {
              label: 'Restoration',
                parent: 'home'
            },
            data: {login: false, public: true}
        })
        .state('portfolio',{
            url:'/portfolio',
            templateUrl:'app/templates/items-wrap.html?v=' + vDate,
            controller: 'portfolioListCtrl',
            ncyBreadcrumb: {
              label: 'Portfolio',
                parent: 'home'
            },
            data: {login: false, public: true}
        })        
        .state('portfolio-product', {
            url: '/portfolio/:name/:id',
            templateUrl: 'app/templates/item.html?v=' + vDate,
            controller: 'itemDetailsCtrl',
            ncyBreadcrumb: {
              label: '{{ itemName }}',
                parent: 'portfolio'
            },            
            cache: false,
            data: {login: false, public: true}
        })        
        .state('testimonials', {
            url:'/testimonials',
            templateUrl:'app/templates/items-wrap.html?v=' + vDate,
            controller: 'testimonialsListCtrl',
            ncyBreadcrumb: {
                label: 'Testimonials',
                parent: 'about'
            },
            data: {login: false, public: true}
        })
        .state('testimonials-product', {
            url: '/testimonials/:name/:id',
            templateUrl: 'app/templates/item.html?v=' + vDate,
            controller: 'itemDetailsCtrl',
            ncyBreadcrumb: {
                label: '{{ itemName }}',
                parent: 'testimonials'
            },
            data: {login: false, public: true}
        })
        .state('search', {
            url: '/search/:q',
            templateUrl: 'app/templates/search.html?v=' + vDate,
            controller: 'searchCtrl',
            ncyBreadcrumb: {
                label: 'Search Results',
                parent: 'home'
            },
            data: {login: false, public: true}
        })
        .state('search-product', {
            url: '/search/:q/:name/:id',
            templateUrl: 'app/templates/item.html?v=' + vDate,
            controller: 'itemDetailsCtrl',
            ncyBreadcrumb: {
                label: '{{ itemName }}',
                parent: 'search'
            },
            data: {login: false, public: true}
        })
        .state('services', {
            url:'/services',
            templateUrl:'app/templates/items-wrap.html?v=' + vDate,
            controller: 'servicesListCtrl',
            ncyBreadcrumb: {
                label: 'Services',
                parent: 'home'
            },
            data: {login: false, public: true}
        })
        .state('services-product', {
            url: '/services/:name/:id',
            templateUrl: 'app/templates/item.html?v=' + vDate,
            controller: 'itemDetailsCtrl',
            ncyBreadcrumb: {
                label: '{{ itemName }}',
                parent: 'services'
            },
            data: {login: false, public: true}
        })
        .state('add-item',{
            url:'/add',
            templateUrl:'app/templates/admin/add-item.html?v=' + vDate,
            controller: 'addCtrl',
            ncyBreadcrumb: {
                label: 'Add Item',
                parent: 'admin'
            },
            data: {
                hasPermission: ['admin']
            }
        })
    
    //$locationProvider.html5Mode(true);
    
}]);