const contenedor_inicio = document.querySelector(".inicio");
const contenedor_lectura = document.querySelector(".lectura");
const contenedor_nueva_nota = document.querySelector(".nueva_nota");
const contenedor_editar_nota = document.querySelector(".editar_nota");



const titulo_Doc = document.querySelector(".titulo");
const contenido_Doc = document.querySelector(".contenido");

const nuevo_titulo_Doc = document.querySelector(".nuevo_titulo");
const nuevo_contenido_Doc = document.querySelector(".nuevo_contenido");

const editar_titulo_Doc = document.querySelector(".editar_titulo");
const editar_contenido_Doc = document.querySelector(".editar_contenido");




const boton_nueva_nota = document.querySelector(".boton_nueva_nota");
const regresar_lectura_inicio = document.getElementById("regresar_lectura_inicio");
const regresar_nueva_nota_inicio = document.getElementById("regresar_nueva_nota_inicio");
const regresar_editar_nota_lectura = document.getElementById("regresar_editar_nota_lectura");



const opciones_inicio_Doc = document.getElementById("opciones_inicio");
const opciones_lectura_Doc = document.getElementById("opciones_lectura");
const opciones_nueva_nota_Doc = document.getElementById("opciones_nueva_nota");
const opciones_editar_nota_Doc = document.getElementById("opciones_editar_nota");


const menu_ventana_incio = document.getElementById("menu_ventana_incio");
const menu_ventana_lectura = document.getElementById("menu_ventana_lectura");
const menu_ventana_nueva_nota = document.getElementById("menu_ventana_nueva_nota");
const menu_ventana_editar_nota = document.getElementById("menu_ventana_editar_nota");


const editar_nota_boton = document.getElementById("editar_nota_boton");
const eliminar_nota_boton = document.getElementById("eliminar_nota_boton");

const guardar_nueva_nota_boton = document.getElementById("guardar_nueva_nota_boton");
const centrar_nueva_nota_boton = document.getElementById("centrar_nueva_nota_boton");

const centrar_editar_nota_boton = document.getElementById("centrar_editar_nota_boton");
const guardar_editar_nota_boton = document.getElementById("guardar_editar_nota_boton");


const consulta_Doc = document.querySelector(".consulta");

var consulta_boton_SI;
var consulta_boton_NO;


const continuarNota_Doc = document.querySelector(".continuarNota");
const si_continuar_Doc = document.getElementById("si_continuar");
const no_continuar_Doc = document.getElementById("no_continuar");



// var id = setInterval(hola,1000);
// clearInterval(id);


var estadoDelMenuVentana = 0;

var notaActual = null;
var titulos = [];
var contenidos = [];
var modosDeContenido = [];
// var fechas = ["18/4/2021"];
// var horas = ["01:16 hs"];

var fechas = [];
var horas = [];
var preModoDeContenido = false;




var consultas = {
    guardarNota:      `<p>¿Desea guardar la nota?</p><br><button class="button" id="SI">SI</button><button id="NO">NO</button>`,
    eliminarNota:     `<p>¿Desea eliminar la nota?</p><br><button class="button" id="SI">SI</button><button id="NO">NO</button>`,
};
// `${consultas[array[i]]}`






boton_nueva_nota.addEventListener("click",function(){
  MostrarContenedor_(contenedor_nueva_nota);
  OcultarTodosLosMenuVentana();
  IzquierdaContenido(nuevo_contenido_Doc, centrar_nueva_nota_boton);
});
regresar_lectura_inicio.addEventListener("click",function(){
  CerrarLectura();
});
regresar_nueva_nota_inicio.addEventListener("click",function(){
  ValorNuevaNota_Regresar();
  // CerrarNuevaNota();
});
regresar_editar_nota_lectura.addEventListener("click",function(){
  // CerrarEditarNota();
  ValorEditarNota_Regresar();
});

opciones_lectura_Doc.addEventListener("click",function(){
  if (estadoDelMenuVentana == 0) {
    estadoDelMenuVentana++;
    MostrarMenuVentanaDe_(menu_ventana_lectura);
  } else {
    estadoDelMenuVentana = 0;
    OcultarTodosLosMenuVentana();
  }
});
opciones_nueva_nota_Doc.addEventListener("click",function(){
  if (estadoDelMenuVentana == 0) {
    estadoDelMenuVentana++;
    MostrarMenuVentanaDe_(menu_ventana_nueva_nota);
  } else {
    estadoDelMenuVentana = 0;
    OcultarTodosLosMenuVentana();
  }
});
opciones_editar_nota_Doc.addEventListener("click",function(){
  if (estadoDelMenuVentana == 0) {
    estadoDelMenuVentana++;
    MostrarMenuVentanaDe_(menu_ventana_editar_nota);
  } else {
    estadoDelMenuVentana = 0;
    OcultarTodosLosMenuVentana();
  }
});





editar_nota_boton.addEventListener("click",function(){
  MostrarContenedor_(contenedor_editar_nota);
  OcultarTodosLosMenuVentana();
  CargarEditarNota();
});
eliminar_nota_boton.addEventListener("click",function(){
  // EliminarNota();
  DesplegarConsulta(`${consultas["eliminarNota"]}`, 1)
});
guardar_nueva_nota_boton.addEventListener("click",function(){
  GuardarNuevaNota();
  // ValorNuevaNota_Guardar();
});
centrar_nueva_nota_boton.addEventListener("click",function(){
  // centrar nueva nota
  ModificarModoDeContenido();
  OcultarTodosLosMenuVentana();
});
centrar_editar_nota_boton.addEventListener("click",function(){
  // centrar editar nota
  ModificarModoDeContenido();
  OcultarTodosLosMenuVentana();
});
guardar_editar_nota_boton.addEventListener("click",function(){
  // GuardarEditarNota();
  ValorEditarNota_Guardar();
});
