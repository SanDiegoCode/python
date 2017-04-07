##Lesson 5: Dictionaries
Dictionaries, are sort of like lists, which we learned about in lesson 2. However, there are a couple of key differences between the two. 

1. Lists are ordered. Dictionaries are not. 
2. Items in lists are accessed through indices (0, 1, 2..) and items in dictionaries are accessed through keys. 

A dictionary can be defined as an associative array. What that means is, is that every key for a dictionary can be associated to a value. 

Dictionaries can be of any type. Here is an example. Let's say we want to create a description for a student named Tom. In this description, we want to include Tom's name, age, and student ID number.

	bio = { 'name' : 'Tom', 'age': '19', 'id' : '1234567'}
	print bio['name']
	
This is what would print out.
	
	Tom
We can do the same for his age, and his id number. With dictionaries we can access items through keys. Let's look 
at the dictionary or dict we just created. 

In bio, we have three items, Tom's name, his age, and his id number. For each item, we have a key; 'name', 'age', and 'id', that respectively associate with each value in the dictionary. Meaning, 'name' for 'Tom', 'age' for '19', and 'id' for '1234567'. 

If we want to add more items into a list, we can do so as shown here. It's sort of similar to adding items to a list. Let's go back to our dictionary. This is what we have right now.

	bio = { 'name' : 'Tom', 'age': '19', 'id' : '1234567'}
Let's say we want to add Tom's college major to the list. We can do so as shown here:

	bio['major'] = 'Math'
The structure for the statement to add an item to a dictionary is as follows: **dictionaryname['key'] = 'value'**. Obviously, as dictionaries can be of any type, we can make the values any type we want. We can print out values of a dictionary using : dictionaryname['key'].

If a value of an item in a dictionary is the same as a key in another dictionary, we can use that as a key. Meaning, let's say we have a dictionary for some U.S states. This is what the dict looks like:

	state = {'California' : 'CA', 'Oregon' : 'OR', 'Washington' : 'WA'}
Let's say we have another dictionary that has a bunch of capital cities of states.	

	city = {'CA' : 'Sacremento', 'OR' : 'Salem', 'WA' : 'Olympia'}
As you can see, the values of the 'state' dictionary are the same as the keys for the 'city' dictionary. Therefore, let's say we want to print out the capital city of a certain state, we can do so in two ways. 

	print(city['CA'])
	print(city[state['California']])
Both of these will print out:

	Sacremento