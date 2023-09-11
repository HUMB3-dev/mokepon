
let ataqueJugador
let ataquePc

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", selecionarMascotaJugador);
  let botonFuego=document.getElementById('Fuego')
  botonFuego.addEventListener('click',ataqueFuego)
  let botonAgua=document.getElementById('Agua')
  botonAgua.addEventListener('click',ataqueAgua)
  let botonTierra=document.getElementById('Tierra')
  botonTierra.addEventListener('click',ataqueTierra)
  
}
function ataqueAleatorioPc() {
    let ataques=['Fuego','Agua','Tierra']
    let numeroAleatorio=aleatorio(0,3)
    ataquePc=ataques[numeroAleatorio] 
    crearMensaje()

     
 }
function selecionarMascotaJugador() {
  let mascotaJugador = document.getElementById("mascota-jugador");
  let mascotaSelecionada;
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  if (inputHipodoge.checked) {
    mascotaSelecionada = "Hipodoge";
    mascotaJugador.innerHTML = mascotaSelecionada;
  } else if (inputCapipepo.checked) {
    mascotaSelecionada = "Capipepo";
    mascotaJugador.innerHTML = mascotaSelecionada;
  } else if (inputRatigueya.checked) {
    mascotaSelecionada = "Ratigueya";
    mascotaJugador.innerHTML = mascotaSelecionada;
  } else {
    alert("Seleccione una mascota");
  }
  mascotaAleatoriaPc()
}
function mascotaAleatoriaPc(){
    let mascotaEnemigo=document.getElementById('mascota-enemiga')
    let mascotas=['Hipodoge','Capipepo','Ratigueya'] 
    mascotaPosicion=aleatorio(0,3)
    mascotaEnemigo.innerHTML =mascotas[mascotaPosicion]
    
    
}
function aleatorio(min,max){
   return Math.floor(Math.random() * max) + min;

}
function ataqueFuego() {
    ataqueJugador='Fuego'
    ataqueAleatorioPc()
    
    
}
function ataqueAgua() {
    ataqueJugador='Agua'
    ataqueAleatorioPc()
    
    
}
function ataqueTierra() {
    ataqueJugador='Tierra'
    ataqueAleatorioPc()
    
    
}
function crearMensaje() {
    let seccionSelect=document.getElementById('mensajes')
    let parrafo =document.createElement('p')
    parrafo.innerHTML='Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataquePc + '- PENDIENTE'
    seccionSelect.appendChild(parrafo)
    
}
function mostrarAtaques(){
    let spanAtqueJugador=document.getElementById('text-a-jugador')
    let spanAtaquePC=document.getElementById('text-a-pc')
    spanAtqueJugador.innerHTML=ataqueJugador
    spanAtaquePC.innerHTML=ataquePc
}
window.addEventListener("load", iniciarJuego);

