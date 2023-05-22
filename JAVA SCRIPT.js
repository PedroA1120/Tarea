Ejercicio 1
// Definir los números que deseas sumar
var numero1 = 5;
var numero2 = 10;

// Sumar los números
var resultado = numero1 + numero2;

// Mostrar el resultado en la consola
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + resultado);

Ejercicio 2

// Definir las calificaciones del grupo
var calificaciones = [80, 90, 70, 60, 85];

// Calcular la calificación promedio
var suma = 0;
for (var i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}
var promedio = suma / calificaciones.length;

// Encontrar la calificación más baja
var calificacionMinima = Math.min(...calificaciones);

// Mostrar los resultados
console.log("Calificación promedio: " + promedio);
console.log("Calificación más baja: " + calificacionMinima);

Ejercicio 3

var numeros = [];
var positivos = 0;
var negativos = 0;
var neutros = 0;

// Leer los 10 números
for (var i = 0; i < 10; i++) {
  var numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
  numeros.push(numero);
}

// Calcular la cantidad de números positivos, negativos y neutros
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    positivos++;
  } else if (numeros[i] < 0) {
    negativos++;
  } else {
    neutros++;
  }
}

// Mostrar los resultados
console.log("Cantidad de números positivos: " + positivos);
console.log("Cantidad de números negativos: " + negativos);
console.log("Cantidad de números neutros: " + neutros);

Ejercicio 4

var sumaPares = 0;
var sumaImpares = 0;

// Calcular la suma de los números pares e impares
for (var i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    // Es un número par
    sumaPares += i;
  } else {
    // Es un número impar
    sumaImpares += i;
  }
}

// Mostrar los resultados
console.log("Suma de los números pares: " + sumaPares);
console.log("Suma de los números impares: " + sumaImpares);

Ejercicio 5

var N = 10; // Cambiar el valor de N por el número deseado

var suma = 0;

// Calcular la suma de los N primeros números
for (var i = 1; i <= N; i++) {
  suma += i;
}

// Mostrar el resultado
console.log("La suma de los " + N + " primeros números es: " + suma);

Ejercicio 6 

var opcion;

// Ciclo principal del programa
do {
  // Mostrar el menú
  console.log("=== Menú ===");
  console.log("1. Elevar un número a una potencia");
  console.log("2. Calcular la raíz cuadrada de un número");
  console.log("3. Salir");

  // Leer la opción seleccionada
  opcion = parseInt(prompt("Seleccione una opción (1-3):"));

  // Realizar la acción correspondiente a la opción seleccionada
  switch (opcion) {
    case 1:
      var base = parseFloat(prompt("Ingrese la base:"));
      var exponente = parseFloat(prompt("Ingrese el exponente:"));
      var resultadoPotencia = Math.pow(base, exponente);
      console.log("El resultado de elevar " + base + " a la potencia " + exponente + " es: " + resultadoPotencia);
      break;

    case 2:
      var numeroRaiz = parseFloat(prompt("Ingrese el número para calcular su raíz cuadrada:"));
      var resultadoRaiz = Math.sqrt(numeroRaiz);
      console.log("La raíz cuadrada de " + numeroRaiz + " es: " + resultadoRaiz);
      break;

    case 3:
      console.log("¡Hasta luego!");
      break;

    default:
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
} while (opcion !== 3);

Ejercicio 7 

var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

var numeros = [];

// Leer los siete primeros números
for (var i = 1; i <= 7; i++) {
  var numero = parseInt(prompt("Ingrese el número " + i + ":"));
  numeros.push(numero);
}

// Mostrar los días de la semana correspondientes
for (var i = 0; i < numeros.length; i++) {
  var dia = numeros[i] - 1; // Restar 1 para ajustar al índice del arreglo
  if (dia >= 0 && dia < 7) {
    console.log("Número " + numeros[i] + ": " + diasSemana[dia]);
  } else {
    console.log("Número " + numeros[i] + " fuera de rango.");
  }
}

Ejercicio 8

// Leer el número de horas, minutos y segundos ingresados por el usuario
var horas = parseInt(prompt("Ingrese el número de horas:"));
var minutos = parseInt(prompt("Ingrese el número de minutos:"));
var segundos = parseInt(prompt("Ingrese el número de segundos:"));

// Calcular la cantidad total de segundos
var totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

// Mostrar el resultado
console.log("La cantidad total de segundos es: " + totalSegundos);

Ejercicio 9 

// Leer el radio del círculo ingresado por el usuario
var radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Calcular el área y la longitud de la circunferencia
var pi = Math.PI;
var area = pi * radio * radio;
var longitud = 2 * pi * radio;

// Mostrar los resultados
console.log("El área del círculo es: " + area);
console.log("La longitud de la circunferencia es: " + longitud);

Ejercicio 10

var totalEstudiantes = parseInt(prompt("Ingrese el número total de estudiantes:"));
var totalHombres = parseInt(prompt("Ingrese el número total de hombres:"));
var totalMujeres = parseInt(prompt("Ingrese el número total de mujeres:"));

// Calcular el porcentaje de hombres y mujeres
var porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
var porcentajeMujeres = (totalMujeres / totalEstudiantes) * 100;

// Mostrar los resultados
console.log("Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%");

Ejercicio 11

var tiempoA = 5; // minutos para revisar cuestionario A
var tiempoB = 8; // minutos para revisar cuestionario B
var tiempoC = 6; // minutos para revisar cuestionario C

// Leer la cantidad de exámenes de cada tipo ingresados por el usuario
var cantidadA = parseInt(prompt("Ingrese la cantidad de exámenes del cuestionario A:"));
var cantidadB = parseInt(prompt("Ingrese la cantidad de exámenes del cuestionario B:"));
var cantidadC = parseInt(prompt("Ingrese la cantidad de exámenes del cuestionario C:"));

// Calcular el tiempo total en minutos
var tiempoTotal = (tiempoA * cantidadA) + (tiempoB * cantidadB) + (tiempoC * cantidadC);

// Calcular las horas y minutos
var horas = Math.floor(tiempoTotal / 60);
var minutos = tiempoTotal % 60;

// Mostrar el resultado
console.log("Se tardará " + horas + " horas y " + minutos + " minutos en revisar todas las evaluaciones.");

Ejercicio 12

// Leer el total de la compra ingresado por el cliente
var totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

// Calcular el descuento
var descuento = totalCompra * 0.15;

// Calcular el monto final a pagar
var montoFinal = totalCompra - descuento;

// Mostrar el monto final a pagar
console.log("El monto final a pagar es: " + montoFinal.toFixed(2));

Ejercicio 13

// Leer las calificaciones parciales, la calificación del examen final y la calificación del trabajo final
var calificacionParcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
var calificacionParcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
var calificacionParcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
var calificacionExamenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
var calificacionTrabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

// Calcular el promedio de las calificaciones parciales
var promedioParciales = (calificacionParcial1 + calificacionParcial2 + calificacionParcial3) / 3;

// Calcular la calificación final
var calificacionFinal = (promedioParciales * 0.55) + (calificacionExamenFinal * 0.30) + (calificacionTrabajoFinal * 0.15);

// Mostrar la calificación final
console.log("La calificación final en la materia de Algoritmos es: " + calificacionFinal.toFixed(2));

Ejercicio 14

// Leer el número entero ingresado por el usuario
var numero = parseInt(prompt("Ingrese un número entero:"));

// Verificar si el número es par o impar
if (numero % 2 === 0) {
  console.log("El número ingresado es par.");
} else {
  console.log("El número ingresado es impar.");
}

Ejercicio 15

// Leer las calificaciones del alumno
var calificacion1 = parseFloat(prompt("Ingrese la calificación 1:"));
var calificacion2 = parseFloat(prompt("Ingrese la calificación 2:"));
var calificacion3 = parseFloat(prompt("Ingrese la calificación 3:"));

// Calcular el promedio de las calificaciones
var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

// Verificar si el alumno aprueba o reprueba
if (promedio >= 70) {
  console.log("El alumno aprueba el curso.");
} else {
  console.log("El alumno reprueba el curso.");
}

Ejercicio 16 

// Leer el monto de la compra ingresado por la persona
var montoCompra = parseFloat(prompt("Ingrese el monto de la compra:"));

// Verificar si aplica el descuento
if (montoCompra > 100) {
  // Calcular el descuento
  var descuento = montoCompra * 0.20;
  // Calcular el monto a pagar con descuento
  var montoFinal = montoCompra - descuento;
  console.log("El monto a pagar con descuento es: $" + montoFinal.toFixed(2));
} else {
  console.log("El monto a pagar es: $" + montoCompra.toFixed(2));
}

Ejercicio 17

// Leer los dos números ingresados por el usuario
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar las condiciones y realizar las operaciones correspondientes
if (numero1 === numero2) {
  var resultado = numero1 * numero2;
  console.log("El resultado de la multiplicación es: " + resultado);
} else if (numero1 > numero2) {
  var resultado = numero1 - numero2;
  console.log("El resultado de la resta es: " + resultado);
} else {
  var resultado = numero1 + numero2;
  console.log("El resultado de la suma es: " + resultado);
}

Ejercicio 18

// Leer los tres números ingresados por el usuario
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Comparar los números para encontrar el mayor
var numeroMayor = numero1; // Suponemos que el primer número es el mayor inicialmente

if (numero2 > numeroMayor) {
  numeroMayor = numero2;
}

if (numero3 > numeroMayor) {
  numeroMayor = numero3;
}

// Imprimir el número mayor
console.log("El número mayor de los tres es: " + numeroMayor);

Ejercicio 19 

// Inicializar la sumatoria de salarios
var sumatoriaSalarios = 0;

// Calcular el salario de cada persona
for (var i = 1; i <= 5; i++) {
  // Leer las horas trabajadas y la tarifa de pago de cada persona
  var horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas de la persona " + i + ":"));
  var tarifaPago = parseFloat(prompt("Ingrese la tarifa de pago de la persona " + i + ":"));

  // Calcular el salario de la persona
  var salario = horasTrabajadas * tarifaPago;

  // Acumular el salario en la sumatoria
  sumatoriaSalarios += salario;

  // Mostrar el salario de la persona
  console.log("El salario de la persona " + i + " es: " + salario);
}

// Mostrar la sumatoria de salarios
console.log("La sumatoria de todos los salarios es: " + sumatoriaSalarios);

Ejercicio 20

// Definir las variables
var variable1 = 5;
var variable2 = 10;

console.log("Antes del intercambio:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

// Intercambiar los valores
var temp = variable1;
variable1 = variable2;
variable2 = temp;

console.log("Después del intercambio:");
console.log("variable1 =", variable1);
console.log("variable2 =", variable2);

