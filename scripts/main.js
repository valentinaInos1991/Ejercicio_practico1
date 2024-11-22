//Manejo del Entorno de Ejecución y Consola
//Implementa el uso de console.log() en varias partes del proyecto para //depuración y mensajes informativos.

let nombreHospital = "Hospital Cordis";
const path = window.location.pathname;


console.log("Página cargada correctamente");
console.log("Bienvenido al " + nombreHospital);

if (path === "/pages/index.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de Inicio");
    alert("Presione el botón 'Reservar tu hora' para ingresar y validar tus datos ")
}

if (path === "/pages/equipo.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de equipo");
    alert("Presione el botón 'VER' para ver médicos con más de 5 años de experiencia")
}

if (path === "/pages/contacto.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de contacto");
}

//Manejo de Variables, Operadores y Prompt (Incluye try catch)
document.addEventListener("DOMContentLoaded", () => {
    const botonValidar = document.getElementById("validarDatos");
    
    if (botonValidar) {
        botonValidar.addEventListener("click", () => {
            let nombre = prompt("Ingrese su Nombre");
            let email = prompt("Ingrese su Email");
            let telefono = prompt("Ingrese su Teléfono");

debugger;
            try {
                // Validación del nombre
                if (typeof nombre !== "string" || nombre.trim() === "") {
                    throw new Error("El nombre es inválido o está vacío."); // Lanza un error
                }

                // Validación del email
                if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
                    throw new Error("El email ingresado es inválido.");
                }

                // Validación del teléfono (aquí usamos try/catch anidado)
                try {
                    if (typeof telefono !== "string" || telefono.trim() === "" || isNaN(telefono)) {
                        throw new Error("El teléfono ingresado debe contener solo números.");
                    }
                } catch (error) {
                    alert("Error en el teléfono: " + error.message); // Mensaje amigable al usuario
                    console.error(error); // Detalle técnico en consola
                }

                // Si todo es válido, mostramos el mensaje
                alert("Datos válidos ingresados:\n" +
                    "Nombre: " + nombre + "\n" +
                    "Email: " + email + "\n" +
                    "Teléfono: " + telefono);
            } catch (error) {
                // Manejo de errores generales
                alert("Ocurrió un error al validar los datos: " + error.message);
                console.error(error); // Mensaje técnico para depuración
            }
        });
    } else {
        console.error("El botón con ID 'validarDatos' no existe en el DOM.");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    // Lista de doctores
    const doctores = [
        { nombre: "Dra. María Isabel Concha Ríos", especialidad: "Cardiología", experiencia: 10 },
        { nombre: "Dr. José Holuigue Barros", especialidad: "Médico Cardiólogo Cirujano", experiencia: 3 },
        { nombre: "Dr. Gonzalo Ibáñez Vial", especialidad: "Cardiología", experiencia: 7 },
        { nombre: "Dra. Beatriz Mejía Aravena", especialidad: "Médico Pediatra Cardiólogo", experiencia: 15 }
    ];

    // Selecciona el contenedor en el DOM
    const equipoMedicoDiv = document.getElementById("equipo-medico");

    // Recorre la lista de doctores
    doctores.forEach(doctor => {
        if (doctor.experiencia > 5) {
            const doctorCard = document.createElement("div");
            doctorCard.classList.add("doctor-card");
            doctorCard.innerHTML = `
                <h3>${doctor.nombre}</h3>
                <p>Especialidad: ${doctor.especialidad}</p>
                <p>Años de experiencia: ${doctor.experiencia}</p>
            `;
            // Agregar el elemento al contenedor
            equipoMedicoDiv.appendChild(doctorCard);
        }
    });
});

  