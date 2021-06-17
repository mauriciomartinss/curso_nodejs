// let sum = require("./sum"); //pode ser criado varios arquivos separados
// let times = require("./times");
// let split = require("./split");
// let minus = require("./minus");
// let power = require("./power");

let calc = require("./calc"); //ou pode ser criado apenas um arquivo contendo um objeto

let args = process.argv.slice(2);
let operSignal = args[0];
let argA = args[1];
let argB = args[2];
let result;
let error = false; 

if(operSignal == '+') {
    result = calc.sum(argA, argB);
} else if (operSignal == '-') {
    result = calc.minus(argA, argB);
} else if (operSignal == 'x') {
    result =  calc.times(argA, argB);
} else if (operSignal == '/') {
    result =  calc.split(argA, argB);
} else if (operSignal == '^') {
    result =  calc.power(argA, argB);
} else {
    error = true;
    console.log("[ERROR] - invalid error");

}

if (error != true) {
    console.log(result);
}

// a aula 09 mostra como exportar as funções e usar conceitos de objetos
