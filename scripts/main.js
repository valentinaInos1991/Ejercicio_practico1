//Manejo del Entorno de Ejecución y Consola
//Implementa el uso de console.log() en varias partes del proyecto para //depuración y mensajes informativos.

let nombreHospital = "Hospital Cordis";
const path = window.location.pathname;


console.log("Página cargada correctamente");
console.log("Bienvenido al " + nombreHospital);

if (path === "/pages/index.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de Inicio");
    //alert("Presione el botón 'Reservar tu hora' para ingresar y validar tus datos ")
    //alert("Diríjase a la página de equipo médico para ver en la interfaz el uso de destructuring")
}

if (path === "/pages/equipo.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de equipo");
    //alert("Presione el botón 'VER' para ver médicos con más de 5 años de experiencia")
    //alert("Diríjase a las cards de doctores y presione el botón 'Info doctor' para ver la información del destructuring")
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

    //Objetos json anidados doctores
const doctores = [
    {
    nombre: "María Isabel Concha Ríos",
    especialidad: "Cardiología",
    experiencia: 10,
    disponibilidad: true,
    contacto: {
        email: "maria.concha@hospitalcordis.com",
        telefono: "+56 9 5551234"
    },
    horarios: ["Lunes 8:00 - 18:00 hrs", "Martes 14:00 - 18:00 hrs"],
    },
    {
    nombre: "José Holuigue Barros",
    especialidad: "Médico Cardiólogo Cirujano",
    experiencia: 3,
    disponibilidad: false,
    contacto: {
        email: "jose.holuigue@hospitalcordis.com",
        telefono: "+56 9 5552345"
    },
    horarios: ["Lunes 10:00 - 15:00 hrs", "Miércoles 14:00 - 18:00 hrs"],
    },
    {   
    nombre: "Gonzalo Ibáñez Vial",
    especialidad: "Cardiología",
    experiencia: 7,
    disponibilidad: true,
    contacto: {
        email: "gonzalo.ibanez@hospitalcordis.com",
        telefono: "+56 9 5553456"
    },
    horarios: ["Martes 10:00 - 15:00 hrs", "Jueves 14:00 - 18:00 hrs"],
    }
];
//Destructuring para acceder a las propiedades de los objetos json 
const{nombre, especialidad, experiencia, disponibilidad, contacto:{email}, contacto:{telefono}} = doctores[0];
console.log(`Doctor:${nombre}, Especialidad:${especialidad}, Disponibilidad:${disponibilidad}, Email:${email}, Telefono:${telefono}`);

//Mostrar datos dentro del modal info doctor
const infoModal = document.getElementById('info-dra-maria');
const disponibilidadTexto = disponibilidad ? "Disponible" : "No disponible";
infoModal.innerHTML = `<h2>Nombre: ${nombre}</h2><p>Especialidad: ${especialidad}</p><p>Email: ${email}</p><p>Teléfono: ${telefono}</p><p>Disponibilidad: ${disponibilidadTexto}</p>`;

//Clonación de objetos JSON
const doctorCopia = {...doctores[0]};
doctorCopia.nombre ="Emilia Farías";
console.log("Doctor original: ", doctores[0]);
console.log("Doctor copia", doctorCopia);

//Merge o fusión de dos objetos JSON
const serviciosMedicos= {oftalmologia: true, dermatologia: true};
const infoCompleta = {...doctores[0], ...serviciosMedicos};
console.log("Información completa: ", infoCompleta);

//Stringify: mostrar datos de doctores en consola
doctores.forEach(doc => {
console.log("Stringify: "+JSON.stringify(doc));
});

//Paso 4: Implementación de Estructuras de Datos - Gestión de Arreglos:
doctores.push({ nombre: "Nuevo Doctor", especialidad: "Dermatología", experiencia: 3 });
doctores.pop(); // Elimina el último elemento
const encontrado = doctores.find(doc => doc.nombre === "Gonzalo Ibáñez Vial");
console.log("Doctor encontrado",encontrado);

//2.Simular una Pila para Citas:
const citas = [];
citas.push("Cita médica 1");
citas.push("Cita médica 2");
console.log("Ultima cita: "+citas.pop()); // Atiende la última cita

//3. Simular una Cola para Pacientes:
const pacientes = [];
pacientes.push("Paciente 1");
pacientes.push("Paciente 2");
console.log("Primer paciente: " +pacientes.shift()); // Atiende al primer paciente

//Paso 5: Implementación de Algoritmos - 1. Búsqueda de Doctores:
const buscarDoctor = nombre => doctores.find(doc => doc.nombre === nombre);
console.log("Buscar doctor por nombre: ",buscarDoctor("José Holuigue Barros"));

//2.Ordenamiento por Experiencia:
doctores.sort((a, b) => b.experiencia - a.experiencia);
console.log("Ordenamiento por Experiencia: ",doctores);
}

if (path === "/pages/contacto.html") {
    console.log("Ruta actual:", window.location.pathname);
    console.log("Estás en la página de contacto");
}

//Manejo de Variables, Operadores y Prompt (Incluye try catch)
/*document.addEventListener("DOMContentLoaded", () => {
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
});*/


//Implementación currying
//Primero se define la funcion con dos paramentros
function calcularCosto(consultas, precioPorConsulta) {
    return consultas * precioPorConsulta;
  }

  //Luego la funcion la trasformamos para que cada argumento sea tomado por separado
  function calcularCosto(consultas) {
    return function(precioPorConsulta) {
      return consultas * precioPorConsulta;
    };
  }
  //Luego se puede usar
  const calcularPara3Consultas = calcularCosto(5); // Fija el número de consultas
  console.log("Valor de consulta currying: " ,calcularPara3Consultas(7500)); 

//Usar la función flecha para simplificar la sintaxis en una función que calcule el tiempo promedio de espera de los pacientes. 
//Arreglo ejemplos tiempos de espera en minutos
const tiemposEspera = [10, 15, 20, 30, 40, 50, 60]

//Función flecha para calcular el tiempo promedio
const calcularTiempoPromedio = (tiempos) => tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
console.log("Cáclulo de tiempo promoedio en función flecha",calcularTiempoPromedio([10, 18, 25])); // Salida: 21.67 

// Recursión para Total de Horas de Consulta (La recursión se detiene una vez que el largo del arreglo llega 0)
const calculaHorasTotales = (horas, indice = 0) => {
    if (indice === horas.length) return 0;
    return horas[indice] + calculaHorasTotales(horas, indice + 1);
    };
    console.log("Cálculo de horas totales: ",calculaHorasTotales([2, 3, 6, 2])); // Salida: 14

// Integra composición de funciones para aplicar descuentos a los costos de consultas en base a la cantidad de consultas realizadas.
const aplicarDescuento = costo => descuento => costo - (costo * descuento);
const calcularCostoConDescuento = (costo) => aplicarDescuento(costo)(0.1);
console.log("Cálculo de costo con descuento: ",calcularCostoConDescuento(36000)); 

//2. Programación Orientada a Eventos y Programación Asíncrona - Captura eventos del usuario en la página de Contacto:
//Implementa un listener para capturar el envío del formulario y muestra un mensaje de confirmación.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const mensaje = document.getElementById("mensaje-confirmacion");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que el formulario realice una acción por defecto
      console.log("Formulario enviado"); // Verifica que el evento se captura
      mensaje.textContent = "Formulario enviado con éxito.";
    });
  });
  
//Evento Personalizado
const eventoPaciente = new Event("nuevoPaciente");
document.addEventListener("nuevoPaciente", () => {
console.log("Un nuevo paciente ha llegado.");
});
document.dispatchEvent(eventoPaciente);

//Implementa una función async/await para simular una llamada a una API REST que obtenga los datos de los doctores.
async function obtenerDoctores() {
    try {
    const response = await fetch("https://api.ejemplo.com/doctores");
    if (!response.ok) throw new Error("Error al obtener datos");
    const datos = await response.json();
    console.log(datos);
    } catch (error) {
    console.error("Error:", error.message);
    }
    }
    obtenerDoctores();


    //3. Programación Orientada a Objetos en JavaScript - Implementa una clase Doctor con las propiedades nombre, especialidad, y añoscde experiencia.
    class Doctor {
    constructor(nombre, especialidad, experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this._experiencia = experiencia;
    }
    get experiencia() {
    return this._experiencia;
    }
    set experiencia(valor) {
    if (valor < 0) throw new Error("La experiencia no puede ser negativa.");
    this._experiencia = valor;
    }
    mostrarInformacion() {
    return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this.experiencia} años.`;
    }
    }

//Crar subclase cirujano
class Cirujano extends Doctor {
constructor(nombre, especialidad, experiencia, operaciones) {
super(nombre, especialidad, experiencia);
this.operaciones = operaciones;
}
mostrarInformacion() {
return `Cirujano ${this.nombre}, Especialidad: ${this.especialidad}, Operaciones: ${this.operaciones}.`;
}
}
const cirujano = new Cirujano("María Isabel", "Cardiología", 15, 38);
console.log("Mostrando datos clase doctor: ",cirujano.mostrarInformacion());