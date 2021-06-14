





function CerrarNuevaNota(){
  MostrarSoloContenedor_(contenedor_inicio);
  OcultarTodosLosMenuVentana();
  ReiniciarNotaActual();
  GenerarPreviewDeNota(contenedor_inicio, titulos, fechas, horas, 0);
  LimpiarContenedorNuevaNota();
  LimpiarContenedor_(nuevo_titulo_Doc, nuevo_contenido_Doc);
  ReiniciarPreModoDeContenido();
}
function CerrarEditarNota(){
  MostrarSoloContenedor_(contenedor_lectura);
  OcultarTodosLosMenuVentana();
  LimpiarContenedor_(editar_titulo_Doc, editar_contenido_Doc);
  abrirNota(notaActual);
  ReiniciarPreModoDeContenido();
}
function CerrarLectura(){
  MostrarSoloContenedor_(contenedor_inicio);
  OcultarTodosLosMenuVentana();
  ContenidoTextoLeft(contenido_Doc);
  ReiniciarNotaActual();
  GenerarPreviewDeNota(contenedor_inicio, titulos, fechas, horas, 0);
  LimpiarContenedor_(titulo_Doc, contenido_Doc);
}








function LimpiarContenedor_(titulo, contenido){
  // console.log(titulo)
  titulo.innerHTML = "";
  contenido.innerHTML = "";
}

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------







//  NUEVA NOTA  //












function GuardarNuevaNota(){
  if (ValorNuevoTitulos().length > 0 && ValorNuevoContenidos().length > 0) {
    titulos.push(ValorNuevoTitulos());
    contenidos.push(ValorNuevoContenidos());

    const hora = new Date().getHours();
    const minuto = new Date().getMinutes();
    const numero_dia = new Date().getDate();
    const mes = new Date().getMonth();
    const año = new Date().getFullYear();

    fechas.push(`${numero_dia}/${mes}/${año}`);
    horas.push(`${hora}:${minuto}`);




    modosDeContenido.push(preModoDeContenido);

    SubirLocalStorage();
    BajarLocalStorage();
    CerrarNuevaNota();
  } else {
    var tituloLength = RevisarValoresDeNota(     ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[0];
    var contenidoLength = RevisarValoresDeNota(  ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[1];

    var texto = ComprobarEspacios(  tituloLength  ,  contenidoLength, ValorNuevoTitulos()  ,  ValorNuevoContenidos()  );

    if (texto[0] == 0) {
      OcultarTodosLosMenuVentana();
      MarcarFaltaDeTitulo(nuevo_titulo_Doc);
      MarcarFaltaDeContenido(nuevo_contenido_Doc);
    } else {

          if (texto[1] == 0) {
            OcultarTodosLosMenuVentana();
            MarcarFaltaDeTitulo(nuevo_titulo_Doc);
          }
          if (texto[2] == 0) {
            OcultarTodosLosMenuVentana();
            MarcarFaltaDeContenido(nuevo_contenido_Doc);
          }
          if (texto[1] != 0 && texto[2] != 0) {
            GuardarNuevaNota();
          }
    }
    // console.log("falta algo");
    OcultarTodosLosMenuVentana();
  }
}



function ValorNuevaNota_Guardar(){
  /*
    PROPOSITO: Antes de guardar nueva nota, revisa que los valores del titulos
     y el contenido sean > 0, caso contrario buscara cual de los 2 no son > 0.
      Si tanto el contenido como el titulo
      tienen valores validos, la nota se guarda.
  */

    var tituloLength = RevisarValoresDeNota(     ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[0];
    var contenidoLength = RevisarValoresDeNota(  ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[1];

    var texto = ComprobarEspacios(  tituloLength  ,  contenidoLength, ValorNuevoTitulos()  ,  ValorNuevoContenidos()  );

    if (texto[0] == 0) {
      OcultarTodosLosMenuVentana();
      MarcarFaltaDeTitulo(nuevo_titulo_Doc);
      MarcarFaltaDeContenido(nuevo_contenido_Doc);
    } else {
          if (texto[1] == 0) {
            OcultarTodosLosMenuVentana();
            MarcarFaltaDeTitulo(nuevo_titulo_Doc);
          }
          if (texto[2] == 0) {
            OcultarTodosLosMenuVentana();
            MarcarFaltaDeContenido(nuevo_contenido_Doc);
          }
          if (texto[1] != 0 && texto[2] != 0) {
            GuardarNuevaNota();
          }
    }
}




function ValorNuevaNota_Regresar() {
  /*
    PROPOSITO: Antes de cerrar nueva nota, revisa que los valores del titulos
     y el contenido sean 0, caso contrario buscara cual de los 2 es mayor a 0
     y revisara si NO son espacios. Si son espacios se cierra sin problema,
     caso contrario consulta si se queire guardar.
  */
  var tituloLength = RevisarValoresDeNota(     ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[0];
  var contenidoLength = RevisarValoresDeNota(  ValorNuevoContenidos()  ,  ValorNuevoTitulos()  )[1];

  var texto = ComprobarEspacios(  tituloLength  ,  contenidoLength, ValorNuevoTitulos()  ,  ValorNuevoContenidos()  );
  if (texto[0] != 0) {
    // console.log("consulta");
    DesplegarConsulta(`${consultas["guardarNota"]}`, 0)
  } else {
    CerrarNuevaNota();
  }
}




function ValorNuevoTitulos(){
  // PROPOSITO: retorna el valor del textarea nuevo titulos
  return nuevo_titulo_Doc.value;
}

function ValorNuevoContenidos(){
  // PROPOSITO: retorna el valor del textarea nuevo contenidos
    return nuevo_contenido_Doc.value;
}


function LimpiarContenedorNuevaNota(){
  nuevo_titulo_Doc.value = "";
  nuevo_contenido_Doc.value = "";
}

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------




// EDITAR NOTA  //




function GuardarEditarNota(){
  titulos[notaActual] = ValorEditarTitulos();
  contenidos[notaActual] = ValorEditarContenidos();
  modosDeContenido[notaActual] = preModoDeContenido;


  SubirLocalStorage();
  BajarLocalStorage();
  CerrarEditarNota();

}


function ValorEditarNota_Guardar(){

  if (ValorEditarContenidos() == contenidos[notaActual]) {
    if (ValorEditarTitulos() == titulos[notaActual]) {
      GuardarEditarNota()
    }
  } else {
      var tituloLength = RevisarValoresDeNota(     ValorEditarContenidos()  ,  ValorEditarTitulos()  )[0];
      var contenidoLength = RevisarValoresDeNota(  ValorEditarContenidos()  ,  ValorEditarTitulos()  )[1];

      var texto = ComprobarEspacios(  tituloLength  ,  contenidoLength, ValorEditarTitulos()  ,  ValorEditarContenidos()  );

      if (texto[0] == 0) {
        OcultarTodosLosMenuVentana();
        MarcarFaltaDeTitulo(editar_titulo_Doc);
        MarcarFaltaDeContenido(editar_contenido_Doc);
      } else {
            if (texto[1] == 0) {
              OcultarTodosLosMenuVentana();
              MarcarFaltaDeTitulo(editar_titulo_Doc);
            }
            if (texto[2] == 0) {
              OcultarTodosLosMenuVentana(); 
              MarcarFaltaDeContenido(editar_contenido_Doc);
            }
            if (texto[1] != 0 && texto[2] != 0) {
              GuardarEditarNota();
            }
      }
  }
}

function ValorEditarNota_Regresar(){
   if (ValorEditarContenidos() == contenidos[notaActual]) {
    if (ValorEditarTitulos() == titulos[notaActual]) {
      GuardarEditarNota()
    }
  } else {
      var tituloLength = RevisarValoresDeNota(     ValorEditarContenidos()  ,  ValorEditarTitulos()  )[0];
      var contenidoLength = RevisarValoresDeNota(  ValorEditarContenidos()  ,  ValorEditarTitulos()  )[1];

      var texto = ComprobarEspacios(  tituloLength  ,  contenidoLength, ValorEditarTitulos()  ,  ValorEditarContenidos()  );

      if (texto[0] == 0) {
        OcultarTodosLosMenuVentana();
        MarcarFaltaDeTitulo(editar_titulo_Doc);
        MarcarFaltaDeContenido(editar_contenido_Doc);
      } else {
            if (texto[1] == 0) {
              OcultarTodosLosMenuVentana();
              MarcarFaltaDeTitulo(editar_titulo_Doc);
            }
            if (texto[2] == 0) {
              OcultarTodosLosMenuVentana(); 
              MarcarFaltaDeContenido(editar_contenido_Doc);
            }
            if (texto[1] != 0 && texto[2] != 0) {
              DesplegarConsulta(`${consultas["guardarNota"]}`, 2)
            }
      }
  }
}



function ValorEditarTitulos(){
  // PROPOSITO: retorna el valor del textarea editar titulos
  return editar_titulo_Doc.value;
}

function ValorEditarContenidos(){
  // PROPOSITO: retorna el valor del textarea editar titulos
  return editar_contenido_Doc.value;
}


function CargarEditarNota(){
  editar_titulo_Doc.value = `${titulos[notaActual]}`;
  editar_contenido_Doc.value = `${contenidos[notaActual]}`;
}

function LimpiarContenedorEditarNota(){
  editar_titulo_Doc.value = "";
  editar_contenido_Doc.value = "";
}


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------




// NOTA LECTURA //





function CargarNotaLectura(){
  // PROPOSITO: Imprime el texto del titulo y
  // el contenido. Tambien coloca el texto en el lado izquierdo
  // o en el centro, segun se indique
  if (modosDeContenido[notaActual] == false) {
    ContenidoTextoLeft(contenido_Doc)
  } else if (modosDeContenido[notaActual] == true) {
    ContenidoTextoCenter(contenido_Doc)
  }
  titulo_Doc.innerHTML = `${titulos[notaActual]}`;
  contenido_Doc.innerHTML = `${contenidos[notaActual]}`;

}

function LimpiarContenedorLectura(){
  // PROPOSITO: Elimina todo el texto del titulo
  // y el contenido de la lectura.
  titulo_Doc.innerHTML = "";
  contenido_Doc.innerHTML = "";
}



 function EliminarNota(){
   // PROPOSITO: Eliminar el contenido de las array con la funcion splice.

 	contenidos.splice(notaActual,1);
 	titulos.splice(notaActual,1);
 	fechas.splice(notaActual,1);
 	horas.splice(notaActual,1);
  modosDeContenido.splice(notaActual,1);

  CerrarLectura();
  SubirLocalStorage();
 }
