Welcome! 

In our first lesson here we will be focusing on learning about **variables** and **data types**. 
Let's jump right in. 

So what exactly is a variable? You can think of variables as a box where you can store a value. A **value** is information that is related a certain variable. 
	
	statement = "Hello"
	
Now, we have a variable called statement, with the message "Hello" stored inside. Making variables is pretty simple in Python. Let's print that statement now:

	print(statement)
When you run your program, "Hello" should have been printed out. 
You can create whatever variables you want, but there are a couple rules that you need to follow when naming your variables:

1. Variable names cannot start with a number. Variable names can also only contain letters, numbers, and underscores. 

2. No spaces should be in your variable names.

3. There are some words that Python has kept for programming functions or keywords, like for, not, try, as, if, and more. You cannot use those words when naming your variables.

Alright, now that we know the rules, let's learn about the different types of data. Programs deal with data a lot, so it's a good idea to understand the different types of data in Python.

**Strings:** A string is a series of characters. The way you declare, or create a string is just like how we made the variable, statement from earlier; by placing whatever message we want to have in "quotation marks". 
	
	"String"

**Integers:** In Python, we can multiply, divide, add, and subtract integers with ease. 

	>>>2*5 
	10
	>>>2/1
	2
	>>>2+5
	7
	>>>2-1
	1
**Floats:** These are numbers with decimal points. We can peform similar operations(+, -, *, /) on floats like we could on integers, without too much trouble.

	>>>0.2 + 1.3
	1.5
However, we may get a large number of decimal places in the answers to our calculations. Just try to ignore them for now, all Python is doing is trying to give us the most exact number.
	
	>>>0.2 + 0.1
	.3000000004

Alright, now we know about a couple of different data types in Python. Now let's see what we can do with that data. 

A **method**, is an action that the programming language you are using, whether it be Python or Java, can perform on a certain piece of data.

For example, let's say that I made a string, and I wanted to change the case(A or a) of certain letters in that string. I could use a couple of different methods to make that happen.
	
	myName = "ted martinez"
	print(myName.title())
	
The method I used is title(). When I use that method, this is what Python prints out.
	
	Ted Martinez
That small dot in front of the word title, is what makes the title() method act on the variable, myName. Sometimes, certain methods will need more information to act, that is why there are parentheses following the word title. 

Here are some other methods you can use to change your strings.

	print(myName.lower())
	print(myName.upper())
	
Here is what prints out:

	ted martinez
	TED MARTINEZ
	
You can also combine strings together, using the + sign, as shown below.

	first_name = "Ted"
	last_name = "Martinez"
	full_name = first_name + " " +  last_name
	print(full_name)
We added an extra " " so that there could be a space between the first name and the last name.
Python should print this out:
	
	"Ted Martinez"
If you ever want to add a tab to your text, you can add \t when printing out a string.
	
	print("Hello")
	print("\tHello")
This should print out:
	
	Hello
		Hello
You can also have a string break into a new line by using \n.
	
	print("Hello\nMy name is\nTed")
	
This should print out:
	
	Hello
	My name is
	Ted

	
	


	

