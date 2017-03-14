module.exports = function(grunt){
    /*src: [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',                    
    'css/main.css',
    'bower_components/ng-table/dist/ng-table.min.css',
    'bower_components/metisMenu/dist/metisMenu.min.css',
    'bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
    'bower_components/angular-responsive-tables/release/angular-responsive-tables.min.css'
    ],
    dest: 'dist/css/styles.css',
    */
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
          ngAnnotate: {  
                   options: {
                        singleQuotes: true
                    },
                    app: {
                        files: {
                            'app/js-annotated/bootstrap.js': ['bootstrap-config/bootstrap/js/bootstrap.js'],

                            'app/js-annotated/bower/angular-ui-router.js': ['bower_components/angular-ui-router/release/angular-ui-router.js'],
                            'app/js-annotated/bower/angular-breadcrumb.js': ['bower_components/angular-breadcrumb/dist/angular-breadcrumb.js'],
                            'app/js-annotated/bower/angular-sanitize.js': ['bower_components/angular-sanitize/angular-sanitize.js'],
                            'app/js-annotated/bower/angular-messages.js': ['bower_components/angular-messages/angular-messages.js'],
                            'app/js-annotated/bower/angular-cookies.js': ['bower_components/angular-cookies/angular-cookies.js'],
                            
                            'app/js-annotated/bower/lazysizes.js': ['bower_components/lazysizes/lazysizes.js'],
                            'app/js-annotated/bower/jquery.blueimp-gallery.min.js': ['bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js'],
                            
                            'app/js-annotated/app/app.js': ['app/js/app/app.js'],
                            'app/js-annotated/app/app-run.js': ['app/js/app/app-run.js'],
                            'app/js-annotated/app/app-constants_live.js': ['app/js/app/app-constants_live.js'],
                            'app/js-annotated/app/app-factory.js': ['app/js/app/app-factory.js'],
                            'app/js-annotated/app/app-routes.js': ['app/js/app/app-routes.js'],
                            
                            'app/js-annotated/directives/_common-directives.js': ['app/js/directives/_common-directives.js'],
                            'app/js-annotated/directives/directive-btns.js': ['app/js/directives/directive-btns.js'],
                            'app/js-annotated/directives/directive-contact.js': ['app/js/directives/directive-contact.js'],
                            'app/js-annotated/directives/directive-dynamics.js': ['app/js/directives/directive-dynamics.js'],                            
                            'app/js-annotated/directives/directive-navbar-search.js': ['app/js/directives/directive-navbar-search.js'],
                            'app/js-annotated/directives/directive-search-results-tags.js': ['app/js/directives/directive-search-results-tags.js'],
                            'app/js-annotated/directives/directive-sections.js': ['app/js/directives/directive-sections.js'],
                            'app/js-annotated/directives/directive-ui.js': ['app/js/directives/directive-ui.js'],                          
                            'app/js-annotated/bower/readmore.cust.js': ['bower_components/angular-read-more/dist/readmore.cust.js'],

                            'app/js-annotated/controllers/_common-controllers.js': ['app/js/controllers/_common-controllers.js'],                            
                            'app/js-annotated/controllers/controller-blocks.js': ['app/js/controllers/controller-blocks.js'],
                            'app/js-annotated/controllers/controller-contact.js': ['app/js/controllers/controller-contact.js'],                            
                            'app/js-annotated/controllers/controller-item.js': ['app/js/controllers/controller-item.js'],
                            'app/js-annotated/controllers/controller-item-list-parent.js': ['app/js/controllers/controller-item-list-parent.js'],
                            'app/js-annotated/controllers/controller-items.js': ['app/js/controllers/controller-items.js'],
                            'app/js-annotated/controllers/controller-navbar-search.js': ['app/js/controllers/controller-navbar-search.js'],
                            'app/js-annotated/controllers/controller-search.js': ['app/js/controllers/controller-search.js'],
                            'app/js-annotated/controllers/controller-ui.js': ['app/js/controllers/controller-ui.js'],                           
                            
                            'app/js-annotated/filters/_common-filters.js': ['app/js/filters/_common-filters.js'],
                            'app/js-annotated/filters/filter-truncate.js': ['app/js/filters/filter-truncate.js'],                            
                                                        
                            'app/js-annotated/_common.js': ['app/js/_common.js'],
                            'app/js-annotated/navbar-search.js': ['app/js/navbar-search.js']
                            
                            
//                            'app/js/annotated/bootstrap-image-gallery.js': ['app/js/bootstrap-image-gallery.js']
                        }
                    }
              },
        
        concat: {
            basic: {
              src: [
                    'app/js-annotated/bootstrap.js',

                    'app/js-annotated/bower/angular-ui-router.js',
                    'app/js-annotated/bower/angular-breadcrumb.js',
                    'app/js-annotated/bower/angular-sanitize.js',
                    'app/js-annotated/bower/angular-messages.js',
                    'app/js-annotated/bower/angular-cookies.js',
                  
                    'app/js-annotated/bower/lazysizes.js',
                    'app/js-annotated/bower/jquery.blueimp-gallery.min.js',

                    'app/js-annotated/app/app.js',
                    'app/js-annotated/app/app-run.js',
                    'app/js-annotated/app/app-constants_live.js',
                    'app/js-annotated/app/app-factory.js',
                    'app/js-annotated/app/app-routes.js',

                    'app/js-annotated/directives/_common-directives.js',
                    'app/js-annotated/directives/directive-btns.js',
                    'app/js-annotated/directives/directive-contact.js',                    
                    'app/js-annotated/directives/directive-dynamics.js',
                    'app/js-annotated/directives/directive-navbar-search.js',
                    'app/js-annotated/directives/directive-search-results-tags.js',
                    'app/js-annotated/directives/directive-sections.js',
                    'app/js-annotated/directives/directive-ui.js',                    
                    'app/js-annotated/bower/readmore.cust.js',

                    'app/js-annotated/controllers/_common-controllers.js',                    
                    'app/js-annotated/controllers/controller-blocks.js',
                    'app/js-annotated/controllers/controller-contact.js',
                    'app/js-annotated/controllers/controller-item.js',
                    'app/js-annotated/controllers/controller-item-list-parent.js',
                    'app/js-annotated/controllers/controller-items.js',
                    'app/js-annotated/controllers/controller-navbar-search.js',
                    'app/js-annotated/controllers/controller-search.js',
                    'app/js-annotated/controllers/controller-ui.js',

                    'app/js-annotated/filters/_common-filters.js',
                    'app/js-annotated/filters/filter-truncate.js',

                    'app/js-annotated/_common.js',
                    'app/js-annotated/navbar-search.js'                           
                    
                  ], //Where source js files reside
                  dest:'dist/js/minified.js', //Where to generate minified files
            }
          },
        
        
        uglify:{
          my_target: {
              files: [{
                  src: [
                      'bower_components/jquery/dist/jquery.min.js',
                      'bower_components/angular/angular.min.js',
                      'dist/js/minified.js'
                  ], //Where source js files reside
                  dest:'dist/js/', //Where to generate minified files
                  expand:true, //
                  flatten:true, //Remove unnecessary spaces and new lines
                  ext:'.min.js' //This will be the extension of minified files
              }]
          }
        },
        
        
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/minified.min.css': [
                        'bower_components/font-awesome/css/font-awesome.css',
                        'app/css/main.css',
                        'bower_components/blueimp-gallery/css/blueimp-gallery-video.css'
                    ]
                }
            }
        },
        
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.min.html': 'index-minify-me.html',
                
                'app/templates-min/about.html': 'app/templates/about.html',
                'app/templates-min/contact.html': 'app/templates/contact.html',
                'app/templates-min/home.html': 'app/templates/home.html',
                'app/templates-min/item.html': 'app/templates/item.html',
                'app/templates-min/items.html': 'app/templates/items.html',
                'app/templates-min/items-wrap.html': 'app/templates/items-wrap.html',                

                'app/widgets-min/contact-form.html': 'app/widgets/contact-form.html',
                'app/widgets-min/navbar-search.html': 'app/widgets/navbar-search.html',
                'app/widgets-min/search-results-tags.html': 'app/widgets/search-results-tags.html',

                'app/widgets-min/dynamic/block-shared.html': 'app/widgets/dynamic/block-shared.html',
                  
                'app/widgets-min/sections/banner.html': 'app/widgets/sections/banner.html',
                'app/widgets-min/sections/dynamics.html': 'app/widgets/sections/dynamics.html',
                'app/widgets-min/sections/features.html': 'app/widgets/sections/features.html',
                'app/widgets-min/sections/footer.html': 'app/widgets/sections/footer.html',
                'app/widgets-min/sections/header.html': 'app/widgets/sections/header.html',
                'app/widgets-min/sections/intro.html': 'app/widgets/sections/intro.html'

              }
            }
          }
          
            
      
        
    });
    
    
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('default',['ngAnnotate','concat','uglify','cssmin','htmlmin']);//,'cssmin','htmlmin'
}