const Contraseña = "lopez";
const Usuario = "Luanals";
async function obtenerDatos() {
 try {
   let response = await fetch("https://jsonplaceholder.typicode.com/users");
   let data = await response.json();
   console.log(data);
 } catch (error) {
   console.error("Error:", error);
 }
}


obtenerDatos();


function verificarLogin() {
 const usuarioInput = document.getElementById("Usuario").value;
 const contraseñaInput = document.getElementById("Contraseña").value;


 if (Usuario === usuarioInput && Contraseña === contraseñaInput) {
   alert("¡Bienvenido, " + Usuario + "!");
 } else {
   error.textContent = "Usuario o contraseña incorrectos.";
   return;
 }


 if (Usuario === usuarioInput && Contraseña === contraseñaInput) {
   localStorage.setItem("sesion", usuarioInput);
 } else {
   error.textContent = "Datos incorrectos";
 }

 obtenerDatos();
}

