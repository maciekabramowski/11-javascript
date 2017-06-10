'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

//dodanie

imiona[3] = 'Tania';

console.log(imiona);

//podmiana

imiona[2] = 'Ela';

console.log(imiona);

//dodanie na nową pozycję

imiona.push('Geralt');

console.log(imiona);

//usuwa ostatnią

imiona.pop();
imiona.pop();

console.log(imiona);

//wstawia na początku i zwraca ilość elementów

console.log(imiona.unshift('Robert'));

console.log(imiona);

//usuwa pierwszy element

imiona.shift();

console.log(imiona);

//wyświetla długość

console.log(imiona.length);

// pętla przez tabelę

for (var i=0; i < imiona.length; i++) {
    console.log(imiona[i]);
}

//pętla przez tabelę alternatywną metodą

imiona.forEach(function(element, i){
               console.log('Element nr ' + i + ' = ' + element);
               });

// łączenie elementów

console.log(imiona.join(' - '));

// sortowanie

imiona.sort();

console.log(imiona);

//odwrócenie

imiona.reverse();

console.log(imiona);



//łączenie tablic

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);

//indexOf

console.log(zbiorImion.indexOf('Mariusz'));

//sprawdza czy jest tablicą

console.log( Array.isArray(zbiorImion));

//slice

console.log(zbiorImion.slice(2,5));

//splice

zbiorImion.splice(2,3, "Julek", "Krzyś");

console.log(zbiorImion);

//to string

console.log(zbiorImion.toString());

