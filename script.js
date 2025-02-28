let area = '';
let lenguaje = '';
let tecnologias = [];

function elegirArea(eleccion) {
    area = eleccion;
    document.getElementById("areaElegida").textContent = area === 'frontend' ? 'Front-End' : 'Back-End';
    
    document.getElementById("pregunta1").style.display = "none";
    mostrarLenguajes();
    document.getElementById("pregunta2").style.display = "block";
}

function mostrarLenguajes() {
    let opcionesHTML = '';
    
    if (area === "frontend") {
        opcionesHTML = `
            <button class="option" onclick="elegirLenguaje('React')">React</button>
            <button class="option" onclick="elegirLenguaje('Vue')">Vue</button>
        `;
    } else if (area === "backend") {
        opcionesHTML = `
            <button class="option" onclick="elegirLenguaje('C#')">C#</button>
            <button class="option" onclick="elegirLenguaje('Java')">Java</button>
        `;
    }

    document.getElementById("opcionesLenguajes").innerHTML = opcionesHTML;
}

function elegirLenguaje(eleccion) {
    lenguaje = eleccion;
    document.getElementById("pregunta2").style.display = "none";
    
    document.getElementById("areaEspecializacion").textContent = area === 'frontend' ? 'Front-End' : 'Back-End';
    document.getElementById("areaEspecializacion2").textContent = area === 'frontend' ? 'Front-End' : 'Back-End';
    document.getElementById("pregunta3").style.display = "block";
}

function seguirEspecializacion() {
    document.getElementById("pregunta3").style.display = "none";
    document.getElementById("pregunta4").style.display = "block";
}

function convertirseFullstack() {
    document.getElementById("pregunta3").style.display = "none";
    document.getElementById("pregunta4").style.display = "block";
}

// Función para agregar tecnologías
function agregarTecnologia() {
    let nuevaTecnologia = document.getElementById("nuevaTecnologia").value.trim();
    
    if (nuevaTecnologia && !tecnologias.includes(nuevaTecnologia)) {
        tecnologias.push(nuevaTecnologia);
        document.getElementById("nuevaTecnologia").value = "";  // Limpiar el campo de texto
        actualizarListaTecnologias();
    } else if (nuevaTecnologia === "") {
        alert("Por favor, ingresa una tecnología.");
    } else {
        alert(`Ya agregaste ${nuevaTecnologia}.`);
    }
}

// Función para actualizar la lista de tecnologías en pantalla
function actualizarListaTecnologias() {
    const lista = document.getElementById("listaTecnologias");
    lista.innerHTML = "";
    
    tecnologias.forEach(tecnologia => {
        let li = document.createElement("li");
        li.textContent = tecnologia;
        lista.appendChild(li);
    });
}

function finalizar() {
    let mensaje = `¡Felicidades! Has decidido especializarte en el área de ${area} y aprender ${lenguaje}. `;
    mensaje += `Además, te gustaría aprender las siguientes tecnologías: ${tecnologias.length > 0 ? tecnologias.join(', ') : 'Ninguna'}.`;

    document.getElementById("pregunta4").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("mensajeFinal").textContent = mensaje;
}
