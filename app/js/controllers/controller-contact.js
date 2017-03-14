myControllers.controller('contactProductCtrl', ['$scope', '$rootScope', '$http', '$log', 'myFactory', '$stateParams', function($scope, $rootScope, $http, $log, myFactory, $stateParams) {
    
	//$scope.id = $stateParams.id;
	//$scope.product = $filter('filter')($scope.products, $stateParams.id)[0];

    if($stateParams.id){
        $http.get('./app/js/php/popData.php?ctrlSQL=itemPreviewCtrl&itemID=' + $stateParams.id)
            .success(function(data) {            
                $scope.product = data;
                //$scope.itemName = data[0]['name'];
                $rootScope.itemName = data[0]['name'];
                //alert('success: ' + data[0]);
            })
            .error(function(err) {
                //alert('error' + data);
                $log.error(err);
            })
    }
}]);

myControllers.controller('contactCtrlForm', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : './app/contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                debugConsoleLog && console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed.  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
    }
});