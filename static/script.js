
document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector("img"); 
    if (image) { 
      image.classList.add("loaded");
  }
});

function typeWriterEffect(element, text, speed) { //efeito das letras h1 e h2
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
  
  document.addEventListener("DOMContentLoaded", function () {  // Seleciona os elementos para o efeito de digitação
   
    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");
    const aboutTitle = document.querySelector(".main-title");
    const contactTitle = document.querySelector(".title");
    const modelsTitle = document.querySelector(".models-title");
    const crieContaTitle = document.querySelector(".crieConta-title");
    const entrarTitle = document.querySelector(".entrar-title");

    // Aplica o efeito de digitação apenas se o elemento existir
    if (title) {
        setTimeout(() => typeWriterEffect(title, "ARTE ENTRELAÇADA", 100), 500);
    }
    if (subtitle) {
        setTimeout(() => typeWriterEffect(subtitle, "Ateliê by Jessica Luz", 100), 2000);
    }
    if (aboutTitle) {
        typeWriterEffect(aboutTitle, "Sobre Nós", 100);
    }
    if (contactTitle) {
        setTimeout(() => typeWriterEffect(contactTitle, "Contatos", 100), 500);
    }
    if (modelsTitle) {
        setTimeout(() => typeWriterEffect(modelsTitle, "Modelos", 100), 500);
  }
    if (crieContaTitle) {
        setTimeout(() => typeWriterEffect(crieContaTitle, "Crie sua Conta", 100), 500);
   }
    if (entrarTitle) {
      setTimeout(() => typeWriterEffect(entrarTitle, "Entrar", 100), 500);
}
});

  function abrirImagem(elemento) {
    var lightbox = document.getElementById('lightbox');
    var imagemAmpliada = document.getElementById('imagemAmpliada');
    imagemAmpliada.src = elemento.src;
    lightbox.style.display = 'flex';
}

function fecharLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
