function add(...args) {
    return args.reduce((total, num) => total + num, 0);
}

function subtract(...args) {
    return args.reduce((total,num) => total - num);
}

function multiply(...args) {
    return args.reduce((total,num) => total * num);
}

function divide(...args) {
    return args.reduce((total,num) => total / num);
}



console.log(add(5,3,5));

console.log(subtract(10,5));

console.log(multiply(10,5));

console.log(divide(8,2));
