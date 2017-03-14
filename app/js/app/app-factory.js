/* app-factory.js */

myFactories.factory('myFactory', function(){   
    var data = [];   
    data['str_company_name'] = 'Malton Coachworks';
    data['str_company_strapline'] = 'Accident Repair | Classic Car Restoration';
    data['str_company_message'] = '<p>Malton Coachworks is a wholly-owned subsidiary of <a href="http://www.classicandsportscar.ltd.uk/" target="_blank">Classic & Sportscar Ltd</a>. Established in 1991, the Company has earned a national reputation as purveyors of high quality Classic, Vintage, and Collector\'s cars.</p><p>Malton Coachworks extends our service to our valued existing and new customers by providing a high-quality vehicle body repair and refinishing facility, with dedicated modern and classic car expertise.</p>';
    data['str_company_address'] = 'Showfield Lane Industrial Estate, Malton, North Yorkshire';
    data['str_company_address_lite'] = 'Malton, North Yorkshire';
    data['str_company_postcode'] = 'YO17 6BT';
    data['str_company_country'] = 'UK';
    data['str_company_telephone'] = '01653 692090';
    data['str_company_telephone_code'] = '+441653692090';
    data['str_company_email'] = 'sales@maltoncoachworks.co.uk';
    data['str_company_web'] = 'www.maltoncoachworks.co.uk';
    
    data['meta_title'] = data['str_company_name'];
    data['meta_description'] = data['str_company_message'];
    data['meta_keywords'] = "malton coachworks, classic car restoration, accident repair, scratch repair, yorkshire";
    data['meta_author'] = "amactive.net &copy;2016";
    
    data['social'] = {};
    data['social']['facebook'] = {'name': 'facebook', 'url':'https://www.facebook.com/maltoncoachworks','fa':'fa-facebook'};
    data['social']['twitter'] = {'name': 'twitter','url':'https://twitter.com/maltoncoachwork','fa':'fa-twitter'};
    data['social']['linkedin'] = {'name': 'linkedin', 'url':'http://www.linkedin.com/pub/malton-coachworks/83/808/797','fa':'fa-linkedin'};
    data['social']['youtube'] = {'name': 'youtube', 'url':'http://www.youtube.com/channel/UCyT2-bypDjmWDTChx2Cl3uA','fa':'fa-youtube'};    
    
    return {
        data: data
    };
    
});

myFactories.factory('buildSQLService', function() {    
    return {
            getURL: function(sqlID,categoryID,subcategoryID,sqlLimit,sqlKeyword) {
                var tmpSQL = './app/js/php/popData.php?ctrlSQL=';                
                if(sqlID) tmpSQL += sqlID;
                if(categoryID) tmpSQL += '&categoryID=' + categoryID;
                if(subcategoryID) tmpSQL += '&subcategoryID=' + subcategoryID;
                if(sqlLimit) tmpSQL += '&sqlLimit=' + sqlLimit;
                if(sqlKeyword) tmpSQL += '&sqlKeyword=' + sqlKeyword;
                console.log('buildSQLService: ' + tmpSQL);
                return tmpSQL;
            }
        };
});