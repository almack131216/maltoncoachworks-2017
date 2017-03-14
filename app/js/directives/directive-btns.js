myDirectives.directive('btnReviews', function() {
    return {
        scope: true,
        replace: true,
        template: '<a class="btn btn-social btn-facebook" href="https://business.facebook.com/pg/maltoncoachworks/reviews/?business_id=648442315257477&ref=page_internal" target="_blank" title="Read our reviews on facebook"><i class="fa fa-facebook"></i>Reviews on facebook</a>'
    };   
});
myDirectives.directive('btnNewsletter', function() {
    return {
        scope: true,
        replace: true,
        template: '<a ui-sref="contact-newsletter"><i class="fa fa-newspaper-o fa-fw txt-after"></i>Get Newsletter</a>'
    };   
});
myDirectives.directive('btnTelephone', function() {
    return {
        scope: true,
        replace: true,
        template: '<a href="tel:{{data.str_company_telephone_code}}">' +
        '<i class="fa fa-phone fa-fw txt-after"></i>' +
        '<span>{{ data.str_company_telephone }}</span></a>'
    };   
});
myDirectives.directive('btnContact', function() {
    return {
        scope: true,
        replace: true,
        template: '<a ui-sref="contact"><i class="fa fa-envelope-o fa-fw txt-after"></i>Contact Us</a>'
    };   
});
myDirectives.directive('btnAddressMap', function() {
    return {
        scope: true,
        replace: true,
        template: '<a href="https://www.google.com/maps/place/Malton+Coach+Works/@54.142058,-0.797304,16z/data=!4m5!3m4!1s0x0:0x6bba0f34182e8fe4!8m2!3d54.142058!4d-0.797304?hl=en-GB" target="_blank" title="Show on Google Maps in a new window">' +
'<i class="fa fa-map-marker fa-fw txt-after"></i>' +
'{{ data.str_company_address }}, {{ data.str_company_postcode }}, {{ data.str_company_country }}</a>'
    };   
});
myDirectives.directive('btnSocialGroup', function() {
    return {
        scope: true,
        replace: true,
        template: '<ul class="socialise">' +
'<li ng-repeat="li in data.social track by $index" ng-class="li.name">' +
'<a href="{{li.url}}" title="Link to our {{li.name}} page in new window" target="_blank">' +
'<i class="fa {{li.fa}}"></i><span>{{li.name}}</span></a>' +
'</li>' +
'</ul>'
    };   
});