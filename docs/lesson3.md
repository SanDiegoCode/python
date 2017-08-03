##Lesson 3 - Lists
Now that we know a bit about variables and data types, we can now learn how we can put a bunch of data into one place and how to easily access it, through lists. 

So what exactly is a **list**? A **list** is a group of items that are sorted in a certain order. A list usually contains more than one item, but those items can be whatever you want them to be. You can make a list of places you have visited or a list of numbers from 1-100, whatever you would like. 

##Lists
In Python, you can make a list using square brackets ([]), and inside your list, you can seperate the different items by using commas. For example, let's say we have a group that contains different flavors of ice cream. We want to put those flavors in a list. Let's call that list 'flavors'. 

	flavors = ['chocolate', 'strawberry','vanilla']
	
Now we have made a list of flavors. Let's print out that list.
	
	print(flavors)
	
When Python prints out the list flavors, its going to print the whole thing out, including the square brackets.

	['chocolate', 'strawberry', 'vanilla']
	
Hmm, I'm sure we could print that out in a nicer format. Let's learn how we can access different elements in a list.'

The elements in a list are ordered in a certain way, so we can tell Python to get a certain element from that list by telling Python the position, or index, of the element we want. To do that, all we need to do is write the name of our list, and follow it with the index in square brackets. For example, let's say I want vanilla ice cream:
	
	print(flavors[2])
Note: Most programming langauges including Python, consider the first item in a list, to have the position/index 0, not 1. The second item will be at index 1, the third at index 2, and so on. 

	vanilla

If you want tot get the last item in a list, you can use the index, -1. 
	
	print(flavors[-1])
	vanilla
You can use the index -2, for the second last item in a list, and so on.

You can also use any String functions from our previous lesson on items in a list. Like the title() method below:

	print(flavors[2].title())
	Vanilla
You can use items in a list just like you would use any other variable.

	print("My favorite ice cream flavor is " + flavors[2])
	My favorite ice cream flavor is vanilla

**Changing Items:** In your future programs, you may need to change, add, or remove items from a list. Let's start, by saying, we want to change one of the flavors in our list, from vanilla to mint, but we do not want to change any other flavors. Here is our original list.  	

	flavors = ['chocolate', 'strawberry','vanilla']
	print(flavors)
Let's change the value at index 2, from vanilla to mint.

	flavors[2] = 'mint'
	print(flavors)
	
Here is what happens when we print out our original list.
	
	['chocolate', 'strawberry', 'vanilla']
	
And this is what happens when we print out our list after we changed vanilla to mint.

	['chocolate', 'strawberry', 'mint']
**Adding Items:** As shown, you can change any value in a list.Now, let's say you wanted to add more items to your list. Let's say we wanted to add the flavor, berry, to our original list. We can do this in a couple different ways. 
One way we can add an item is by using the append() method. This method will add an item to the end of our list. 

Let's print out original list again.
	
	print(flavors)
	['chocolate', 'strawberry', 'vanilla']

Now, let's try adding berry to the end of our flavors list.

	flavors.append('berry')
	print(flavors)
Using the append() method will not have any effect on the other items in a list.
	
	['chocolate', 'strawberry', 'vanilla', 'berry']
We can use the append() method to fill out an empty list too.
Side Note: You can make comments in Python using the # symbol, to make it easier to read through your code.

	flavors = [] #this is an empty list
	flavors.append('chocolate')
	flavors.append('strawberry')
	flavors.append('vanilla')
	flavors.append('berry')
	
	print(flavors)
	
This is what will print out:
	
	['chocolate', 'strawberry', 'vanilla', 'berry']
	
You can also use the insert() method to add different items to your list. This method allows you to add an item in any index in the list. Let's try adding another flavor, mint, to the beginning of our original list.

	flavors = ['chocolate', 'strawberry', 'vanilla']
	flavors.insert(0, 'mint')
	print(flavors)
		
This is what will print out:

	['mint', 'chocolate', 'strawberry', 'vanilla']
	
**Removing Items:** Okay, now let's say, we don't want to include the mint flavor in our list anymore. Let's learn how to remove an item from a list. You can remove an item from a list using the del statement.

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	print(flavors)
	
	del flavors[0]
	print(flavors)
	
This is what will print out:

	['mint', 'chocolate', 'strawberry', 'vanilla']
	['chocolate', 'strawberry', 'vanilla']
You can also use the remove() method, to remove a value from a list.

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	print(flavors)

	flavors.remove('mint')
	print(flavors)
This is what will print out:

	['mint', 'chocolate', 'strawberry', 'vanilla']
	['chocolate', 'strawberry', 'vanilla']
We can still work with items that we store in a list. 

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	print(flavors)
	
	fav_flavor = 'mint'
	flavors.remove(flavors[0]
	print(flavors)
	print("\nMy favorite flavor is " + fav_flavor) 
	# the \n is to print that statement on a new line
This is what will print out:

	['mint', 'chocolate', 'strawberry', 'vanilla']
	['chocolate', 'strawberry', 'vanilla']
	
	My favorite flavor is vanilla
You can also remove and item but still work with it, using the pop() method. 
	
	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	fav_flavor = flavors.pop(0)
	print("My favorite flavor is " + fav_flavor)
This is what will print out:
	
	My favorite flavor is mint
If you don't put a certain index in the parentheses of the pop() method, it will remove the item at the end of the list. 

**Ordering a List:** There are also methods that you can use to order the items in your list. Let's say we want to order the flavors in our list alphabetically. We can use the sort method to do so:

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	flavors.sort()
	print(flavors)
This is what will print out.

	['chocolate', 'mint", 'strawberry', 'vanilla']
	
You can also print the list in a reverse alphabetical order, by passing an argument in the sort method reverse, and setting it to TRUE.
	
	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	flavors.sort(reverse = True)
	print(flavors)
	
This is what will print out.

	['vanilla', 'strawberry', 'mint', 'chocolate']
	
You can also use a list in a sorted order, without having to change the order of your original list, by using the sorted method. 

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	print(flavors)
	print(sorted(flavors))
	
This is what will print out:

	['mint', chocolate', 'strawberry', 'vanilla']
	['chocolate', 'mint", 'strawberry', 'vanilla']
You can print a list out in the reverse of its original order by using the reverse() method. 

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	print(flavors)

	flavors.reverse()
	print(flavors)
This is what will print out:

	['mint', chocolate', 'strawberry', 'vanilla']
	['vanilla', 'strawberry', 'chocolate', 'mint']
	
If you want to find out the number of items in a list, or the length of a list, you can use the len() function:

	flavors = ['mint', chocolate', 'strawberry', 'vanilla']
	len(flavors)
	4
That's it! Now you know the basic concepts of lists. 
	 
	
