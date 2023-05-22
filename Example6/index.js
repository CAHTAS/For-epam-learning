var car = {
    color: 'black',
    power: '150'
}
car.color = 'green'
// console.log(car.color);
console.log(car.power);

var pears = 2
var apples = 5
function AddAcceptedFruit(NewPears, NewApples) {
    return [pears = pears + NewPears, apples = apples + NewApples]
}
console.log(AddAcceptedFruit(1, 1));
console.log(AddAcceptedFruit(2, 2));

var SavedName = ['Andrey', 'Anna', 'Dmitriy', 'Alex', 'Timur']
function DefineName(name) {
    if (SavedName.includes(name))
        console.log('Hello ' + name);
    else 
        console.log('There is no such name');
}
DefineName('Andr')

function ParametrType(param) {
    console.log(typeof(param)); 
}
ParametrType(car)

function prime(number) {
    for (i = 2; i < number; i++) { 
        if (number%i == 0) {
            console.log('No prime');
            return 
        }
    }
    console.log('Prime');
}
prime(7)