descripcion="PROGRAMACIÓN BÁSICA EN JAVASCRIPT - EJERCICIOS Y CUESTIONES - RELACIÓN Nº 6";

preguntas=new Array();
respuestas=new Array();
n=0;

preguntas[n]='Una variable llamada micolor toma el valor black (fuera de cualquier función, esto se ejecuta al iniciar la página) ';respuestas[n]='micolor="black"';n++;
preguntas[n]='Define un botón (objeto HTML) que al hacer clic sobre él ejecuta un función llamada pintar a sí mismo ';respuestas[n]='<input type=button onclick="pintar(this)">';n++;
preguntas[n]='Define un botón (objeto HTML) con fondo azul que al hacer clic sobre él ejecuta un función llamada elegir a sí mismo ';respuestas[n]='<input type=button style="background:blue" onclick="cambiar(this)">';n++;
preguntas[n]='Escribe el código de una función llamada pintar con un parámetro x que establece el fondo de x con el color de la variable micolor ';respuestas[n]='function pintar(x){x.style.background=micolor}';n++;
preguntas[n]='Escribe el código de una función llamada pintar con un parámetro x que cambia el valor de la variable micolor (a partir del color de fondo de x) y pone este mismo color al fondo de un objeto cuyo ID es elegido ';respuestas[n]='function cambiar(x){micolor=x.style.background;elegido.style.background=micolor}';n++;
preguntas[n]='¿Para qué sirve la variable micolor en el programa? ';respuestas[n]='Para almacenar el color que se elige para pintar.';n++;
preguntas[n]='¿Por qué la sentencia micolor="black" se encuentra fuera de las funciones? ';respuestas[n]='Porque queremos que se ejecute inicialmente sin pulsar botón alguno.';n++;
preguntas[n]='¿Qué representa la palabra this cuando se usa en onclick="pintar(this)"? ';respuestas[n]='El botón HTML que ha sido pulsado.';n++;
preguntas[n]='¿Por qué es útil pasar this como parámetro a la función? ';respuestas[n]='Porque permite que la función actúe sobre el botón exacto que se ha pulsado.';n++;
preguntas[n]='¿Qué hace la instrucción x.style.background = micolor? ';respuestas[n]='Cambia el color de fondo del objeto x al color almacenado en micolor.';n++;
preguntas[n]='¿Qué propiedad del objeto HTML se utiliza para cambiar el color de fondo? ';respuestas[n]='style.background';n++;
preguntas[n]='¿Cuándo se ejecuta la función pintar? ';respuestas[n]='Cuando se hace clic en un botón del tablero.';n++;
preguntas[n]='¿Cuándo se ejecuta la función cambiar? ';respuestas[n]='Cuando se hace clic en un botón de la paleta de colores.';n++;
preguntas[n]='¿Qué efecto tiene la instrucción elegido.style.background = micolor? ';respuestas[n]='Muestra visualmente el color actualmente seleccionado.';n++;
preguntas[n]='¿Por qué el último botón lleva un ID? (lo hemos llamado elegido) ';respuestas[n]='Porque necesitamos mencionarlo en el código de la función cambiar';n++;
preguntas[n]='¿Por qué este último botón no hay evento onclick? ';respuestas[n]='Porque no queremos que ejecute código alguno, es un objeto informativo';n++;
