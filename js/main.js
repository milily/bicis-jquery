$(document).ready(function () {
    var nombre = /[0-9]/;
	var apellido = /[0-9]/;
	var valEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	    $(".submit-btn").click(function (){
	        if( $("#name").val() == "" || nombre.test($("#name").val()) || $("#name").val().charAt(0) != $("#name").val().charAt(0).toUpperCase()){
	            $("#name").focus().after("<span class='error'>Ingrese su nombre/primera mayúscula/sin números</span>");
	            return false;
	        }else if( $("#lastname").val() == "" || apellido.test($("#lastname").val()) || $("#lastname").val().charAt(0) != $("#lastname").val().charAt(0).toUpperCase()){
	            $("#lastname").focus().after("<span class='error'>Ingrese su apellido/primera mayúscula/sin números</span>");
	            return false;
			}else if( $("#input.email").val() == "" || !valEmail.test($("#input-email").val()) ){
	            $("#input-email").focus().after("<span class='error'>Ingrese un email válido</span>");
	            return false;
	        }else if( $("#input-password").val() == "" || $("#input-password").val() === "123456" || $("#input-password").val() === "098765" || $("#input-password").val().length < 6  ){
	            $("#input-password").focus().after("<span class='error'>Ingrese una contraseña válida que no sea 123456/098765 o que tenga menos de 6 caracteres</span>");
	            return false;
	        }
	    });
    
});
