#Challenges##The Number Guessing GameFor this activity, you will be making a number guessing game! The premise is that you will generate a random number in a certain range (1-1000 works best), and the user needs to guess the number. ###Running the program:The python script starts up, generating a random number. It **prompts** the user for a guess. There is a 99.9% chance that this guess will be wrong. If the guess is lower than the number generated,	too low will print. If the guess is higher than the number generated, 	too high will print.After this, the user is again prompted for a guess. This **repeats** until the user guesses the correct number.###Try It Out!Try to write the script above using everything you've learned so far. It includes conditional statements and loops.In order to do this, you need to import a library called random, which allows you to generate a random number in a certain range. At the top of your script, write	import randomThis library has a function called "randint", taking in two parameters: the low bound, and the high bound. For example, if you want a number between 42 and 420, you would write	randomNumber = random.randint(42, 420)This sets "randomNumber" to a random integer between 42 and 420.Now you have everything you need to write this script! First, try to write it by yourself, using everything you've learned so far. If you're having trouble, refer to the **pseudocode** below. <a href="#link" id="link" onclick="toggleSolution()">View Solution</a>

<div id="solution" style="display: none;">
<pre><code>
import random
import math

rand = random.randint(1,1000)
highorlow = ''
guess = int(input('Guess a number between 1 and 1000\n'))

while(guess != rand):
    if(guess < rand):
        highorlow = 'too low'
    else:
        highorlow = 'too high'
    guess = int(input(highorlow + ', Guess again!\n'))
print('You got it!')
</code></pre>
</div>
<script>
</script>