relacion=186; // Para mostrar al principio de la página: Relación nº...

preguntas=new Array();
respuestas=new Array();
n=0;

preguntas[n]='Mensaje en ventana emergente <b>Hola</b>';respuestas[n]='alert("Hola")';n++;
preguntas[n]='Solicitar un texto en variable <b>nombre</b> (Dime tu nombre)</b>';respuestas[n]='nombre=prompt("Dime tu nombre")';n++;
preguntas[n]='Repetir línea anterior con valor predeterminado <b>Ana</b>';respuestas[n]='nombre=prompt("Dime tu nombre","Ana")';n++;
preguntas[n]='Solicitar un número en variable <b>a</b> (Dime un número)';respuestas[n]='a=1*prompt("Dime un número")';n++;
preguntas[n]='Mostrar en ventana emergente el valor de la variable anterior';respuestas[n]='alert(a)';n++;
preguntas[n]='Repetir línea anterior anteponiendo el texto <b>El número es</b>';respuestas[n]='alert("El número es "+a)';n++;
preguntas[n]='¿Qué muestra lo anterior si el valor introducido en <b>a</b> no es numérico?';respuestas[n]='NaN';n++;
preguntas[n]='¿Qué significa lo escrito en la respuesta anterior?';respuestas[n]='Not a Number';n++;
preguntas[n]='Caracteres para comentar una sola línea (lo que haya a su derecha)';respuestas[n]='//';n++;
preguntas[n]='Caracteres para iniciar un comentario de varias líneas';respuestas[n]='/*';n++;
preguntas[n]='Caracteres para finalizar un comentario de varias líneas';respuestas[n]='*/';n++;
preguntas[n]='Operador suma (si son números) y encadenamiento (si son textos)';respuestas[n]='+';n++;
preguntas[n]='Si a y b son números ¿Es lo mismo <b>c=a+b</b> que <b>c=b+a</b> ? (Piensa por qué)';respuestas[n]='Sí';n++;
preguntas[n]='¿Y si no son valores numéricos? (textos) (Piensa por qué)';respuestas[n]='No';n++;
preguntas[n]='Operador resta';respuestas[n]='-';n++;
preguntas[n]='El operador anterior ¿Tiene la propiedad conmutativa?';respuestas[n]='No';n++;
preguntas[n]='Operador producto (multiplicación)';respuestas[n]='*';n++;
preguntas[n]='El operador anterior ¿Tiene la propiedad conmutativa?';respuestas[n]='Sí';n++;
preguntas[n]='Operador división exacta (pueden salir decimales)';respuestas[n]='/';n++;
preguntas[n]='El operador anterior ¿Tiene la propiedad conmutativa?';respuestas[n]='No';n++;
preguntas[n]='Operador potencia';respuestas[n]='**';n++;
preguntas[n]='El operador anterior ¿Tiene la propiedad conmutativa?';respuestas[n]='No';n++;
preguntas[n]='Operador resto de división entera';respuestas[n]='%';n++;
preguntas[n]='El operador anterior ¿Tiene la propiedad conmutativa?';respuestas[n]='No';n++;
preguntas[n]='De todos los operadores <b>aritméticos</b> vistos (+ - * / ** %) ¿Cuál es el único que nunca devuelve NaN? (Piensa por qué)';respuestas[n]='+';n++;
preguntas[n]='Expresa la condición <b>Si a es mayor que b </b>';respuestas[n]='if(a>b)';n++;
preguntas[n]='Expresa la condición <b>Si a es mayor o igual que b </b>';respuestas[n]='if(a>=b)';n++;
preguntas[n]='Expresa la condición <b>Si a es menor que b </b>';respuestas[n]='if(a<b)';n++;
preguntas[n]='Expresa la condición <b>Si a es menor o igual que b </b>';respuestas[n]='if(a<=b)';n++;
preguntas[n]='Expresa la condición <b>Si a es distinto de b </b>';respuestas[n]='if(a!=b)';n++;
preguntas[n]='Expresa la condición <b>Si a es igual que b </b> (Cuidado)';respuestas[n]='if(a==b)';n++;
preguntas[n]='Escribe en Javascript <b>Si a es mayor o igual que cero: Mostrar texto emergente "Positivo"</b>';respuestas[n]='if(a>=0) alert("Positivo")';n++;
preguntas[n]='Escribe en Javascript <b>Si el valor de a es 10: Mostrar texto emergente "Matrícula de honor"</b>';respuestas[n]='if(a==10) alert("Matrícula de honor")';n++;

preguntas[n]='<b>Programa sencillo:</b> Hallar si un número n es par o impar<br> Línea 1: Pedir un número n (Dime un número)';respuestas[n]='n=1*prompt("Dime un número")';n++;
preguntas[n]='Línea 2: Hallar <b>resto</b> de la división de n entre 2';respuestas[n]='resto=n%2';n++;
preguntas[n]='Línea 3: Si el resto es cero Mostrar <b>Par</b>';respuestas[n]='if(resto==0) alert("Par")';n++;
preguntas[n]='Línea 4: En caso contrario Mostrar <b>Impar</b>';respuestas[n]='else alert("Impar")';n++;
preguntas[n]='Línea 5: Mensaje final <b>Hasta luego</b>';respuestas[n]='alert("Hasta luego")';n++;

/*
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
preguntas[n]='';respuestas[n]='';n++;
*/
