// Validar contraseña
function validarPassword() {
  const pass = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (pass === "gym2026") {
    window.location.href = "gym2.html";
  } else {
    mensaje.textContent = "Contraseña incorrecta. Intenta de nuevo.";
    mensaje.style.color = "red";
  }
}

// Evaluar test y mostrar rutina
function evaluarTest() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;

  let rutina = "";

  if (q1 === "cansado") {
    rutina = "Hoy te recomiendo una rutina ligera de estiramientos y respiración.";
  } else if (q1 === "energético" && q2 === "30 min" && q3 === "cardio") {
    rutina = "Rutina de cardio intenso: saltos, burpees y carrera en el lugar.";
  } else if (q4 === "sí" && q5 === "avanzado") {
    rutina = "Rutina de fuerza con pesas: press de banca, sentadillas y dominadas.";
  } else {
    rutina = "Rutina básica de cuerpo libre: flexiones, sentadillas y planchas.";
  }

  localStorage.setItem("rutina", rutina);
  window.location.href = "rutina.html";
}

// Mostrar rutina en la página final
window.onload = function() {
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = localStorage.getItem("rutina");
  }
}
