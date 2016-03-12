# JS-Basics for Dev League Prep

## Getting Started
1. **Fork** this repository
1. **clone** this repo from your personal GitHub account.
    - Copy the SSH address on the page
    - Run the command: `$ git clone [YOUR SSH ADDRESS]` to clone this repo onto your computer.
1. Navigate into the exercise folder, e.g. `$ cd prep-js-basics`.
1. Run the command: `$ npm install` to get all other files needed to run the tests.
1. Your work will be entered into the file named `index.js`
1. Run your tests with the command `$ npm test`.
  - You will need to enter this command each time you want to run the tests.

## Exercises

1. **Variables with a String as their value**

  Declare variables named `firstName`, `lastName`, and `birthPlace`. Fill out the values for these with your own data or make it up. It should be a String.

1. **Variables with a Number as their value**

  Declare variables named `favoriteNumber`, `currentYear`, and `thatOnePrinceSong`. Their values should be a Number.

1. **Variables with Boolean values**

  Declare variables named `isDaytime`, `isLeftHanded`, `inHawaii`, and `isHappyCoding`. Their values should be a Boolean.

1. **Variables with null**

  Declare variables named `enrolledAtDevLeague` and `completedFridayPrep`. Their values should be a Null value.

1. **Variables with an Array for it's value**

  Declare a variable named `westCoast` which is an Array. This Array contains the names of all the states which can be found along the west coast of The United States.

1. **Variables with an Array for it's value**

  Declare a variable named `evenNumbers` which is an Array. This Array contains numbers that are considered 'even values'. Have at least ten even values in this array.

1. **Variables with the outcome of an arithmetic operation**

  Declare a variable named `sumOfNumbers` which is a Number. This Number contains the result of performing an arithmetic operation on two numbers. Have this variable store the result of adding 3 numbers of your choosing. Extend this behavior to include subtraction, multiplication and division.

1. **Variables with the outcome of a comparison operation**

  Declare a variable named `isEqual` which is a Boolean. This Boolean contains the result of performing a comparison to test if two strings are equal. We want to compare the two strings "Tacocat" and "tacocat" and `console.log()` the result.

  *Note:*
    There is no test which tests your console.log()'s output'.
    Also, there are zero tests for the BONUS below.

  *Bonus:*
    See if you can come up with a few examples of double comparison
    operator(==) vs triple comparison operator(===).

1. **Variables with the outcome of an assignment operation**

  Declare a variable named `generalContainer`. This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type and can change values.

  Write 5 different assignment statements and `console.log()` the value of the variable after each assignment statement to show the current value.

  *note:*
    The tests for this section cannot test your variable as it changes, it can only test that you declared the variable by giving it the right name.

1. **Declare Functions: jump**

  Declare a Function named `jump` which takes a single argument, `height`. This function should return a String, "You jumped 9 feet high!" if invoked in this way, `jump(9)`

  Store the return value to a variable named `jumpResult` and use console.log to inspect the value which was returned by your function.

1. **Declare Functions: cook**

  Declare a Function named `cook` which a takes three arguments/parameters, `ingredient1`, `ingredient2`, `recipeName`.

  This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!" if invoked in this way, `cook("Tomatoes", "Cheese", "Pizza");`

## Testing your work
Use the command `$ npm test` to run tests which will validate your work.

# References
- [slides](https://slides.com/sgnl/js-basics)
