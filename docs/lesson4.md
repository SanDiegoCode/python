##Lesson 4 - Loops
In the last lesson, we learned about **lists**, groups of items that are sorted in a certain order. In this lesson, we are going to learn about how we can easily go through the items in a list, using loops. 

**Loops:**

A **loop** is basically a block of code with certain instructions inside that are repeated continously until a certain condition is met. Using loops, we can perform certain actions on every item in a list. For example, let's say we have a group of students, and we want to print out the name of each student in that group. It would be really annoying if we had to print out every student's name one at a time, especially if we had a really big class. We can use a loop print out each student's name with ease.

	students = ['john', 'rose', 'harry']
	for student in students:
		print(student)
		
The second line in this block of code, tells Python that it should take one of the names that is stored in the list 'students' and put that name in the variable 'student'. In the line after that, we tell Python to print out the name of 'student'. Python will then repeat the second and third lines for each student in the list. This is what will print out"

	john
	rose
	harry
	
In for loops, Python will look at the first value in the list "students" and put that value in the variable 'student'. Then, Python will look for the next instruction in the loop, which in this case, is to print out the value of the variable 'student'. Then Python will print out: john. 

There are still more values inside of the list, don't forget about rose and harry. Python will then go back to the second value in the list, put that value in the variable 'student'. Then, it will print out the value inside 'student', which is now the second value of the list, rose. Then, because there is still one more value in the list, Python will go back and repeat the steps for harry. It will stop repeating after that, because there are no more values left in the list.

You can do a lot of different things inside of loops. You can also add in as many lines as you want.

What if we want to do something after the loop? Well, any line after the loop that is not indented will execute once, and won't repeat.

	students = ['john', 'rose', 'harry']
	for student in students:
		print(student)
		print("Nice job, " + student.title() + ".\n")
		
	print('Everyone did really well on their math quiz')
	
This is what will print out:
	
	john
	Nice job, John.
	
	rose
	Nice job, Rose.
	
	harry
	Nice job, Harry.
	
	Everyone did really well on their math quiz
	
It's important to keep in mind that we don't make any mistakes in our indentation. Here are some things to keep in mind while coding:

Python will let you know when you forget to indent something. This is shown here:

	magicians = ['alice', 'david', 'carolina']
	for magician in magicians:
    print(magician)
    
This will show up because we forgot to indent the print line. 

	File "students.py", line 3
    print(student)
        ^
	IndentationError: expected an indented block
You can also make a logical error with loops, as shown here below:

	students = ['john', 'rose', 'harry']
	for student in students:
    	print("Nice job, " + student.title() + ".\n")
    print("I hope you do well on the next one, " + 
    student.title())
This is what will print out:
	
	Nice job, John.
	
	Nice job, Rose.
	
	Nice job, Harry.
	
	I hope you do well on the next one, John
The last message was not repeated for rose and harry, because we did not indent that print command. 
The code will still work, but it won't do what you wanted it to do.

Python will also tell you if you indented something when you did not need to. For example, 

	message = "Hello class!"
		print(message)
		
This is what will happen:

	File "message.py", line 2
    print(message)
    ^
	IndentationError: unexpected indent
Also, you will get a syntax error notification if you forget the colon after you write out your for loop. Don't forget the colon, as it is not always easy to find your mistake if you happen to forget it. 

**Numerical Functions with Lists:** Let's take a break from loops for now, and talk a bit more about lists. So far, we have made lists with String values inside of them, values inside the " ". However, we may need to make list with other types of data. Lists can be pretty useful if we want to deal with a bunch of numbers. 

Let's suppose, we want to make a list of numbers and print them out. We can use Python's range() function, to have Python generate numbers in a certain range. For example:

	for num in range(1, 8)
		print(num)
This is what will print out:

	1
	2
	3
	4
	5
	6
	7
The number 8 did not print out, because the range() function tells Python that it should start from the first number in the parentheses, and stop at the last one. Becasues Python stops the loop when it reaches the last number, the last number will never be printed out. If we wanted to print out the number 8 as well, we could try this:

	for num in range(1, 9)
		print(num)
		
This is what will print out:

	1
	2
	3
	4
	5
	6
	7
	8

There are a couple of functions we can use on a list of numbers. For example, we can find the minimum, maximum, and sum of a list of numbers with ease.

	numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
	min(numbers)
	max(numbers)
	sum(numbers)
This is the output:
	
	0
	9
	45
If we want to split apart, or slice a list into different parts, we can use the following code to do so. Let's say we have a group of employees at a clothing store.

	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	print(workers[0:3])
This is what will print out:

	['Ava', 'Anna', 'Anna']
Let's say we wanted to give employees 1 to 4 a raise.

	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	print(workers[1:4])
This is what will print out:
	
	['Anna', 'Matt', 'Josh']
If you do not put a starting index, the first number before the colon, Python will start from the beginning of the list.

	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	print(workers[:4])
This is what will print out.

	['Ava', 'Anna', 'Matt', 'Josh']
	
If you don't put an ending index, the number after the colon, Python will go all the way to the end of the list.
	
	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	print(workers[2:])
	
This is what will print out:

	['Matt', 'Josh', 'Liz']
You can also use negative indexes and Python will move from the back of the list. For example, let's say we wanted to print out the last three employees's names. 

	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	print(workers[-3:])
	
This is what will print out:

	['Matt', 'Josh', 'Liz']
We can loop through slices of lists just like we can with whole lists. 

	workers = ['Ava', 'Anna', 'Matt', 'Josh', 'Liz']
	
	print("These are the employees that will get a raise")
	for worker in workers[:3]
		print(worker.title())
		
This is what will print out:
	
	These are the employees that will get a raise
	Ava
	Anna
	Matt
We can also copy one list into another. Let's say that we have two students who are picking out food from a menu at a diner.
	
	my_food = ['burger', 'fries', 'milkshake']
	friend_food = [:]
	
	print("I'd like to order: ")
	print(my_food)
	
	print('\nAnd I'd like to order: ")
	print(friend_food) 
	
This is what will print out:

	I'd like to order:
	['burger', 'fries', 'milkshake']
	
	And I'd like to order:
	['burger', 'fries', 'milkshake']

**Tuples:**
You can treat	copies of lists as totally different lists. 
Now, as an end to this lesson, let's learn about lists that cannot change, unlike regular lists. This type of list is known as a tuple. 

We need to use parentheses () instead of square brackets [] when defining a tuple, as shown below. Let's say we want to make a shape with certain measurements. 

	square = (50, 50)
	print(square[0])
	print(square[1])
If we try to change the values of the items in the list, Python will return an error message.

You can loop through tuples as you would with a list. You can't change the values in a tuple, but you can redefine the tuple to contain new values.

	shape = (50, 50)
	print("Dimensions:")
    for dimension in dimensions:
       print(dimension)
	
	shape = (100, 100)
	print("\nNew Dimensions:")
    for dimension in dimensions:
       print(dimension)

This is what will print out:

	Dimensions:
	50
	50
	
	New Dimensions
	100
	100
    
    
    


   

