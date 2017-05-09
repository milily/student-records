//Constructor:

var estudiantes = [];

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
	//var parrafo1 = document.createElement("p"); 
	
	var estudiante = new Students(nombreStudent, porcentajeTecnicoStudent, porcentajeHSCStudent);
	estudiantes.push(estudiante);

	miDiv.innerHTML = "Nombre: " + nombreStudent + "<br>Porcentaje Técnico: " + porcentajeTecnicoStudent + "<br>Porcentaje HSC: " + porcentajeHSCStudent;
	//miDiv.appendChild(parrafo1);
}

function printAll(){
	var miDiv = document.getElementById("mostrar-pantalla");
	miDiv.innerHTML = "";
	//var parrafo1 = document.createElement("p");
	estudiantes.forEach(function(value){
		miDiv.innerHTML += "Nombre: " + value.nombre + "<br>";
	});
	//miDiv.appendChild(parrafo1);
}