import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hola Alumno</h1>
<div>
  
</div>`;
let btnEnv = document.getElementById("btnEnv");

btnEnv.addEventListener("click", () => {
  let alumnos: number = 72;
  let contador: number = 0;
  //for(indice; punto de corte; incremento)

  // for (var i = 1; i <= alumnos; i++) {
  //   console.log("Hola alumnx", "n°", i);
  // }

  /*   Pseudocodigo:
  mientras que (72 es menor o igual a 72) ejecuta lo siguiente:{
              72 + 1;
    console.log("Hola alumnx", 73); } 
  */

  while (contador < alumnos) {
    contador++;
    console.log("Hola alumnx", contador);
  }
});
