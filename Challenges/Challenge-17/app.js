const hora = new Date().toLocaleTimeString()


function ActualizarHora() {
    
    document.writeln(`${hora}`)
} 

window.setInterval(ActualizarHora(), 1000);

