//Ejercicio 2: Hacer un programa para ingresar el radio de un circulo y se 
//reporte su area y la longitud de la circunferencia.
//area = pi * radio*radio
//longitud = 2 * pi * radio
Proceso ejercicio2
	Definir radio,area,lon como real;
	Escribir "Digite el valor del radio: ";
	Leer radio;
	area <- pi * radio * radio;
	lon <- 2 * pi * radio;
	
	Escribir "El area de la circunferencia es: ",area;
	Escribir "La longitud es: ",lon;
FinProceso

