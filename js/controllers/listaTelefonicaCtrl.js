angular.module('listaTelefonica').controller('listaTelefonicaCnt', function ($scope, contatosAPI,operadorasAPI, serialGenerator){

  $scope.app = 'Lista Telefonica'

  $scope.contatos = [];
  $scope.operadoras = [];

  var carregarContatos = function (){
    contatosAPI.getContatos().success(function(data, status){
      $scope.contatos = data;
    }).error(function(data, status){
        $scope.message = "Aconteceu um Problema: " + data;
    });
  };

  var carregarOperadoras = function(){
    operadorasAPI.getOperadoras().success(function(data, status){
      $scope.operadoras = data;
    });
  };

  $scope.adicionarContato = function (Contato){
    Contato.serial = serialGenerator.generate();
    Contato.data = new Date();
    contatosAPI.saveContato(Contato).success(function(data){
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
