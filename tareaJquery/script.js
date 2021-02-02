$(document).ready(function () {
	$('#inicio').show(1000);
	

	$('#btn-1').click(function (e) {
		e.preventDefault();
		$('#inicio').remove();
		$('#fondo-form').show();
		listarContactos();
	
	});
	
	$('#boton').click(function (e) {
		e.preventDefault();
		$('#boton').remove();
		$('#registro').show();
		listarContactos();
	
	});

});

class Contacto {
	constructor (cNombre, cApellido1, cApellido2, cNumero) {
		this.nombre = cNombre;
		this.apellido1 = cApellido1;
		this.apellido2 = cApellido2;
		this.numero = cNumero;
	}

	toString() {
		return "<br/> - " + this.nombre + " " + this.apellido1 + " " +  this.apellido2 + "...tlf: " + this.numero +"<br/>";
	}
}
var agenda = [];
var contContactos = 0;

function agregarPersona() {
	//var nombre = document.getElementById("nombre").value;
	var nombre = $("#nombre").val();
	var apellido1 = $("#apellido1").val();
	var apellido2 = $("#apellido2").val();
	var numero = $("#numero").val();
	
	if (isNaN(nombre)&& isNaN(apellido1)&& isNaN(apellido2) && !isNaN(numero)) {
        agenda.push(new Contacto(nombre, apellido1, apellido2, numero));
		contContactos++;
		console.log(agenda)

		document.getElementById("nombre").value = "";
		document.getElementById("apellido1").value = "";
		document.getElementById("apellido2").value = "";
		document.getElementById("numero").value = "";

    } 
    if(!isNaN(nombre)|| !isNaN(apellido1)|| !isNaN(apellido2) || isNaN(numero))
    alert("Los datos introducidos son incorrectos. Solo letras en el nombre y los apellidos y solo números en el teléfono");
}

function listarContactos() {
	document.getElementById("divInfo").innerHTML= "";
	agenda.sort();
	for (var i = 0; i < contContactos; i++) {
		document.getElementById("divInfo").innerHTML += agenda[i].toString();
	}

}



