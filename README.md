# Odin-Rock-Paper-Scissors
The Odin Project: https://www.theodinproject.com/

# Overview
Make a basic Rock/Paper/Scissors game in JavaScript, to be played entirely in the browser's console.
- The user inputs their choice of item into a prompt, and the computer makes its choice. The game runs for five rounds, keeping track of each player's score.

# Plan
1. No UI is needed yet, just use the browser's console
2. Inputs
    - User chooses rock/paper/scissors
    - JS chooses rock/paper/scissors at random
3. Desired Output
    - Compare user choice and JS choice
    - Evaluate outcome (who won)
4. Steps necessary to return the desired output
    1. JS chooses rock/paper/scissors at random
    2. User chooses rock/paper/scissors
    3. Compare choices against rock/paper/scissors rules
    4. Evaluate and establish who won the game
    5. Ask if the user wants to play again

# Pseudocode
1. The user asked to input what option (rock/paper/scissors) they want to use
2. The computer makes its option choice
3. User choice is compared to computer choice
4. If the choices are the same, then return "draw"
5. If the choices are scissors vs. paper, return whoever chose scissors as the winner
6. Repeat step 5 for the other rock/paper/scissors rulings
7. Play the game 5 times, keeping score of who won what rounds
8. Declare a winner/loser at the end of 5 rounds 

# Subproblems
1. Get User input
2. Establish Computer input
3. Compare choices
4. If the same choice, return the draw & ask if the user wants to play again. If yes return to the start of the game, if no, end the game
5. Repeat the game four more times (a total of 5 playthroughs)
6. Keep track of who won each round with a total score tracker
7. At the end of the five rounds report who won 

# Solutions
1. Got user input by using a prompt
2. I struggled a little with this, especially as I was unsure how to use the `getComputerChoice` function, but I was able to use a string array to show the choices the computer could make, and then use some Math functions to choose a random number between 0 and 2, which when combined chose 0=Scissors, 1=Rock, 2=Paper
3. I combined steps 3 and 4 and made it into an if..else if tree inside a play round function 
4. Added a player and computer win count and added a scoring mechanism within the `playRound` function
5. Added a for loop to keep the game running for 5 rounds

# Skills Demonstrated
- Created HTML boilerplate
- Used embedded JavaScript 
- Defined several variables and functions in JavaScript
- Implemented a For loop in JavaScript
- Console-logged function outputs
- Planning and implementation of a solution to a task
- JavaScript Syntax 

# Issues
- It's best to streamline code as much as you can - leaving excess/unused code can lead to errors or unexpected results
- When changing the value of a variable (WinCount variables) +/-= symbols are used so that the value is updated AND reassigned back to the variable, without the = sign, there would be a floating value left
