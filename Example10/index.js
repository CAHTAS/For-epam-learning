try{
    console.log (a)
    let a = 3
}
catch(err){
    console.log('let must be declared');
}

try{
    let b = 1 / 0;

    if (b == Infinity){
        throw new Error('cannot be divided by zero');
    }
}
catch(err2){
    console.log(err2.message);
}