//Ejercicio 9: En un almacen se hace un 20 % de descuento a los clientes 
//cuya compra supere los $100.¿Cual sera la cantidad que pagara una
//persona por su compra?
Proceso ejercicio9
	Definir compra Como Real;
	Definir descuento Como Real;
	Definir precio_final Como Real;
	
	Escribir "Digite la cantidad a pagar: ";
	leer compra;
	
	si compra >100 Entonces
		descuento <- compra*0.2;
	SiNo
		descuento <- 0;
	FinSi
	
	precio_final <- compra - descuento ;
	
	Escribir "El precio a pagar es: ",precio_final;
	
	
	
FinProceso
