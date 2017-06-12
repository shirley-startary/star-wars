var cargarPagina = function(){
  cargarPersonajes();
}

var cargarPersonajes = function(){
  $.ajax("https://swapi.co/api/people/",{
    method:"GET",
    dataType:"json",
      // ambos son funciones y reciben un parametro, le pondremos response para acostumbrarse al flujo de peticion
    success: function(response){
        // console.log("respuesta",response);
        // para obtener al arreglo de los personajes, varia depende el API,y que tenga propiedad results, chechar en postman
        var personajes = response.results;
        var total = response.count;
        mostrarTotalPersonajes(total);
        mostrarPersonajes(personajes);
    },
    error:function(error){
      console.log("error",error);
    }

  })
}
var mostrarTotalPersonajes = function(total){
  $("#total").text(total)
}

var mostrarPersonajes = function(personajes){
  var $ul= $("#personajes");
  // crear un li que se muestre en el html
  personajes.forEach(function(personaje){
    var $li = $("<li/>");
    $li.text(personaje.name);
    $ul.append($li);
  });
}
$(document).ready(cargarPagina);
