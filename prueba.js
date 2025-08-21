let altura;

do {
    altura = parseFloat(prompt("Ingrese su altura en metros")) 

    if (isNaN(altura) || altura <= 0 || altura >= 220) { 
        alert("Valores no aceptados")                    
    }

} while (isNaN(altura) || altura <= 0 || altura >= 220); 