Roland-grid is a challenge one of my friends gave me to make the following:

.html  file
use chrome console
3x3 grid 
console log out row by row

1 4 7

2 5 8

3 6 9

logged out 

[0] [1] [2]

[3] [4] [5]

[6] [7] [8]

random numbers
mustnt  be increments so (2) mustnt be an increment of (1) etc. 

I started by making an empty array and run the randomNumber command and check if the number recurrs in the row (to later check for increments) 
and .push the randomNumber into the array if it meets the requirements.
Then I found out about the .includes function and ran into some problems where the (9), [8] is an increment of (8), [5] which was hard to debug because it didnt happen all the time and each time it happened chrome console would print out 1000 retries a second so my solution was to print a unique console.log each time each logic was true and so found the problem that way, my debugging skills needs some work.
And didnt account for it so my solution was to restart the array from the start and retry from the start, which ultimately will result in a lot of unneccesary retries. 
I will do a .pop function in the second commit and third commit will be a redo of the logic and I will print it out with columns instead of rows 
meaning I really only need 2 or 3 logical checks for the code to work (I think).

Fourth commit will be whatever my friend says I can improve on.
