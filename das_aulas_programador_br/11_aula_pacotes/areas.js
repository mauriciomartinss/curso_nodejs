//funcoes que calculam area de figuras geometricas;
module.exports.calcularQuadrado = (lado) => Number(lado) * Number(lado);
module.exports.calcularRetangulo = (base, altura) => Number(base) * Number(altura);
module.exports.calcularTriangulo = (base, altura) => (Number(base) * Number(altura))/2;
module.exports.calcularCirculo = (raio) => { const pi = 3.14; return Number(pi) * (Number(raio)) * (Number(raio))};