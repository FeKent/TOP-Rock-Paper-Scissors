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
5. Ask if user wants to play again, if yes restart process, if no, end game
6. If choices are scissor vs. paper, return whoever chose scissors as the winner
7. Repeat step 5 for the other rock/paper/scissors rulings
8. Ask if user wants to play again, if yes restart process, if no, end game

Subproblems

1. Get User input
2. Establish Computer input
3. Add a keep playing while loop
4. Compare choices
5. If same choice, return draw & ask if user wants to playing again. If yes return to start of game, if no, end game
