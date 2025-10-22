relacion=2; // Para mostrar al principio de la página: Relación nº...

preguntas=new Array();
respuestas=new Array();
n=0;

preguntas[n]='<b>PROGRAMA:</b><br>Pedir un número <b>a</b> (Sin mensaje) ';respuestas[n]='a=1*prompt()';n++;
preguntas[n]='Hallar la raíz cuadrada de <b>a</b> en una variable llamada <b>raiz</b> (sin tilde) ';respuestas[n]='raiz=Math.sqrt(a)';n++;
preguntas[n]='Mostrar el valor de <b>raiz</b> (Sin mensaje) ';respuestas[n]='alert(raiz)';n++;
preguntas[n]='Modifica la primera línea (prompt) con el mensaje <b>Introduzca un número</b> ';respuestas[n]='a=1*prompt("Introduzca un número")';n++;
preguntas[n]='Modifica la tercera línea (alert) con el mensaje <b>La raíz cuadrada de <u>a</u> es <u>raiz</u></b> ';respuestas[n]='alert("La raíz cuadrada de "+a+" es "+raiz)';n++;
preguntas[n]='¿Qué muestra este programa como resultado si el dato de entrada es un número negativo (Piensa por qué) ';respuestas[n]='NaN';n++;
preguntas[n]='Si el dato de entrada es cero ¿Se obtiene un error? (Piensa por qué) ';respuestas[n]='No';n++;


preguntas[n]='<br><b>NUEVO PROGRAMA:</b><br>Pedir un número <b>a</b> (Sin mensaje) ';respuestas[n]='a=1*prompt()';n++;
preguntas[n]='Si a es mayor o igual que cero mostrar <b>Es positivo</b> ';respuestas[n]='if(a>=0) alert("Es positivo")';n++;
preguntas[n]='Si a es menor que cero mostrar <b>Es negativo</b> ';respuestas[n]='if(a<0) alert("Es negativo")';n++;
preguntas[n]='Quitar los decimales al valor de <b>a</b> ';respuestas[n]='a=parseInt(a)';n++;
preguntas[n]='Mostrar el valor de <b>a</b> (ya sin decimales) ';respuestas[n]='alert(a)';n++;
preguntas[n]='Hallar en una variable <b>r</b> el resto de la división entera de a entre dos ';respuestas[n]='r=a%2';n++;
preguntas[n]='Mostrar el valor de <b>r</b> ';respuestas[n]='alert(r)';n++;
preguntas[n]='Si r es cero Mostrar <b>Es par</b> ';respuestas[n]='if(r==0) alert("Es par")';n++;
preguntas[n]='Si r es uno Mostrar <b>Es par</b> ';respuestas[n]='if(r==1) alert("Es impar")';n++;
preguntas[n]='Modificar la primera línea con el texto <b>Introduzca un número</b> ';respuestas[n]='a=1*prompt("Introduzca un número")';n++;
preguntas[n]='Ocultar la línea (ya hecha) que muestra el valor de <b>a</b> ';respuestas[n]='//alert(a)';n++;
preguntas[n]='Ocultar la línea que muestra el valor de <b>r</b> ';respuestas[n]='//alert(r)';n++;

preguntas[n]='<b>NUEVO PROGRAMA:</b><br>Introduzca un número a ';respuestas[n]='a=1*prompt("Introduzca un número")';n++;
preguntas[n]='Introduzca otro número b ';respuestas[n]='b=1*prompt("Introduzca otro número")';n++;
preguntas[n]='Hallar resto r de la división entera de a entre b ';respuestas[n]='r=a%b';n++;
preguntas[n]='Mostrar r ';respuestas[n]='alert(r)';n++;
preguntas[n]='Si r es cero Mostrar <b>a</b> es múltiplo de <b>b</b> ';respuestas[n]='if(r==0) alert(a+" es múltiplo de "+b)';n++;
preguntas[n]='Si r es distinto de cero Mostrar <b>a</b> NO es múltiplo de <b>b</b> ';respuestas[n]='if(r!=0) alert(a+" NO es múltiplo de "+b)';n++;
preguntas[n]='Ocultar la línea que muestra el valor de r ';respuestas[n]='//alert(r)';n++;

preguntas[n]='<b>NUEVO PROGRAMA:</b><br>Mostrar texto <b>Vamos a generar un número aleatorio</b> ';respuestas[n]='alert("Vamos a generar un número aleatorio")';n++;
preguntas[n]='Generar un número aleatorio x entre cero y uno (el uno no llega a generarse) ';respuestas[n]='x=Math.random()';n++;
preguntas[n]='Mostrar el valor de x ';respuestas[n]='alert(x)';n++;
preguntas[n]='Convertir el valor de x en un número de cero a cien ';respuestas[n]='x=x*100';n++;
preguntas[n]='Mostrar de nuevo el valor de x (ha cambiado) ';respuestas[n]='alert(x)';n++;
preguntas[n]='Quitar los decimales a x ';respuestas[n]='x=parseInt(x)';n++;
preguntas[n]='Mostrar de nuevo el valor de x (ha cambiado) ';respuestas[n]='alert(x)';n++;
preguntas[n]='Modificar el primer alert para que aparezca un mensaje <b>He generado un número aleatorio entre cero y uno y ha salido</b> ';respuestas[n]='alert("He generado un número aleatorio entre cero y uno y ha salido "+x)';n++;
preguntas[n]='Modificar el segundo alert para que aparezca un mensaje <b>Lo he multiplicado por 100 y he obtenido</b> ';respuestas[n]='alert("Lo he multiplicado por 100 y he obtenido "+x)';n++;
preguntas[n]='Modificar el tercer alert para que aparezca un mensaje <b>Le he quitado los decimales y he obtenido</b> ';respuestas[n]='alert("Le he quitado los decimales y he obtenido "+x)';n++;
preguntas[n]='¿Cuál es la función para generar un número aleatorio entre cero y uno? ';respuestas[n]='Math.random()';n++;
preguntas[n]='La función anterior ¿podría generar un 1 en algún caso? ';respuestas[n]='No';n++;
preguntas[n]='En el programa que acabas de hacer ¿podría generarse finalmente un 100? ';respuestas[n]='No';n++;
preguntas[n]='¿Cuál sería el valor final máximo que podría generarse? ';respuestas[n]='99';n++;

preguntas[n]='<b>NUEVO PROGRAMA:</b><br>Mostrar el texto <b>Vamos a lanzar una moneda</b> ';respuestas[n]='alert("Vamos a lanzar una moneda")';n++;
preguntas[n]='Generar un número aleatorio x entre cero y uno (ya sabes que el uno no se incluye) ';respuestas[n]='x=Math.random()';n++;
preguntas[n]='Mostrar el valor de x ';respuestas[n]='alert(x)';n++;
preguntas[n]='Ejecútalo varias veces ¿Siempre sale el mismo valor? ';respuestas[n]='No';n++;
preguntas[n]='Si x es menor que 0.5 Mostrar <b>Cara</b> ';respuestas[n]='if(x<0.5) alert("Cara")';n++;
preguntas[n]='Si x es mayor o igual que 0.5 Mostrar <b>Cruz</b> ';respuestas[n]='if(x>=0.5) alert("Cruz")';n++;
preguntas[n]='Ocultar la línea que muestra el valor de x ';respuestas[n]='//alert(x)';n++;
preguntas[n]='Ejecútalo varias veces ¿Siempre sale el mismo texto final? (Cara o Cruz) ';respuestas[n]='No';n++;

preguntas[n]='<b>NUEVO PROGRAMA:</b><br>Mostrar el texto <b>Vamos a lanzar un dado</b> ';respuestas[n]='alert("Vamos a lanzar un dado")';n++;
preguntas[n]='Generar directamente un número entero aleatorio x entre cero y cinco. Pregunta cómo se hace. ';respuestas[n]='x=parseInt(6*Math.random())';n++;
preguntas[n]='Mostrar el valor de x ';respuestas[n]='alert(x)';n++;
preguntas[n]='Ejecutar varias veces. ¿Se obtiene a veces un cero? ';respuestas[n]='Sí';n++;
preguntas[n]='Ejecutar varias veces. ¿Se obtiene el seis? ';respuestas[n]='No';n++;
preguntas[n]='Modificar la última línea para que aparezca el mensaje <b>He lanzado un dado y ha salido</b> ';respuestas[n]='alert("He lanzado un dado y ha salido "+x)';n++;
preguntas[n]='Modificar la segunda línea para que el número aleatorio esté comprendido entre uno y seis (y no entre cero y cinco) ';respuestas[n]='x=1+parseInt(6*Math.random())';n++;
preguntas[n]='Ejecutar varias veces después de este último cambio. ¿Se obtiene ahora el cero? ';respuestas[n]='No';n++;
preguntas[n]='Y ahora ¿Se obtiene a veces un seis? ';respuestas[n]='Sí';n++;


/*
preguntas[n]='<br>NUEVAS CUESTIONES:<br>Un programa que resuelve una ecuación de segundo grado ¿Cuántos datos de entrada tiene? ';respuestas[n]='3';n++;
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
*/
