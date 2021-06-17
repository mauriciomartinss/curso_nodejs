let args = process.argv.slice(2);
//o slice(2) significa que serao considerados os dois primeiros argumentos e os seguintes não.

//cada argumento eh separado por backspace;

//neste caso, o args vai ser um array com duas posições;

//para fins de operação basta fazer o seguinte:

let argumentA = args[0]; //argumentA recebe o primeiro argumento
let argumentB = args[1]; //argumentB recebe o segundo

// console.log("['errado']", argumentA + argumentB); //vai gerar um erro. eh necessario fazer a conversao para numero (serah que eh o casting em c++ ?)
// console.log("['certo']",Number(argumentA) + Number(argumentB)); //agora sim!

//apesar de ser simples, uma boa pratica seria criar uma funcao para realizar a soma dos argumentos:

let sum = (a, b) => Number(a) + Number(b); //no caso foi feita na forma de arrow function

console.log("[sum arrow with arrow function]", sum(argumentA, argumentB));