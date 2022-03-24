console.log("Hola Pokedex")

$(document).ready(function () {
    console.log("Documento listo")
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

})

