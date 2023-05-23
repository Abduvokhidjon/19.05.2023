/*Task 2: Using the logical || operator


Now, you're about to code some snippets related to the game over condition.

You need to code a new variable named damageReceived and set it to 0 and another variable battleTimeLeft and set it 0. 
You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either 
the value of the damageReceived variable is greater or equal to the value of the energy variable OR if battleTimeLeft is zero.

Complete the task using the following steps:

Declare the variable battleTimeLeft, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.
Declare the variable damageReceived, and assign the value of 0 to it.

Console log the following parameters: "Game over: ", and battleTimeLeft == 0 || energy > damageReceived

Note that the expected output in the console should be: "Game over: true".
Try changing the variable values to and then see how it affects the result.

*/

var damageReceived
var battleTimeLeft
var energy

damageReceived = 10
battleTimeLeft = 0
energy = 12
isGameOver = battleTimeLeft == 0 || energy < damageReceived
console.log("Game over: " + isGameOver)
