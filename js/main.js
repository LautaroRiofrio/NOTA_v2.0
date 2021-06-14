

window.onload = () => {
  BajarLocalStorage();
  GenerarContenedorInicio();
}


function GenerarContenedorInicio(){
  /*
  PROPOSITO: Muestra solo el contenedor de inicio, genera las notas y
  las muestra en el mismo.
  */
  GenerarPreviewDeNota(contenedor_inicio, titulos, fechas, horas, 0);
  MostrarSoloContenedor_(contenedor_inicio);
}





function GenerarPreviewDeNota(contenedor, titulo, fecha, hora, num){
  /*
  PROPOSITO: Genera las preview de nota y las muestra en el
  contenedor de inicio.
   */
  // limpia el contenedor de inicio
  contenedor.innerHTML = "";
  //genera las variables a utilizar
  var copia_titulos = titulo;
  var copia_fechas = fechas;
  var copia_horas = horas;
  var notas = [];

  // Guarda el valor de las variables en un array como valores HTML.
  for(let i = 0; i < copia_titulos.length; i++){
      notas.push(`
         <div class="nota" onclick="abrirNota(${i})">
           <div class="preview_fecha">
             <b><div class="fecha">${copia_fechas[i]}</div></b>
             <div class="hora">${copia_horas[i]}hs</div>
           </div>
           <div class="preview_nota">
             <div class="preview_titulo">${copia_titulos[i]}</div>
           </div>
         </div>
         `);
  }
  // Voltea la variable.
  notas.reverse();
  // Imprime los valores HTML en el contenedor de inicio
  for(let i = 0; i < (notas.length +1); i++){


    if (i <= (notas.length - 1)) {
      contenedor.innerHTML += ` ${notas[i]}`;
    } else {
      contenedor.innerHTML +=
      `
      <div class="ultima_nota"></div>
      `
    }
  }
}








function abrirNota(num){
  notaActual = num;

  OcultarTodosLosContenedores();
  MostrarContenedor_(contenedor_lectura);

  CargarNotaLectura();
}




// function abrirNota(num, contenedor){
//   // PROPOSITO: Abre la nota e imprime el contenido y el
//   // titulo en la misma.
//   notaActual = num;

//   OcultarTodosLosContenedores();

//   if (contenedor == 0) {
//     MostrarContenedor_(contenedor_lectura)
//   } else if (contenedor == 1) {
//     MostrarContenedor_(contenedor_borrador_nota)
//   } else if (contenedor == 2) {
//     MostrarContenedor_(contenedor_papelera_nota)
//   }

//   CargarNotaLectura();

//   // MostrarSoloContenedorLectura();
//   // LimpiarContenedorLectura();


// }
