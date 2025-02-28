alert("Es momento de elegir tu camino como desarrollador");

const especialidad = parseInt(prompt("Si has decidido especializarte en Front-End ingresa 1, pero si quieres especializarte en Back-End ingresa 2"));

let area;
if (especialidad === 1) {
    area = "Front-End";
    alert("Genial, ya quiero ver todos los diseños maravillosos que harás");
    const programa1 = parseInt(prompt("¿Te gustaría aprender React (ingresa 1) o aprender Vue (ingresa 2)?"));
    if (programa1 === 1) {
        alert("React es una excelente opción");
    } else if (programa1 === 2) {
        alert("Vue es una excelente opción");
    } else {
        alert("Opción no válida.");
    }
} else if (especialidad === 2) {
    area = "Back-End";
    alert("Genial, ya quiero ver todo lo increíble que harás");
    const programa2 = parseInt(prompt("¿Te gustaría aprender C# (ingresa 1) o aprender Java (ingresa 2)?"));
    if (programa2 === 1) {
        alert("C# es una excelente opción");
    } else if (programa2 === 2) {
        alert("Java es una excelente opción");
    } else {
        alert("Opción no válida.");
    }
} else {
    alert("Opción no válida.");
}

const especialidad2 = parseInt(prompt(`Y, ¿te gustaría profundizar en ${area} (ingresa 1) o has pensado en explorar todos los caminos y convertirte en desarrollador Fullstack (ingresa 2)?`));

if (especialidad2 === 1) {
    alert(`¡Excelente! Llegarás a ser un experto en ${area}.`);
} else if (especialidad2 === 2) {
    alert("¡Prepárate para ser un desarrollador Fullstack experto!");
} else {
    alert("Opción no válida.");
}
let tecnologias = [];
let respuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para salir.").toLowerCase();

while (respuesta === "ok") {
    let tecnologia = prompt("Escribe el nombre de la tecnología que te gustaría aprender:");
    tecnologias.push(tecnologia);
    alert(`¡Genial! ${tecnologia} es una tecnología muy interesante.`);
    respuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Responde 'ok' para continuar o cualquier otra cosa para salir.").toLowerCase();
}

alert("¡Gracias por participar! Las tecnologías que te gustaría aprender son: " + tecnologias.join(", ") + ".");


