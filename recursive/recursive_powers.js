import { println, Program } from "../utils";

/*
Write a recursive function power(x, n) that returns the value of x^n.
(assume that n is an integer)

Start by writing the base case.

There are three recursive cases. In this step, write the recursive case for which n is odd.
You should use the provided function isOdd() to check if n is odd.

In this step, write the recursive case for which n is even.
You should use the provided function isEven() to check if n is even.

There are three recursive cases. In this step, write the recursive case for which n is negative.
Compute x raised to -n recursively, and return the reciprocal of that number.

Once implemented, uncomment the relevant displayPower() to see how the result is computed,
 and uncomment the relevant Program.assertEqual() to make sure the test passes.
*/


var isEven = function (n) {
    return n % 2 === 0;
};

var isOdd = function (n) {
    return !isEven(n);
};

var power = function (x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case:
    if (n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if (n < 0) {
        return 1 / power(x, -n);
    }
    // recursive case: n is odd
    if (isOdd(n)) {
        return x * power(x, n - 1);
    }
    // recursive case: n is even
    if (isEven(n)) {
        var y = power(x, n / 2);
        return y * y;
    }

};

var displayPower = function (x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
//Program.assertEqual(power(3, 1), 3);
//displayPower(3, 2);
//Program.assertEqual(power(3, 2), 9);
//displayPower(3, -1);
//Program.assertEqual(power(3, -1), 1/3);
