import { println } from "./utils";

/*      1.0
Finish the provided factorial function, so that it returns the value n!.
Your code should use a for loop to compute the product 1 * 2 * 3 * ... * n. 
If you write the code carefully, you won't need a special case for when n equals 0.

Once implemented, uncomment the Program.assertEqual() statements at the bottom to verify that the test assertions pass.
*/

/*//    1.0
var factorial = function(n) {
    var result = 1;
    for(var i = 1; i <= n; i++ ) {
        result*=i;
    }

    return result;
};
*/

/*      2.0
In this challenge you will write a recursive function that returns the value of n!.

Start by writing the base case:
if n is zero, then factorial should just return the value 1.

Once implemented, uncomment the Program.assertEqual() for factorial(0) at the bottom to verify that the test assertion passes.
*/

//      2.0
var factorial = function(n) {
    // base case:
    if (n===0) {
        return 1;
    }
	
	// recursive case:
    return n*factorial(n-1);
}; 

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");

println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 5! is " + factorial(5));
println("The value of 0! should be 1");
println("The value of 0! is " + factorial(0));

//Program.assertEqual(factorial(5), 120);
//Program.assertEqual(factorial(0), 1);