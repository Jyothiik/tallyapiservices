var app = angular.module('plunker', ['ngSanitize', 'schemaForm']);

app.controller('MainCtrl', function($scope) {
  $scope.schema = {

    "type": "object",
    "title": "Comment",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string",
        "required":true
      },
      "email": {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil."
      },
      "comment": {
        "title": "Comment",
        "type": "string",
        "maxLength": 20,
        "validationMessage": "Don't be greedy!"
      }
    },
    "required": [
      "email",
      "comment"
    ]

  };


  $scope.form = [

    {
      key: "email",
      // feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"

    }, {
      key: "comment",
      type: "textarea",
      placeholder: "Make a comment",
      // feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required && !hasSuccess() && !hasError() ,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"

    }, {
      type: "submit",
      style: "btn-info",
      title: "OK"
    },

  ];


    // $scope.form = [
    // {
    //   key: "name",
    //   feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"
    // }
    // ];

  $scope.model = {};
});