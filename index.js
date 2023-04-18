var imgBuscado = document.getElementById("imagenJuegoB");
var images = ["./assets/masBuscados/Tomb_Raider_1.webp", "./assets/masBuscados/Resident-Evil_2.jpg","./assets/masBuscados/roblox_3.jpg", "./assets/masBuscados/Fifa23_4.webp"];
let i = 0;
for (let i = 0; i < array.length; i++) {
    

    
    setInterval(() => {
        imgBuscado.src = images[i];
    },3000)
    
    if(i===images.length){
        i=0;
    }
    
}
    


/*var btnNext = document.getElementById("next");
var imgBuscado =document.getElementById("imagenJuegoB");


var images = ["./assets/masBuscados/Tomb_Raider_1.webp", "./assets/masBuscados/Resident-Evil_2.jpg","./assets/masBuscados/roblox_3.jpg", "./assets/masBuscados/Fifa23_4.webp"]; 
num = 0;

btnNext.addEventListener("click", function(){
    
    num++;
    if(num>=images.length){
        num=0;
        imgBuscado.src = images[num];
    }else{
        imgBuscado.src = images[num];
    }
        
    
});
*/

function validarFormulario() {
			
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    
    if (nombre == "" || email == "" || telefono == "" || mensaje == "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    
    var nombreVal = /^[a-zA-Z\s]*$/;
    if (!nombreVal.test(nombre)) {
        alert("Por favor, introduce solo letras en el campo de nombre.");
        return false;
    }


    var emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false;
    }

    
var telefonoVal = /^\d{10}$/;
    if (!telefonoVal.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido con 10 dígitos.");
        return false;
    }
    
    alert("Formulario enviado correctamente.");
    return true;
}



