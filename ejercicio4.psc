//Ejercicio 4: Un profesor prepara tres cuestionarios para una evaluacion final : 
//A, B Y C. Se sabe que se tarda 5 minutos en revisar el cuestioanrio A,
//8 en revisar el cuestionario B y 6 en el C. La cantidad de examenes de cada
//tipo se entran por teclado. ¿ Cuantas horas y cuantos minutos se tardara en
//revisar todas las evaluaciones?
Proceso ejercicio4
	Definir cantidadA, cantidadB, cantidadC Como Enteros;
	Definir tiempoA, tiempoB, tiempoC como enteros;
	Definir tiempo_total como entero;
	Definir horas, minutos como enteros;
	Escribir "Digite la cantidad de cuestionarios A: ";
	Leer cantidadA;
	Escribir "Digite la cantidad de cuestionarios B: ";
	Leer cantidadB;
	Escribir "Digite la cantidad de cuestionarios C: ";
	Leer cantidadC;
	
	tiempoA <- cantidadA * 5 ;
	tiempoB <- cantidadB * 8 ;
	tiempoC <- cantidadC * 6 ;
	
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	Escribir "Se tardara ", horas ," horas y " , minutos ," minutos ";
FinProceso
