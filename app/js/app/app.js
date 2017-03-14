/* app.js */
var myRuns = angular.module('myApp.runs', []);
var myDirectives = angular.module('myApp.directives', []);
var myControllers = angular.module('myApp.controllers', []);
var myFactories = angular.module('myApp.factories', []);
var myFilters = angular.module('myApp.filters', []);

var app = angular.module('myApp',['myApp.runs','myApp.directives','myApp.controllers','myApp.filters','myApp.factories','ui.router','ngSanitize','ncy-angular-breadcrumb','truncate','ngCookies','hm.readmore','ngMessages']);