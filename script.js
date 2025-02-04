
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector("img"); // Seleciona a imagem
    image.classList.add("loaded"); // Adiciona a classe para o efeito de surgimento
});

//efeito das letras h1 e h2
function typeWriterEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = "";
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
  
    setTimeout(() => typeWriterEffect(title, "ARTE ENTRELAÇADA", 100), 500);
    setTimeout(() => typeWriterEffect(subtitle, "Ateliê by Jessica Luz", 100), 2000);
  });
  