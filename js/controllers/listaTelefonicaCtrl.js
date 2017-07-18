angular.module('listaTelefonica').controller('listaTelefonicaCnt', function ($scope, $http){

  $scope.app = 'Lista Telefonica'

  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function (){
    $http.get("http://localhost:3412/contatos").success(function(data, status){
      $scope.contatos = data;
    }).error(function(data, status){
        $scope.message = "Aconteceu um Problema: " + data;
    });
  };

  var carregarOperadoras = function(){
    $http.get("http://localhost:3412/operadoras").success(function(data, status){
      $scope.operadoras = data;
    });
  };

  $scope.adicionarContato = function (Contato){
    Contato.data = new Date();
    $http.post("http://localhost:3412/contatos",Contato).success(function(data){
      delete $scope.Contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };

  $scope.apagarContatos = function (contatos){
    $scope.contatos = contatos.filter(function (contato){
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContaoSelecionado = function (contatos){
    return contatos.some(function(contato){
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function (campo){
    $scope.criterioDeOrdenacao = campo;
  };

  carregarContatos();
  carregarOperadoras();
});
