// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var proximos = [];
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
      if(x.fecha > hoy){
        proximos.push(x);
      }
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function(x,y){
      if(x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento

    var html = "";

    //Recorre el arreglo y concatena el HTML para cada evento

    for(var x of proximos){
      html += `
        <div class="col-12 col-md-12 mb-3">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title p-0 m-0">${x.nombre}</h3>
                    <small class="text-muted">${x.fecha} - ${x.lugar}</small>
                    <p class="card-text pt-1">${x.descripcion}</p>
                    Invitados: ${x.invitados}
                </div>
            </div>
        </div>
      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html;

  })

});
