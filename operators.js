// {1. Arithmetic Operators}
var num = 0;
    num = num + 2;
    num = num * 3;
    num = num / 2;
    num++;
    num--;
// {2. Assignment Operators}
    num += 1;
    num -= 2;
    num *= 3;
    num /= 2;
    num %= 3;

// {3. Comparison Operators}
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

// {4. Logical Operators}
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

// {5. Bitwise Operators}
var data = 5;

console.log('5 & 1:', (data & 1));
console.log('5 | 1:', (data | 1));
console.log('~ 5:', (~data));
console.log('5 ^ 1:', (data ^ 1));
console.log('5 << 1:', (data << 1));
console.log('5 >> 1:', (data >> 1));