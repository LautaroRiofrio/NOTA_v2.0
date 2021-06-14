


function BajarLocalStorage(){
  if (localStorage.getItem("contenidos")) {
    titulos = JSON.parse(localStorage.getItem("titulos"));
    contenidos = JSON.parse(localStorage.getItem("contenidos"));
    fechas = JSON.parse(localStorage.getItem("fechas"));
    horas = JSON.parse(localStorage.getItem("horas"));
    modosDeContenido = JSON.parse(localStorage.getItem("modosDeContenido"));
  } else {
    CrearLocalStorage();
  }
}

function SubirLocalStorage(){
  localStorage.setItem("titulos", JSON.stringify(titulos));
  localStorage.setItem("contenidos", JSON.stringify(contenidos));
  localStorage.setItem("fechas", JSON.stringify(fechas));
  localStorage.setItem("horas", JSON.stringify(horas));
  localStorage.setItem("modosDeContenido", JSON.stringify(modosDeContenido));
}


function CrearLocalStorage(){
  localStorage.setItem("titulos",JSON.stringify([]));
  localStorage.setItem("contenidos",JSON.stringify([]));
  localStorage.setItem("fechas",JSON.stringify([]));
  localStorage.setItem("horas",JSON.stringify([]));
  localStorage.setItem("modosDeContenido",JSON.stringify([]));
}
