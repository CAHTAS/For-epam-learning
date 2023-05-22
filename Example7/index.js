var MovieName = ['Blade1', 'Blade2', 'Blade3']
for (i = 0; i < MovieName.length; i++) {
    console.log(MovieName[i]);
}

var CarManufacturer = ['Audi', 'BMNW', 'Porsche', 'Mersedes']
var CarManufacturerStr = CarManufacturer.toString()
var BackArray = CarManufacturerStr.split(',')
console.log(BackArray)

var Names = ['Anton', 'Kate', 'Pavel', 'Andrey']
// for (i = 0; i < Names.length; i++) {
//     Names[i] = 'Hello ' + Names[i];
// }
Names = Names.map((name) => 
    'Hello ' + name 
)
console.log(Names);

var Numbers = [-1, 2, -3, 0, 5]
for (i = 0; i < Numbers.length; i++){
    Numbers[i] = !!Numbers[i];
}
console.log(Numbers);

var array = [1,6,7,8,3,4,5,6]
array.sort().reverse()
console.log(array);

var array2 = [1,6,7,8,3,4,5,6]
var arrayMore3 = array2.filter(n => n > 3);
console.log(arrayMore3);

function take(list, num) {
    for (i = 0; i < list.length; i++){
        if (list[i] == num)
        return i
    }
}
console.log(take(array2, 7));

for (a = 15; a >= 10; a--) {
    console.log(a);
}

function prime(b) {
    for (i = 2; i < b; i++) { 
        if (b%i == 0) {
            return 
        }
    }
    console.log(b);
}

for (c = 1; c < 15; c++) {
    prime(c)
}

for (e = 1; e < 15; e++) {
    if (e%2 != 0) {
    console.log(e);
    }
}