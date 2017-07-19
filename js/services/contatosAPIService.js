angular.module('listaTelefonica').factory("contatosAPI", function ($http){

  var _getContatos = function(){
    return $http.get("http://localhost:3412/contatos");
  }

  var _saveContato = function(Contato){
    return $http.post("http://localhost:3412/contatos",Contato);
  }

  return {
    getContatos: _getContatos,
    saveContato: _saveContato
  }
});
