descripcion="PROGRAMACIÓN EN JAVASCRIPT - EJERCICIOS - RELACIÓN Nº 2";
// Es la relación 2 de ejercicios de Javascript

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
preguntas[n]='Si r es uno Mostrar <b>Es impar</b> ';respuestas[n]='if(r==1) alert("Es impar")';n++;
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

