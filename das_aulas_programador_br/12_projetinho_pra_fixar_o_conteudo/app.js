const sharp = require('sharp');

let path = process.argv[2];
let width = Number(process.argv[3]);

console.log(path, width);

function resize(path, width) {
    sharp(path).resize({ width: width }).toFile('./temp/output.jpg', (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('imagem alterada com sucesso');
        }
    });
}
resize(path, width);