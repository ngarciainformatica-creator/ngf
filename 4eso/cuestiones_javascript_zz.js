descripcion="PROGRAMACIÓN EN JAVASCRIPT - EJERCICIOS - RELACIÓN Nº ?";
// Es la relación ? de ejercicios de Javascript

preguntas=new Array();
respuestas=new Array();
n=0;

preguntas[n]='<br>CUESTIONES PREVIAS:<br>Un programa que resuelve una ecuación de segundo grado ¿Cuántos datos de entrada tiene? ';respuestas[n]='3';n++;
preguntas[n]='En las fórmulas matemáticas ¿Cómo se le llama al primero de ellos? ';respuestas[n]='a';n++;
preguntas[n]='¿Y al segundo? ';respuestas[n]='b';n++;
preguntas[n]='¿Y al tercero? ';respuestas[n]='c';n++;
preguntas[n]='¿Cuántas soluciones tiene una ecuación de segundo grado? ';respuestas[n]='2';n++;
preguntas[n]='¿Es posible que una ecuación de segundo grado NO tenga solución? ';respuestas[n]='Sí';n++;
preguntas[n]='En la ecuación <b>x<sup>2</sup> -5x + 6 = 0  </b> ¿Cuál sería el valor de a? ';respuestas[n]='1';n++;
preguntas[n]='¿Y el de b? ';respuestas[n]='-5';n++;
preguntas[n]='¿Y el de c? ';respuestas[n]='6';n++;
preguntas[n]='¿Cuál sería la primera solución de dicha ecuación? ';respuestas[n]='3';n++;
preguntas[n]='¿Cuál sería la segunda solución de dicha ecuación? ';respuestas[n]='2';n++;
preguntas[n]='En la ecuación <b>2x<sup>2</sup> - 6x - 8 = 0  </b> ¿Cuál sería el valor de a? ';respuestas[n]='2';n++;
preguntas[n]='¿Y el de b? ';respuestas[n]='-6';n++;
preguntas[n]='¿Y el de c? ';respuestas[n]='-8';n++;
preguntas[n]='¿Cuál sería la primera solución de dicha ecuación? ';respuestas[n]='4';n++;
preguntas[n]='¿Cuál sería la segunda solución de dicha ecuación? ';respuestas[n]='-1';n++;
preguntas[n]='La ecuación <b>x<sup>2</sup> + x + 1 = 0  </b> ¿Tiene soluciones? (Piensa por qué) ';respuestas[n]='No';n++;
preguntas[n]='En general: Las ecuaciones cuyos coeficientes (a, b, c) son los tres iguales ¿Tienen soluciones? (Piensa por qué) ';respuestas[n]='No';n++;

preguntas[n]='<b>COMIENZA EL NUEVO PROGRAMA:</b><br>Mostrar el texto <b>Vamos a resolver una ecuación de segundo grado</b> ';respuestas[n]='alert("Vamos a resolver una ecuación de segundo grado")';n++;
preguntas[n]='Pedir un número a ';respuestas[n]='a=1*prompt()';n++;
preguntas[n]='Pedir un número b ';respuestas[n]='b=1*prompt()';n++;
preguntas[n]='Pedir un número c ';respuestas[n]='c=1*prompt()';n++;
preguntas[n]='Hallar d mediante la fórmula que ves en la pizarra ';respuestas[n]='d=b*b-4*a*c';n++;
preguntas[n]='Mostrar valor de d ';respuestas[n]='alert(d)';n++;
preguntas[n]='Si d es mayor o igual que cero Mostrar <b>Esta ecuación SÍ tiene soluciones</b> ';respuestas[n]='if(d>=0) alert("Esta ecuación SÍ tiene soluciones")';n++;
preguntas[n]='Si d es menor que cero Mostrar <b>Esta ecuación NO tiene soluciones</b> ';respuestas[n]='if(d<0) alert("Esta ecuación NO tiene soluciones")';n++;
preguntas[n]='Ocultar la línea que muestra el valor de d ';respuestas[n]='//alert(d)';n++;
preguntas[n]='Hallar la primera solución en una variable llamada <b>sol1</b> (Ver pizarra) ';respuestas[n]='sol1=(-b+Math.sqrt(d))/(2*a)';n++;
preguntas[n]='Hallar la segunda solución en una variable llamada <b>sol2</b> (Ver pizarra) ';respuestas[n]='sol2=(-b-Math.sqrt(d))/(2*a)';n++;
preguntas[n]='Mostrar la primera solución ';respuestas[n]='alert(sol1)';n++;
preguntas[n]='Mostrar la segunda solución ';respuestas[n]='alert(sol2)';n++;
preguntas[n]='Modificar el primer prompt para que muestre el mensaje <b>Introduce el coeficiente de x al cuadrado</b> ';respuestas[n]='a=1*prompt("Introduce el coeficiente de x al cuadrado")';n++;
preguntas[n]='Modificar el segundo prompt para que muestre el mensaje <b>Introduce el coeficiente de x</b> ';respuestas[n]='b=1*prompt("Introduce el coeficiente de x")';n++;
preguntas[n]='Modificar el tercer prompt para que muestre el mensaje <b>Introduce el término independiente</b> ';respuestas[n]='c=1*prompt("Introduce el término independiente")';n++;
preguntas[n]='Modificar el penúltimo alert para que muestre el mensaje <b>La primera solución es</b> ';respuestas[n]='alert("La primera solución es "+sol1)';n++;
preguntas[n]='Modificar el último alert para que muestre el mensaje <b>La segunda solución es</b> ';respuestas[n]='alert("La segunda solución es "+sol2)';n++;
preguntas[n]='CUSTIONES:<br>Ejecuta el programa con valores a=1 b=-17 c=72 ¿Qué valor obtienes como primera solución? ';respuestas[n]='9';n++;
preguntas[n]='En dicha ejecución ¿Qué valor obtienes como segunda solución? ';respuestas[n]='8';n++;
preguntas[n]='Ejecuta el programa con tres valores iguales, los que quieras ¿Qué valor obtienes en ambas soluciones? (Piensa por qué) ';respuestas[n]='NaN';n++;


