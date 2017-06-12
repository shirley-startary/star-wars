var cargarPagina = function(){
  cargarPersonajes();
  $(document).on("click",".personaje",mostrarDetallesPersonaje);
}

var cargarPersonajes = function(){
  var url ="http://swapi.co/api/people/";
  $.getJSON(url,function(response){
    console.log(response);
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonajes(personajes);
  });
};
var mostrarTotalPersonajes = function(total){
  $("#total").text(total)
}

var mostrarPersonajes = function(personajes){
  var $ul= $("#personajes");
  // crear un li que se muestre en el html
  personajes.forEach(function(personaje){
    var $li = $("<li/>");
    $li.addClass("personaje");
    $li.attr("data-url",personaje.homeworld);
    $li.text(personaje.name);

    $ul.append($li);
  });
}
var plantillaPlaneta = '<h2>Planeta:</h2>' +
      '<p><strong>Nombre:</strong> __nombre__</p>'+
'<p><strong>Climate:</strong> __clima__</p>';


  var mostrarDetallesPersonaje = function () {
    // console.log($(this));
    var url = $(this).data("url");
    console.log(url);
    var $planetaContenedor =$("#planeta");
     $.getJSON(url, function (response){
       $planetaContenedor.html(
       plantillaPlaneta.replace("__nombre__", response.name)
       .replace("__clima__", response.climate)     );
    });
 }
$(document).ready(cargarPagina);
