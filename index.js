/* Ejercicio 1
Haga un programa que escriba aquellos números entre 1 y 100 que:
- Sean pares --> %
- No sean múltiplos de 4 --> %
- Tampoco sean múltiplos de 3. --> %
- Escríbelo dos veces: una con un bucle while y otra usando un bucle for.
*/


for (i = 0; i < 100; i++) {
    if ((i % 2 === 0) && (i / 4 != 0) && (i / 3 != 0)) {
        console.log(i);
    }

}

while ((i % 2 === 0) && (i / 4 != 0) && (i / 3 != 0) && (i < 100)) {
    console.log(i);
    i++;
}

/*
Ejercicio 2
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de
100 no lo son, aunque los múltiplos de 400 sí.*/

function bisiesto(year) {
    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        return "Es bisiesto"
    } else {
        return "no es bisiesto"
    }
}