











function MarcarFaltaDeTitulo(titulo){
  titulo.style.boxShadow = "0px 0px 5px #b22";
  setTimeout(function () {
    titulo.style.boxShadow = "0px 0px 0px ";
  }, 500);
}

function MarcarFaltaDeContenido(contenido){
  contenido.style.boxShadow = "0px 0px 5px #b22";
  setTimeout(function () {
    contenido.style.boxShadow = "0px 0px 0px ";
  }, 500);
}




function ReiniciarNotaActual(){
  notaActual = null;
}




function ModificarModoDeContenido(){
  if (preModoDeContenido == false) {
      preModoDeContenido = true;

      CentrarContenido(nuevo_contenido_Doc, centrar_nueva_nota_boton);
      CentrarContenido(editar_contenido_Doc, centrar_editar_nota_boton);
  } else {
    preModoDeContenido = false;

    IzquierdaContenido(nuevo_contenido_Doc, centrar_nueva_nota_boton);
    IzquierdaContenido(editar_contenido_Doc, centrar_editar_nota_boton);
  }
}




function CentrarContenido(contenido, boton){
  contenido.style.textAlign = "center";
  boton.innerHTML = "Izquierda"
}
function IzquierdaContenido(contenido, boton){
  contenido.style.textAlign = "left";
  boton.innerHTML = "Centrar";
}




function ReiniciarPreModoDeContenido(){
  preModoDeContenido = false;

}




function ContenidoTextoLeft(contenido){
  // console.log(contenido)
  // PROPOSITO: Coloca el texto del contenido de lectura en
  // el lado izquierdo
  // PRECONDICIONES: ninguna
  contenido.style.textAlign = "left";
}
function ContenidoTextoCenter(contenido){
  // PROPOSITO: Coloca el texto del contenido de lectura en
  // el centro
  // PRECONDICIONES: ninguna
  contenido.style.textAlign = "center";
}




//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


function RevisarValoresDeNota(contenido_valor,titulo_valor){
  /*
    PROPOSITO: Retorna el length del texto, siempre que este sea < 50. caso
    contrario retorna 50.

    Reotrna un array con 2 valores.

    Valor 1: length del titulo
    Valor 2: length del contenido
  */

  var tituloLength = 0;
  var contenidoLength = 0;

  // si el titulo es > 0 se crea la variable
  if (titulo_valor.length > 0) {
    if (titulo_valor.length <= 50) {
      tituloLength = titulo_valor.length;
    } else {
      tituloLength = 50;
    }
  }

  // si el contenido es > 0 se crea la variable
  if (contenido_valor.length > 0) {
    if (contenido_valor.length <= 50) {
      contenidoLength = contenido_valor.length;
    } else {
      contenidoLength = 50;
    }
  }


  return [tituloLength,contenidoLength];

}


function ComprobarEspacios(tituloLength, contenidoLength, titulo_valor, contenido_valor){
    /* PROPOSITO: Revisa el valor del contenido y el titulo retorna 1 array con
    3 valores que depensen de si hay o no caracteres que no sean espacios.

    Valor 1: Retorna un valor "general" que confirma que hay algun caracter
      distinto al espacio, pero no se identifica donde.
    Valor 2: Retorna un valor sobre si hay o no caracteres distintos al espacio en
        el titulo.
    Valor 3: Retorna un valor sobre si hay o no caracteres distintos al espacio en
        el contenido.
    */
  var texto = 0;
  var titulo_conter = 0;
  var contenido_conter = 0;
  for(let i = 0; i < tituloLength; i++){
    if (titulo_valor[i] != " ") {
      texto++;
      titulo_conter++;
      break;
    }
  }
  for(let i = 0; i < contenidoLength; i++){
    if (contenido_valor[i] != " ") {
      texto++;
      contenido_conter++;
      break;
    }
  }


  return [texto,titulo_conter, contenido_conter];

}









function DesplegarConsulta(  tema  ,  tipo  ){
  consulta_Doc.style.display = "block";
  consulta_Doc.innerHTML = tema;
  OcultarTodosLosMenuVentana();
  inicializarVariablesConsulta(tipo)
}

function inicializarVariablesConsulta(tipo){
  consulta_boton_SI =  document.getElementById("SI");
  consulta_boton_NO =  document.getElementById("NO");





  if (tipo == 0) {
      // guardar nota
      consulta_boton_SI.addEventListener("click",function(){
        GuardarNuevaNota();
        RetraerConsulta();
      });
      consulta_boton_NO.addEventListener("click",function(){
        CerrarNuevaNota();
        RetraerConsulta();
      });
  } else if (tipo == 1) {
      // eliminar nota
      consulta_boton_SI.addEventListener("click",function(){
        RetraerConsulta();
        EliminarNota();
      });
      consulta_boton_NO.addEventListener("click",function(){
        RetraerConsulta();
        OcultarTodosLosMenuVentana();
      });
  } else if (tipo == 2){
     consulta_boton_SI.addEventListener("click",function(){
        GuardarEditarNota();
        RetraerConsulta();
      });
      consulta_boton_NO.addEventListener("click",function(){
        CerrarEditarNota();
        RetraerConsulta();
      });
  }


  // consulta_boton_SI.addEventListener("click",function(){
  //   RetraerConsulta();
  // });
  // consulta_boton_NO.addEventListener("click",function(){
  //   RetraerConsulta();
  // });


}



function RetraerConsulta(){
  consulta_Doc.style.display = "none";
  consulta_Doc.innerHTML = "";
  ResetearVariablesConsulta();
}


function ResetearVariablesConsulta(){
  consulta_boton_SI = "";
  consulta_boton_NO = "";
}
