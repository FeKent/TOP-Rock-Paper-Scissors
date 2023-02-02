# Odin-Rock-Paper-Scissors

Plan

1. No UI needed yet, just using the browser's console
2. Inputs
    - User chooses rock/paper/scissors
    - JS chooses rock/paper/scissors at random
3. Desired Output
    - Compare user choice and JS choice
    - Evaluate outcome (who won)
4. Steps necessary to return desired output
    1. JS chooses rock/paper/scissors at random
    2. User choose rock/paper/scissors
    3. Compare choices against rock/paper/scissors rules
    4. Evaluate and establish who won the game
    5. Ask if the user wants to play again

Pseudocode

1. User asked to input what option (rock/paper/scissors) they want to use
2. Computer makes it's option choice
3. Users choice is compared to computer choice
4. If the choices are the same, then return "draw"
5. If choices are scissor vs. paper, return whoever chose scissors as the winner
6. Repeat step 5 for the other rock/paper/scissors rulings
7. Play the game 5 times, keeping score of who won what rounds
8. Declare a winner/loser at the end of 5 rounds 

Subproblems

1. Get User input
2. Establish Computer input
3. Compare choices
4. If same choice, return draw & ask if user wants to playing again. If yes return to start of game, if no, end game
5. Repeat the game four more times (a total of 5 playthroughs)
6. Keep track of who won each round with a total score tracker
7. At the end of the five rounds report who won 

Solutions

1. Got user input by using prompt
2. Struggled a little with this, especially as I was unsure how to use the   getComputerChoice function, but I was able to use an string array to show the choices the computer could make, and then use some Math functions to choose a random number between 0 and 2, which when combined chose 0=Scissors, 1=Rock, 2=Paper
3. I combined step 3 and 4, and make it into an if..else if tree inside a play round function 