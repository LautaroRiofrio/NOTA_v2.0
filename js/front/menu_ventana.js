




function OcultarTodosLosMenuVentana(){
  // PROPOSITO: Oculta todos los menu ventana (lectura,nueva nota y editar nota)
  estadoDelMenuVentana = 0;
  SubirMenuVentanaDe_(menu_ventana_lectura);
  SubirMenuVentanaDe_(menu_ventana_nueva_nota);
  SubirMenuVentanaDe_(menu_ventana_editar_nota);

  setTimeout(function () {

    DisplayMenuVentanaDe_( menu_ventana_lectura,0);
    DisplayMenuVentanaDe_( menu_ventana_nueva_nota,0);
    DisplayMenuVentanaDe_( menu_ventana_editar_nota,0);

  }, 300);
}


function SubirMenuVentanaDe_(menu_ventana){
  menu_ventana.style.marginTop = "-20vh";
}



function MostrarMenuVentanaDe_(menu_ventana){
  DisplayMenuVentanaDe_(menu_ventana, 1);
  setTimeout(function () {
    menu_ventana.style.marginTop = "40px";
  }, 10);
}





function DisplayMenuVentanaDe_(menu_ventana, i){
  if (i == 0) {
    menu_ventana.style.display = "none";
  } else {
    menu_ventana.style.display = "block";
  }
}
