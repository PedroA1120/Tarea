Proceso ejercicio20
	definir num como entero;
	definir i,factorial como enteros;
	Repetir
		Escribir "Digite un numero: ";
		Leer num;
	Hasta Que num >= 0
	i <- 1;
	factorial <- 1;
	Mientras i <= num Hacer
		factorial <- factorial * i;
		i <- i + 1;
	FinMientras
	Escribir "El factorial es: ",factorial;
FinProceso
