let calc = {
    sum: (a, b) => {
        return Number(a) + Number(b);
    },
    power: (a, b) => {
        let a1 = a;
        if (b == 0) {
          return a = 1; // retornarah valor um e vai
        }
        for (let i = 1; i < b; i++) {
            a = a * a1;
        }
        return Number(a);
    },
    times: (a, b) => {
        return Number(a) * Number(b);
    },
    split: (a, b) => {
        return a / b;
    },
    minus: (a, b) => {
        return a - b;
    }
}

module.exports  = calc;