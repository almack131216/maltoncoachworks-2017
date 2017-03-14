/* filters.js */
myFilters.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

// html filter (render text as html)
myFilters.filter('html', ['$sce', function ($sce) { 
    return function (text) {
        return $sce.trustAsHtml(text);
    };    
}]);

myFilters.filter('htmlToPlaintext', function() {
//    return function(text) {
//      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
//    };
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, '');
    }
});

//myFilters.filter('sanitizeMe', function() {
//    return function(getString){
//        return 'xxx' + getString.replace(/\s+/g, '-').toLowerCase();//$sce.URL(getString);
//    }
//});