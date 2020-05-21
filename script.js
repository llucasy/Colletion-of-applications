function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach(function(letra, i) {
   setTimeout(function() {
    elemento.innerHTML += letra;
   }, 60 * i)

    });
  }
  
  const texto = document.querySelector('section p');
  typeWriter(texto);