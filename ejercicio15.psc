// Hacer un programa que tenga un menu con las siguientes opciones.
// Elevar un numero a una potencia X
// sacar la raiz cuadrada de un numero
// salir
Proceso ejercicio15
	definir opcion como reales;
	Escribir 'Menu';
	Escribir "1.Elevar un numero a una potencia X";
	Escribir "2.Sacar la raiz cuadrada de un numero";
	Escribir "3.Salir";
	Escribir "4.Volver a salir";
	Escribir 'Digite una opcion: ';
	Leer opcion;
	Segun opcion Hacer
		1:
			definir num,pot,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			Escribir "Digite la potencia: ";
			Leer pot;
			resultado <- num^pot;
			Escribir "El resultado es :",resultado;
		2:
			definir num,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			resultado <- rc(num);
			Escribir "El resultado es: ",resultado;
		3:
		4:
		De Otro Modo:
			Escribir "Se equivoco de opcion de menu";
	FinSegun
FinProceso
