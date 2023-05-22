const Str = 'ahb acb aeb aeeb adcb axeb';
const mtch = /a.b/g;
console.log(Str.match(mtch));

const Str2 = '2 + 3 223 2223';
const re = /2 \+ 3/g;
console.log(Str2.match(re));

var date = new Date();
var now = date.toLocaleString();
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());