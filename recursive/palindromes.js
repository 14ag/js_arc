import { println } from "../utils";

/*
https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
In this challenge, you'll make it so the isPalindrome() function returns true
 if the provided string is a palindrome, and false otherwise.

Start by implementing the first base case:
if the length of the string is 0 or 1, isPalindrome() should return true.
There is a second base case.

If the first and last characters of the string are different, then we know
 immediately that the string is not a palindrome. Write this case, using the provided
  functions firstCharacter and
 lastCharacter to extract the needed characters from the string.

Once implemented, uncomment the first Program.assertEqual() for isPalindrome("a")
 at the bottom to verify that the test assertion passes.
*/


// Returns the first character of the string str
var firstCharacter = function (str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function (str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function (str) {
    return str.slice(1, -1);
};

var isPalindrome = function (str) {
    // base case #1
    if (str.length <= 1) {
        return true;
        // base case #2
    } else if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    } else {
        // recursive case
        str = middleCharacters(str);
        return isPalindrome(str);
    }
};

var checkPalindrome = function (str) {
    println("Is this word a palindrome? " + str);
    println(isPalindrome(str));
};

checkPalindrome("a");
//Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
//Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
//Program.assertEqual(isPalindrome("rotor"), true);

