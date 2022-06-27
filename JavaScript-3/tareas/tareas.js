// No cambies los nombres de las funciones.

const { sonIguales } = require("../../JavaScript-1/tareas/tareas");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  for(i=0; i<=PrimerElemento; i++)
    console.log(PrimerElemento[i]);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  for(i=0; i<=UltimoElemento; i++)
     console.log(UltimoElemento[i]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  for(i=0; i<=LargoDelArray; i++)
     console.log(LargoDelArray[i]);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0; i<=incrementarUno; i++)
     suma+=incrementarUno[i];
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return array + elemento;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  return elemento + array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return "Soy Walter";
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(ElementoDentroArray)
  {
     return true; 
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  for(i=0; i<=numeros; i++)
     return suma+=numeros[i]; 
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código: 
  for(i=0;i<=numero;i++)
  {
    promedioResultado=elementos/numero[i];
  }
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  if(NumerosEnteros)
  {
     return MayorNumero;
  }
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  for(i=0;i<=arreglo;i++)
  if(elemento>10)
  {
    return cantidaddeelementos[i];
  }   
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    switch(numeroDeDia)
  {
    case 1:
      console.log(Domingo="Es fin de semana");
      break;
    case 2:
      console.log(Lunes="Es dia laboral");
      break;
    case 3:
      console.log(Martes="Es dia laboral");
      break;
    case 4:
      console.log(Miercoles="Es dia laboral");
      break;
    case 5:
      console.log(Jueves="Es dia laboral");
      break;
    case 6:
      console.log(Viernes="Es dia laboral");
      break;
    case 7:
      console.log(Sabado="Es fin de semana");
      break;
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n)
  {
    return true;
  }
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  if(arreglo)
  {
     return true;
  }
  return false;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  for(i=0;i<=MesesAño;i++)
  {
    if(Meses)
    {
       return "Enero, Marzo y Noviembre"; 
    } 
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  for(i=0;i<=200;i++)
  {
    if(numeros>100)
    {
      return array;
    }
  }
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
