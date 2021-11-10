// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var pasados = [];
var extraidos = [];

var eventos, hoy;

var i = 0;
var ultimoNumero = -1;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    for(var x of eventos){
      if(x.fecha < hoy){
        pasados.push(x);
      }
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function(x,y){
      if(x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento

    var html = "";

    //Recorre el arreglo y concatena el HTML para cada evento

    for(var x of pasados){
      html += `
        <div class="col-12 col-md-12 mb-3">
            <div class="card">
                <div class="card-body">
                    <a href="detalle.html?id=${eventos.indexOf(x)}"><h2 class="card-title p-0 m-0">${x.nombre}</h2></a>
                    <small class="text-muted" id="fecha">${x.fecha} - ${x.lugar}</small>
                    <p class="card-text p-0 pt-1 m-0">${x.descripcion}</p>
                    <p class="card-text" id="invitados">Invitados: ${x.invitados}</p>
                </div>
            </div>
        </div>
      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = html;

  })

});
