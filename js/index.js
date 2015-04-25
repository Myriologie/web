function reproducirSonido(camino){
  var sonido = new Audio();
  sonido.src = camino;
  sonido.play();
}
//cuando el documento este totalmente cargado, llamara lo que contiene esta función
$(document).ready(function(){

});
