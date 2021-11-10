// Hemos omitido los acentos en los comentarios por compatibilidad

var eventos = [];

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = location.search.match(/id=(\d)*/)[1]
  console.log(id)

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){

    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    console.log(eventos)

    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    })

    //Crea un string que contenga el HTML que describe el detalle del evento
    html = `
      <div class="col-12 col-md-12 mb-3">
          <div class="card">
              <div class="card-body">
                  <h2 class="card-title p-0 m-0">${eventos[id].nombre}</h2>
                  <small class="text-muted" id="fecha">${eventos[id].fecha} - ${eventos[id].lugar}</small>
                  <p class="card-text pt-1 p-0 m-0">${eventos[id].descripcion}</p>
                  <p class="card-text p-0 m-0" id="costo">Costo: ${eventos[id].precio}<br></p>
                  <p class="card-text" id="invitados">Invitados: ${eventos[id].invitados}</p>
              </div>
          </div>
      </div>
    `;

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html;

  });
});
