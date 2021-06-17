let chars = '1234567890ABCDEF';
let randomNumber;
let hexValue = [];
for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random()*16);
    hexValue[i] = (chars[randomNumber]);
}

console.log("#" + hexValue.join('').toLowerCase());

