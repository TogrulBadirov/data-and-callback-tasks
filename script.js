// --------------------------------

function calc(callback, ...arr) {
    return callback(...arr);
}

// -------------------------------- Task 1
//Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

function findAverage(...arr) {
    const array = [...arr]; // Gelen deyerleri array'e menimsedir
    let sum = array.reduce((sum, value) => sum + value, 0); // array'in elementlerinin cemini tapir
    return sum / array.length; // Tapilan cemi elementlerin sayina bolerek ededi ortani tapir ve o deyeri qaytarir(return)
}

console.log(calc(findAverage, 12, 30, 22, 13));

// -------------------------------- Task 2
//Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

function sumEvenNumbers(...arr) {
    const array = [...arr]; // Gelen deyerleri array'e menimsedir
    const evenNumbers = array.filter(x=>x % 2 === 0); // 2'ye qaliqsiz bolunenleri(cut ededleri) filter edib yeni array'e(evenNumbers'a) menimsedir
    let sum = evenNumbers.reduce((sum, value) => sum + value, 0); // yeni array'in(evenNumbers'in) elementlerinin cemini tapir
    return sum // Tapilan cem deyerini qaytarir(return)
    
}

console.log(calc(sumEvenNumbers,2,3,1,4,5,6,7,23,6));

// -------------------------------- Task 3
//Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

function sumOddNumbers(...arr) {
    const array = [...arr]; // Gelen deyerleri array'e menimsedir
    const oddNumbers = array.filter(x=>x % 2 === 1); // 2'ye bolundukde qaligi 1 olanlari (tek ededleri) filter edib yeni array'e(oddNumbers'a) menimsedir
    let sum = oddNumbers.reduce((sum, value) => sum + value, 0); // yeni array'in(oddNumbers'in) elementlerinin cemini tapir
    return sum // Tapilan cem deyerini qaytarir(return)
    
}

console.log(calc(sumOddNumbers,2,3,1,4,5,6,7,23,6));

// -------------------------------- Task 4
//Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

function multiply(...arr) {
    const array = [...arr]; // Gelen deyerleri array'e menimsedir
    const oddNumbers = array.filter(x=>x % 2 === 1); // 2'ye bolundukde qaligi 1 olanlari (tek ededleri) filter edib yeni array'e(oddNumbers'a) menimsedir
    let oddNumbersSum = oddNumbers.reduce((sum, value) => sum + value, 0); // yeni array'in(oddNumbers'in) elementlerinin cemini tapir
    const evenNumbers = array.filter(x=>x % 2 === 0); // 2'ye qaliqsiz bolunenleri(cut ededleri) filter edib yeni array'e(evenNumbers'a) menimsedir
    let evenNumbersSum = evenNumbers.reduce((sum, value) => sum + value, 0); // yeni array'in(evenNumbers'in) elementlerinin cemini tapir
    return oddNumbersSum * evenNumbersSum // Tapilan cut ededlerin cemi ile tek ededlerin ceminin hasili deyerini qaytarir(return)
    
}

console.log(calc(multiply,2,3,4,5,6,7,6));