//Ejercicio 1 : Calcular la suma de los "N" primeros numeros .


Proceso ejercicio16
	definir N, suma, i Como Entero;
	
	Escribir " Digite la cantidad de numeros a sumarse: ";
	Leer N;
	
	suma <- 0 ;
	
	Para i <- 1 hasta N Con Paso 1 Hacer
		suma <- suma + i ;
	FinPara
	
	
	Escribir  "La suma es: ",suma;
	
FinProceso
