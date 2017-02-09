## Lesson 2 - Control Structures/ Input-Output

In this lesson we'll go over basic logic and how to take in input from the user.

First, we're going to introduce a new data type to you - the boolean

**Booleans** contain either a true or false value. For example, if we wanted to make a variable that stored the value of whether it was raining or not, we'd do:

	isRaining = false

But what use is a variable if we can't do anything with it? Sure, we can print it, but that's pretty limiting. This is where **control structures** come into play.

**Control Structure:** if/else statement

These are the most used control structures you'll use, and probably the go-to one's you will need. These are best explained with an example, so I'm going to show you how to determine whether it is raining (adding onto our previous example)

	if (isRaining == True):
		print("Get an umbrella!")
	else:
		print("No umbrella needed")
		
As you can see, in this piece of code, we're able to determine whether it is raining or not. Now what if we want to classify different **levels** of rain? For this, we'd use an integer.

	weatherLevel = 0 

Now, we can rewrite the above method.

	if (weatherLevel == 0):
		print("Get an umbrella!")
	else:
		print("No umbrella needed")

As you see here, we are using a new operator: **==**

Unlike **=**, the **==** checks for **equality**, rather than assigning a value (which is what **=** does)

There are 5 types of **control operators**

| Operator | What it Means |         
| -------- |-------------|
| **==** | Equals|
| **!=** | Not Equals|
| **>**  | Greater Than|
| **>=** | Greater Than or Equal To|
| **<**  | Less Than|
| **<=**  | Less Than or Equal To|


We can also **combine operators**, using the following operators

| Structure | What it does|
| ------- | -------- | 
| ```or``` | Or |
| ```and``` | Or |

Lets use these in an example.

	isRaining = True
	weatherLevel = 2
	
	if (isRaining):
		if (weatherLevel == 1):
			print("bring an umbrella")
		elif (weatherLevel >= 2):
			print("don't go outside!")
	else:
		print("perfect weather!")

