
       // Pega o valor do input que e 0 a 23
         /*   const inputElement = document.getElementById("pesoimc");
            const pesoDigitado = parseInt(inputElement.value);
                    
            const resultadopeso = document.getElementById("verifyresultado")
        }
            
            if(pesoDigitado => 100){
resultadopeso.classList.add("acima do peso");
}
    
            ;
            
            
     const inputElement = document.getElementById("alturaimc");
            const alturaDigitada= parseInt(inputElement.value);
            const resultadoalturaElement = document.getElementById("alturaresultado");
            
            resultadoElement.textContent = `${saudacao} (Hora: ${horaDigitada}:00)`;
        }
        
        // Supondo que esteja dentro de uma função ou evento
        */
    function scriptImc() {
      let peso = Number(document.getElementById('input1').value);
      let resultado = document.getElementById('resultado');
      if (peso > 200) {
        resultado.innerHTML = "Acima do peso";
      } else {
        resultado.innerHTML = "Peso: " + peso;
      }
    }
/*
function scriptImc() {
  let peso = Number(document.getElementById("input1").value);
  if (peso > 200) {
    alert("Acima do peso");
  }
  */
}

}