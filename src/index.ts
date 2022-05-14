rotulo1.innerHTML = "Ingrese el total de su sueldo sin signo puntuación:";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let sueldito: number = Number(dato.value);
  let quincemil: number = 15000;
  let veintemil: number = 20000;
  let veinticinto: number = 25000;

  if (sueldito <= quincemil) {
    let aumento1: number = sueldito * 0.2;
    let resultado: number = aumento1 + sueldito;
    console.log("Su sueldo anterior era de: ", sueldito);
    console.log("Su aumento es del 20 porciento: ", aumento1);
    console.log("Sueldo en total: ", resultado);
  } else if (quincemil <= veintemil) {
    let aumento2: number = sueldito * 0.1;
    let resultado1: number = sueldito + aumento2;
    console.log("Su sueldo anterior era de: ", sueldito);
    console.log("Su aumento es del 10 porciento: ", aumento2);
    console.log("Sueldo en total: ", resultado1);
  } else if (veintemil <= veinticinto) {
    let aumento3: number = sueldito * 0.05;
    let resultado2: number = sueldito + aumento3;
    console.log("Su sueldo anterior era de: ", sueldito);
    console.log("Su aumento es del 5 porciento: ", aumento3);
    console.log("Sueldo en total: ", resultado2);
  }
});
