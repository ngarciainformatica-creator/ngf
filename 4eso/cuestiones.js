relacion=1; // Para mostrar al principio de la página: Relación nº...

preguntas=new Array();
respuestas=new Array();
n=0;

preguntas[n]='Pedir un número en una variable llamada <b>num1</b> ';respuestas[n]='num1=1*prompt()';n++;
preguntas[n]='Pedir un número en una variable llamada <b>num2</b> ';respuestas[n]='num2=1*prompt()';n++;
preguntas[n]='Calcular la suma de ambos números en una variable llamada <b>resul</b> ';respuestas[n]='resul=num1+num2';n++;
preguntas[n]='Mostrar el valor de la variable <b>resul</b>';respuestas[n]='alert(resul)';n++;
preguntas[n]='¿Qué resultado muestra este programa si el valor de alguno de los datos de entrada no es numérico? ';respuestas[n]='NaN';n++;
preguntas[n]='¿Qué significa lo escrito en la respuesta anterior? ';respuestas[n]='Not a Number';n++;
preguntas[n]='Modificar la tercera línea para calcular la resta de ambos números ';respuestas[n]='resul=num1-num2';n++;
preguntas[n]='Modificar la tercera línea para calcular la multiplicación (producto) de ambos números ';respuestas[n]='resul=num1*num2';n++;
preguntas[n]='Modificar la tercera línea para calcular la división del primer número entre el segundo ';respuestas[n]='resul=num1/num2';n++;
preguntas[n]='Aunque los dos datos de entrada sean números enteros ¿Es posible que el resultado sea un número con decimales? ';respuestas[n]='Sí';n++;
preguntas[n]='¿Qué resultado muestra este programa cuando el segundo dato de entrada es cero? ';respuestas[n]='Infinity';n++;
preguntas[n]='Modifica la primera línea del programa para que aparezca el mensaje <b>Introduzca el dividendo</b> ';respuestas[n]='num1=1*prompt("Introduzca el dividendo")';n++;
preguntas[n]='Modifica la segunda línea del programa para que aparezca el mensaje <b>Introduzca el divisor</b> ';respuestas[n]='num2=1*prompt("Introduzca el divisor")';n++;
preguntas[n]='Modifica la cuarta línea del programa para que aparezca el rmensaje <b>La división exacta es</b> ';respuestas[n]='alert("La división exacta es "+resul)';n++;
preguntas[n]='Añade una nueva línea para calcular el cociente de la división entera (sin decimales).<br>Para ello quitamos los decimales al resultado anterior y lo hallamos en una nueva variable llamada <b>coc</b> ';respuestas[n]='coc=parseInt(resul)';n++;
preguntas[n]='Añade una nueva línea para mostrar el mensaje <b>El cociente de la división entera es</b> ';respuestas[n]='alert("El cociente de la división entera es "+coc)';n++;
preguntas[n]='Añade una nueva línea para calcular el resto de la división entera en una nueva variable llamada <b>resto</b> ';respuestas[n]='resto=num1%num2';n++;
preguntas[n]='Añade una nueva línea para mostrar el mensaje <b>El resto de la división entera es</b> ';respuestas[n]='alert("El resto de la división entera es "+resto)';n++;
preguntas[n]='Añade una nueva línea para mostrar un mensaje final <b>Hasta luego</b> ';respuestas[n]='alert("Hasta luego")';n++;
preguntas[n]='Modifica esta última línea para que no sea ejecutable sin borrarla ';respuestas[n]='//alert("Hasta luego")';n++;
preguntas[n]='¿Cuántos datos de entrada tiene este programa? ';respuestas[n]='2';n++;
preguntas[n]='¿Cuántos datos de salida (resultados) muestra este programa? ';respuestas[n]='3';n++;
preguntas[n]='Si en ejecución el valor de num1 es 15 y el valor de num2 es 2 ¿Cuál es el valor del primer dato de salida? ';respuestas[n]='7.5';n++;
preguntas[n]='Con los datos de la pregunta anterior ¿Cuál es el valor del segundo dato de salida? ';respuestas[n]='7';n++;
preguntas[n]='Con los datos de la pregunta anterior ¿Cuál es el valor del tercer dato de salida? ';respuestas[n]='1';n++;
preguntas[n]='¿Cuántas líneas <b>prompt</b> hay en este programa? ';respuestas[n]='2';n++;
preguntas[n]='En general ¿Cuántas líneas <b>prompt</b> debe tener un programa sencillo? ';respuestas[n]='Tantas como datos de entrada tenga';n++;
preguntas[n]='La primera variable de este programa ¿podría haberse llamado <b>num 1</b>? (Piensa por qué) ';respuestas[n]='No';n++;
preguntas[n]='¿Podría haberse llamado <b>1num</b>? (Piensa por qué) ';respuestas[n]='No';n++;
preguntas[n]='¿Cómo se llama el lenguaje de programación en el que estamos trabajando? ';respuestas[n]='Javascript';n++;
