//Ejercicio 17 : Se desea calcular independientemente la suma de los numeros 
//pares e impares comprendidos entre 1 y 50.
Proceso ejercicio17
	definir suma_pares, suma_impares, i como enteros;
	suma_pares <- 0;
	suma_impares <- 0;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2 = 0 Entonces
			suma_pares <- suma_pares+i;
		SiNo
			suma_impares <- suma_impares+i;
		FinSi
	FinPara
	Escribir "La suma de pares es: ",suma_pares;
	Escribir "La suma es impares es: ",suma_impares;
FinProceso
