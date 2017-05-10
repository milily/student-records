var estudiantes = [];

//Constructor:
function Students(nombre, porcentajeTecnico, porcentajeHSC){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeHSC = porcentajeHSC;
}

function addStudent(){
    var nombreStudent = prompt("Nombre de Estudiante:");
    var porcentajeTecnicoStudent = prompt("Porcentaje Técnico:");
    var porcentajeHSCStudent = prompt("Porcentaje Habilidades Socio Emocionales:");
    var miDiv = document.getElementById("mostrar-pantalla");

    var estudiante = new Students(nombreStudent, porcentajeTecnicoStudent, porcentajeHSCStudent);
    estudiantes.push(estudiante);
    miDiv.innerHTML = "<p>" + "<span>" + "Nombre: " + "</span>"+nombreStudent + "<span>" + "<br>Porcentaje Técnico: "+ "</span>" + porcentajeTecnicoStudent + "%" + "<span>" +"<br>Porcentaje HSC: " + "</span>" + porcentajeHSCStudent + "%" + "</p>";
}

//Desarrollo del botón que debe imprimir en pantalla todas las estudiantes ingresadas con el botón AddStudent()

function printAll(){
    var miDiv = document.getElementById("mostrar-pantalla");
    miDiv.innerHTML = "";
    estudiantes.forEach(function(value){
    miDiv.innerHTML += "<p>" + "<span>" + "Nombre: "+ "</span>" + value.nombre + "<span>" + "<br>" + "Porcentaje Técnico: " + "</span>" + value.porcentajeTecnico + "%" + "<span>" + "<br>" + "Porcentaje HSE: "+ "</span>" + value.porcentajeHSC + "%" + "</p>";
    }); 
}