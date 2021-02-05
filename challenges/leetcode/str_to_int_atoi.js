var myAtoi = function (s) {
    const regex = new RegExp('[a-zA-Z.]');
    const min = -2147483648;
    const max = 2147483648 - 1;
    let num = '';
    let onNum = false;

    const isNum = (n) => !isNaN(parseInt(n));

    const minMax = (n) => {
        const int = parseInt(n);
        if (int < min) {
            return min;
        } else if (int > max) {
            return max;
        }

        return int;
    };

    if (isNum(s)) return minMax(s);

    for (let c of s) {
        if (regex.test(c)) break;

        if (!onNum) {
            if (c === '+') {
                onNum = true;
            }
            if (c === '-' || isNum(c)) {
                num += c;
                onNum = true;
            }
        } else {
            if (isNum(c)) {
                num += c;
            } else {
                break;
            }
        }
    }

    return isNum(num) ? minMax(num) : 0;
};