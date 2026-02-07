// Script para pantalla de inicio
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const rhinaVideo = document.getElementById("rhinaVideo");

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerHTML = "💖";
  // Posición aleatoria horizontal
  heart.style.left = Math.random() * 80 + 10 + "%";
  heart.style.top = "70%";
  heart.style.fontSize = (Math.random() * 1.5 + 1.2) + "rem";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

function showHearts() {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 120);
  }
}

startBtn.addEventListener("click", () => {
  showHearts();
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
  }
});

console.log("Script cargado correctamente");
