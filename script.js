var my_url = 'https://jsonplaceholder.typicode.com'; //server


function activarGet(){
	var my_id = document.getElementById('field1').value; //obtener el id del campo field1 en el html
	
	// Recibir usando GET
	$.ajax({
		url : my_url+'/posts/'+my_id,
		type : 'GET',
		dataType : 'json',
		success : function(json) {
			// Poner las respuestas en los campos del HTML
			document.getElementById("field1").value = json.id;
			document.getElementById("field2").value = json.title;
			document.getElementById("field3").value = json.body;
			
			document.getElementById("resp").innerHTML = 'Exito al consultar';
			document.getElementById("resp").style.color = "green";
				
		}, 
		error : function(){
			// Limpiar los campos del HTML
			document.getElementById("field1").value = "";
			document.getElementById("field2").value = "";
			document.getElementById("field3").value = "";
			
			document.getElementById("resp").innerHTML = 'Consulta fallida';
			document.getElementById("resp").style.color = "red";
		}
	});
}

function activarDelete(){
	var my_id = document.getElementById('field1').value; //obtener el id del campo field1 en el html
	
	// Recibir usando GET
	$.ajax({
		url : my_url+'/posts/'+my_id,
		type : 'DELETE',
		dataType : 'json',
		success : function(json) {
			// Limpiar los campos del HTML
			document.getElementById("field1").value = "";
			document.getElementById("field2").value = "";
			document.getElementById("field3").value = "";
			
			document.getElementById("resp").innerHTML = 'Eliminado correctamente';
			document.getElementById("resp").style.color = "green";
				
		}, 
		error : function(){
			// Limpiar los campos del HTML
			document.getElementById("field1").value = "";
			document.getElementById("field2").value = "";
			document.getElementById("field3").value = "";
			
			document.getElementById("resp").innerHTML = 'Consulta fallida';
			document.getElementById("resp").style.color = "red";
		}
	});
}

function activarPost(){
	var my_id = document.getElementById('field1').value; //obtener el id del campo field1 en el html
	var my_title = document.getElementById('field2').value;
	var my_body = document.getElementById('field3').value;
	
	// Enviar con POST
	var posting = $.post(my_url+'/posts/', {
		id : my_id,
		title : my_title,
		body : my_body
	});

	// Resultado
	posting.done(function(data) {
		document.getElementById("resp").innerHTML = 'Creado con POST correctamente (' + data.id + ')';
		document.getElementById("resp").style.color = "green";
		
	});
}

function activarPut(){
	var my_id = document.getElementById('field1').value; //obtener el id del campo field1 en el html
	var my_title = document.getElementById('field2').value;
	var my_body = document.getElementById('field3').value;
	
	// Enviar usando PUT
	$.ajax({
		url : my_url+'/posts/'+my_id,
		type : 'PUT',
		dataType : 'json',
		id : my_id,
		title : my_title,
		body : my_body,
		success : function(json) {
			// Limpiar los campos del HTML
			document.getElementById("field1").value = "";
			document.getElementById("field2").value = "";
			document.getElementById("field3").value = "";
			
			document.getElementById("resp").innerHTML = 'Metodo PUT enviado correctamente';
			document.getElementById("resp").style.color = "green";
				
		}, 
		error : function(){
			// Limpiar los campos del HTML
			document.getElementById("field1").value = "";
			document.getElementById("field2").value = "";
			document.getElementById("field3").value = "";
			
			document.getElementById("resp").innerHTML = 'Consulta fallida';
			document.getElementById("resp").style.color = "red";
		}
	});
}
