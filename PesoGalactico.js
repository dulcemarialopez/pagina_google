function CalcularPeso() {
	//declarar variables
	var M, G, P;
	//Recuperar los valores de las cajas de texto y asignarlo
	M=parseInt(document.getElementById("MasaC").value);
	G=parseInt(document.getElementById("Gra").value);
	//Realizar la Operacion 
	P=(M*G)/9.8
	//Mostrar el resultado en la caja de texto
	document.getElementById("Res").value=P;
}
function Nuevo(){
	document.getElementById("MasaC").value="";
	document.getElementById("Gra").value="";
	document.getElementById("Res").value="";
}