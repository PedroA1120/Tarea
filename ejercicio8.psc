//Ejercicio 8: Determinar si un alumno aprueba o reprueba un curso, sabiendo que
//aprobara si su promedio de tres calificaciones es mayor o igual que 70
//reprueba caso contrario.
Proceso ejercicio8
	Definir nota1,nota2,nota3 como reales;
	Definir promedio Como reales;
	
	Escribir "Digite las 3 calificaciones: ";
	Leer nota1,nota2,nota3;
	
	promedio <- (nota1+nota2+nota3)/3;
	
	si promedio >= 70 Entonces
		Escribir "El alumno esta aprobado con: ",promedio;
	SiNo
		Escribir "El alumno esta desaprobado con: ",promedio;
	FinSi
FinProceso
