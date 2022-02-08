/* Ejercicio 1
Haga un programa que escriba aquellos números entre 1 y 100 que:
- Sean pares --> %
- No sean múltiplos de 4 --> %
- Tampoco sean múltiplos de 3. --> %
- Escríbelo dos veces: una con un bucle while y otra usando un bucle for.
*/

for (let i = 0; i < 100; i++) {
    const par = (i % 2 === 0);
    const multTres = (i % 3 === 0);
    const multCuatro = (i % 4 === 0);

    if (par && !multTres && !multCuatro) {
        console.log(i);
    }
}


let i = 0;

while (i < 100) {
    if ((i % 2 === 0) && !(i % 3 === 0) && !(i % 4 === 0)) {
        console.log(i);
    }
    i++;
}



/*
Ejercicio 2
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de
100 no lo son, aunque los múltiplos de 400 sí.*/

function bisiesto(year) {
    const multCuatro = year % 4 === 0;
    const multCien = year % 100 === 0;
    const multCuatroCientos = year % 400 === 0;

    if ((multCuatro && (multCuatroCientos || !multCien))) {
        return console.log("Es bisiesto");
    } else {
        return console.log("No es bisiesto");
    }
}
bisiesto(100);
bisiesto(2001);
bisiesto(800);
bisiesto(4);
