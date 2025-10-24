relacion=3; // Para mostrar al principio de la página: Relación nº...

preguntas=new Array();
respuestas=new Array();
n=0;

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



