module.exports = function power(a, b) {
    let a1 = a;
    if (b == 0) {
      return a = 1; // retornarah valor um e vai
    }
    for (let i = 1; i < b; i++) {
        a = a * a1;
    }
    return a;
}