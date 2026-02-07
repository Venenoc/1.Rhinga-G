// Script para pantalla de inicio
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const rhinaVideo = document.getElementById("rhinaVideo");

startBtn.addEventListener("click", () => {
  console.log("Botón clickeado: Empezar el quiz");
  
  // Mostrar el video
  rhinaVideo.classList.add("show");
  
  // Ocultar el botón
  startBtn.style.display = "none";
  
  // Reproducir video sin cambiar de pantalla
  rhinaVideo.play().catch(err => console.log("Error al reproducir video:", err));
  
  // Cambiar de pantalla cuando termine el video
  rhinaVideo.onended = () => {
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
  };
});

console.log("Script cargado correctamente");
