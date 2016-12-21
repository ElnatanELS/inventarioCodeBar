angular.module('leitor.controllers', ['ionic', 'ngCordova'])
  .controller("leitorController", function($scope, $cordovaBarcodeScanner) {


    $scope.lercodigo = function(){
      $cordovaBarcodeScanner.scan().then(function(imagemEscaneada){
        alert(imagemEscaneada.text);

      }, function(error){
        alert("ocorreu um erro" + error);
      });
    }

  });
20
