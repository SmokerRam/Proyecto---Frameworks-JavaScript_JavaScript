// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var proximos = [];
var pasados = [];
var extraidosProximos = [];
var extraidosPasados = [];

var eventos, hoy, longitud;

var i = 0;
var o = 0;
var ultimoNumeroProximo = -1;
var ultimoNumeroPasado = -1;

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
      else{
        pasados.push(x);
      }
    }

    //<!--==================== EVENTOS PROXIMOS ====================-->
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    //Extrae solo dos eventos proximos
    while(i < 2){
      var randomProximo = Math.floor(Math.random() * proximos.length)
      
      if(ultimoNumeroProximo != randomProximo){
        extraidosProximos.push(proximos[randomProximo])
        ultimoNumeroProximo = randomProximo;
        i++; 
      }    
    }

    //Ordena los eventos extraidos segun la fecha (los mas cercanos primero)
    extraidosProximos = extraidosProximos.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento

    var htmlProximo = "";

    //Recorre el arreglo y concatena el HTML para cada evento

    for(var x of extraidosProximos){
      htmlProximo += `
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${x.nombre}</h3>
                    <small class="text-muted">${x.fecha}</small>
                    <p class="card-text">${x.descripcion}</p>
                </div>
            </div>
        </div>
      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = htmlProximo;


    //<!--==================== EVENTOS PASADOS ====================-->

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function(x,y){
      if(x.fecha < y.fecha){
        return 1;
      }
      return -1;
    })

    //Extrae solo dos eventos pasados
    while(o < 2){
      var randomPasado = Math.floor(Math.random() * pasados.length)

      if(ultimoNumeroPasado != randomPasado){
        extraidosPasados.push(pasados[randomPasado])
        ultimoNumeroPasado = randomPasado;
        o++;
      }
    }

    //Ordena los eventos extraidos segun la fecha (los mas cercanos primero)
    extraidosPasados = extraidosPasados.sort(function(x,y){
      if(x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento

    var htmlPasado = ""

    //Recorre el arreglo y concatena el HTML para cada evento

    for(var x of extraidosPasados){
      htmlPasado += `
        <div class="col-12 col-md-6">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${x.nombre}</h3>
                    <small class="text-muted">${x.fecha}</small>
                    <p class="card-text">${x.descripcion}</p>
                </div>
            </div>
        </div>
      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = htmlPasado;
  })

});
