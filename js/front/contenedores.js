


function MostrarSoloContenedor_(contenedor){
  OcultarTodosLosContenedores();
  setTimeout(function () {
    MostrarContenedor_(contenedor);
  }, 1);
}


function MostrarContenedor_(contenedor){
  /*
    PROPOSITO: Muestra el contenedor **contenedor**.
    PRECONDICIONES: ninguna.
  */
  contenedor.style.marginTop = "0px";
}


function OcultarTodosLosContenedores(){
  /*
    PROPOSITO: Oculta todos los contenedores.
    PRECONDICIONES: ninguna
  */
  OcultarContenedor_(contenedor_lectura);
  OcultarContenedor_(contenedor_nueva_nota);
  OcultarContenedor_(contenedor_editar_nota);

}



function OcultarContenedor_(contenedor){
  /*
    PROPOSITO: Oculta el contenedor **contenedor**.
    PRECONDICIONES: ninguna.
  */
  contenedor.style.marginTop = "100vh";
}
