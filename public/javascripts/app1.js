var validationApp = angular.module('validationApp', []);
alert('our form is amazing');
// create angular controller
validationApp.controller('mainController', function($scope) {
 //$scope.serverip = ''
  // function to submit the form after all validation has occurred
  $scope.submitForm = function(isValid) {
 alert('our form is amazing');
    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }

  };

});