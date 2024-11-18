// code.test.js 
// Maxie Machado 
// Dynamic Euler

const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

assert.strictEqual((function testFactorial() {
    let fact = 1;
    for (let i = 1; i <= 10; i++) fact *= i;
    return fact;
})(), 3628800);

assert.strictEqual(e(0), 1);
assert.strictEqual(e(1), 2);
assert.strictEqual(e(2), 2.5);
assert.strictEqual(Math.abs(e(10) - 2.7182818011463845) < 1e-10, true);

console.log("e(15):", e(15));
assert.strictEqual(Math.abs(e(15) - 2.718281828458995) < 1e-10, true);
