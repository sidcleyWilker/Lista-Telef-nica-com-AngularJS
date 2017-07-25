angular.module('listaTelefonica').factory("contatosAPI", function ($http, config){

  var _getContatos = function(){
    return $http.get(config.baseUrl + "/contatos");
  }

  var _saveContato = function(Contato){
    return $http.post(config.baseUrl + "/contatos",Contato);
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }
});
