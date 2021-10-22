function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	

			if(usuario == "caramelo" && Contraseña == "0203")
			{
				alert("Usuario y Contraseña validos");
				window.open("pesogalactico.html");
			}
			else
			{
				alert("cheque sus datos pleace");
			}
		}