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

for (var i=0; i < imiona.length; i++) {
    console.log(imiona[i]);
}


