//Ejercicio 11: Leer tres numeros diferentes e imprimir
//el numero mayor de los tres.
Proceso ejercicio11
	Definir num1,num2,num3 Como Real;
	
	Escribir "Digite tres numeros: ";
	Leer num1,num2,num3;
	
	si num1>num2 y num1>num3 Entonces
		Escribir "El numero mayor es: ",num1;
	SiNo
		si num2>num1 y num2>num3 Entonces
			Escribir "El mayor es : ",num2;
		SiNo
			Escribir "El mayor es : ",num3;
		FinSi
	FinSi
	
	
FinProceso
