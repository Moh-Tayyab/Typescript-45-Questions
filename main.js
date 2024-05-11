/*
2.Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var personName = 'Eric';
console.log("Hello ".concat(personName, " would you like to learn python today?"));
/*
3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
*/
//simple answer
//          ucase lcase tcase
var zain = "ZAIN  zain  Zain";
console.log(zain);
var fName = 'muhammad';
var lName = 'TAYYYAB';
var fulName = fName + " " + lName;
var result1 = fulName.toUpperCase();
var result2 = fulName.toLowerCase();
function tCase(fulName) {
    var word = fulName.toLowerCase().split(" ");
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    var responce = word.join(" ");
    console.log(responce);
    return responce;
}
tCase(result1); //title Case
console.log(result1); // Upper Case
console.log(result2); // Lower Case
/*
4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:
*/
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
/*
5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.
*/
var famous_person = 'M.Tayyab';
var message = 'Set a goal that makes you want to jump out of bed every morning';
console.log("".concat(famous_person, ", ").concat(message));
/*
6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after striping
the white spaces.
*/
// simple Answer
console.log("Hello\tworld");
console.log("Hello\nworld");
//practice
var personName1 = "Muhammad Tayyab";
console.log("personNameWithWhiteSpace:\t".concat(personName1, "\t\n"));
var strippingg = personName1.trim();
console.log("stripping Name: ".concat(personName1));
/*
7.Number Eight: Write addition, subtraction, multiplication, and division operations
that each result in the number 8. Be sure to enclose your operations in print statements
to see the results.
*/
var a = 5;
a += 3;
console.log(a);
var b = 10;
b -= 2;
console.log(b);
var c = 4;
c *= 2;
console.log(c);
var d = 16;
d /= 2;
console.log(d);
//second method 
/*
const x = 5
const y = 3

const add = x+y
const sub = x-y
const multi = x*y
const div = 16/4

console.log("Addition:" ,add);
console.log("Subtract:" ,sub);
console.log("Multiply:" ,multi);
console.log("Division:" ,div);
*/
/*
8.You should create four lines that look like this:

console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.
*/
console.log(5 + 3);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
/*
9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
*/
var frvtNum = 5;
console.log("".concat(frvtNum, " is my favourite and my lucky number."));
/*
10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file. Then write one sentence
describing what the program does.
*/
var num1 = 5;
var num2 = 10;
//add
console.log("".concat(num1, "+").concat(num2, " = ").concat(num1 + num2));
//sub
console.log("".concat(num1, "-").concat(num2, " = ").concat(num1 - num2));
//multiple
console.log("".concat(num1, "*").concat(num2, " = ").concat(num1 * num2));
//divide
console.log("".concat(num1, "/").concat(num2, " = ").concat(num1 / num2));
/*
11.Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
var names = ['Zain', 'Ali', 'Umair', 'Bini', 'Sulman'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/*
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
*/
/*
12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name.
*/
// exercise no 11
var names4 = ['Zain', 'Ali', 'Umair', 'Bini', 'Sulman'];
var message4 = 'Would you like learn Python.';
for (var i = 0; i < names4.length; i++) {
    console.log("".concat(names4[i], ", ").concat(message));
}
/*
13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.”
*/
var transport = ['Honda', 'Suzuki', 'Ferrari', 'Tesla', 'BMW'];
transport.map(function (company) {
    console.log("I would like to own a ".concat(company));
});
/*
14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your
list to print a message to each person, inviting them to dinner.
*/
var guest = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam'];
guest.map(function (item) {
    console.log("Dear ".concat(item, ", you are invited to dinner."));
});
/*
15.Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
    
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
    
• Print a second set of invitation messages, one for each person who is still in your list.
*/
// exercise 14
var guest2 = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam'];
var newGuest = 'Hina Naseer';
var removeGuest = 'Ameen Alam';
guest2[guest2.indexOf(removeGuest)] = newGuest;
guest2.map(function (items) {
    console.log("Dear ".concat(items, " you are invited dinner."));
});
console.log(guest2);
/*
16.More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list.
*/
var guest3 = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam'];
var addStart = 'Muhammad Anas';
guest3.unshift(addStart);
var addMiddle = 'Muhammad Hamza';
var middleIndex = guest3.length / 2;
guest3.splice(middleIndex, 0, addMiddle);
console.log(guest3);
var addEnd = 'Fahad Khan';
guest3.push(addEnd);
console.log(guest3);
guest3.map(function (items) {
    console.log("Dear ".concat(items, " you are invited dinner"));
});
/*
18.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
have an empty list at the end of your program.

*/
var guest4 = ['Zia Khan', 'Daniyal Nagori', 'Ameen Alam'];
var addStart1 = 'Muhammad Anas';
guest4.unshift(addStart);
var addMiddle1 = 'Muhammad Hamza';
var middleIndex1 = guest4.length / 2;
guest4.splice(middleIndex1, 0, addMiddle1);
console.log(guest4);
var addEnd1 = 'Fahad Khan';
guest.push(addEnd1);
console.log(guest4);
guest4.map(function (items) {
    console.log("Dear ".concat(items, " you are invited dinner"));
});
console.log("Sorry, I can not invit to dinner");
while (guest4.length > 2) {
    var removeGuest_1 = guest4.pop();
    console.log("dear ".concat(removeGuest_1, " you are not invited to dinner"));
}
guest4.map(function (answer) {
    console.log("Dear ".concat(answer, " you are invited to dinner."));
});
guest4.pop();
guest4.shift();
console.log(guest4);
//18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var frvtPlace = ["Madina", "Dubai", "New York", "Canada", "Singapore"];
// Print the array in its original order
console.log("Original Order:", frvtPlace.slice());
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], frvtPlace, true).sort());
// Show that the array is still in its original order by printing it
console.log("Original Order:", frvtPlace.slice());
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], frvtPlace, true).sort().reverse());
console.log("Random Order:", frvtPlace.sort(function () { return Math.random() - 0.5; }));
// Show that the array is still in its original order by printing it again
console.log("Original Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Reversed Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Original Order:", frvtPlace.slice());
frvtPlace.sort();
console.log("Alphabetical Order:", frvtPlace.slice());
frvtPlace.reverse();
console.log("Reversed Alphabetical Order:", frvtPlace.slice());
//practice
/*
let places = ["Pakistan", " National Park", "Rome", "Switzerland", "London"];

// Print the array in its original order
console.log("Original order: " + places.join(", "));

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order: " + places.slice().sort().join(", "));

// Show that the array is still in its original order by printing it
console.log("Original order: " + places.join(", "));

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order: " + places.slice().sort().reverse().join(", "));

// Show that the array is still in its original order by printing it again
console.log("Original order: " + places.join(", "));

// Reverse the order of the list. Print the array to show that its order has changed
places.reverse();
console.log("Reversed order: " + places.join(", "));

// Reverse the order of the list again. Print the list to show it’s back to its original order
places.reverse();
console.log("Original order: " + places.join(", "));

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed
places.sort();
console.log("Alphabetical order: " + places.join(", "));

// Sort the array to change its order to reverse alphabetical. Print the list to show that its order has changed
places.sort().reverse();
console.log("Reverse alphabetical order: " + places.join(", "));
*/
/*
19.Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
var guests = ["Nadeem", "Mustafa", "Fasial", "Tayyab"];
console.log("I'm Inviting ".concat(guests.length, " people to dinner."));
/*
20.Think of something you could store in a array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.
*/
var countries = ["Japan", "Canada", "United Kingdom", "France", "Iceland"];
countries.map(function (items) {
    console.log("Countries I'd like visit:".concat(items, "."));
});
//practice
/*
let programming: string[] = ["Javascript", "Typescript", "HTML","Python"];

programming.map((items)=> {
    console.log(items);
});
*/
/*
21.They think of something you could store in a TypeScript Object. Write a program that creates Objects
 containing these items.
*/
var object = {
    name: 'M.Tayyab',
    fName: 'Khalid Pervaiz',
    age: 19,
    roll_no: 1234
};
console.log(object);
/*
22.Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.
*/
// index     0         1        2
var arr = ['case1', 'case2', 'case3'];
var index = 3;
var element = arr[index];
console.log(element); // produce an index error
var validate = arr[1];
console.log(validate);
/*
23.Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test.
Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var x = 5;
var y = 10;
//Test1
console.log("Is x is smaller than y? I predict true");
console.log(x < y);
//TEST2
console.log("Is x is greater  than y? I predict false");
console.log(x > y);
//Test3
console.log("Is x is smaller than  and equal to y? I predict true");
console.log(x <= y);
//Test4
console.log("Is x is greater than y? I predict false");
console.log(x >= y);
//Test5
console.log("Is x is not equal to y? i predict false ");
console.log(!(x == y));
//Test6
console.log("Is x is equal to y? I predict false");
console.log((x == y));
//Test7
console.log("Is x is equal to y? I predict false");
console.log(x === y);
//Test8
console.log("Is x is not equal to y? I predict true");
console.log(!(x === y));
//Test9
console.log("Is x is equal to 5 and y equal to 10? I predict true");
console.log(x == 5 && y == 10);
//Test10
console.log("Is x is equal to 5 or y is equal to 5? I predict false");
console.log(x == 5 && y == 5);
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result
for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or
equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var sName = "Tayyab";
var f_name = "Khalid";
//Test1
console.log("Is fName is equal to lName? I predict false");
console.log(sName == f_name);
//Test2
console.log("Is fName is not equal to lName? I predict true");
console.log(!(sName == f_name));
//Test2(b)
console.log("is fName is equal to lName when case is ignored? i predict false");
console.log(sName.toLowerCase() == f_name.toLowerCase());
//Test3
var p = 3;
var q = 4;
console.log("Is p is smaller than q? I predict true");
console.log(p < q);
//Test4
console.log("Is p is greater than q ? I predict false");
console.log(p > q);
//Test5
console.log("Is p is smaller than and equal to y ?  I predict true");
console.log(p <= q);
//Test6
console.log("Is p is greater  than and equal to y ?  I predict false");
console.log(p >= q);
//Test7
console.log("Is p is equal to 3 and y equal to 4?  I predict true");
console.log(p == 3 && q == 4);
//Test8
console.log("Is p is equal to 3 and y equal to 6?  I predict false");
console.log(p == 3 && q == 6);
//Test9
console.log("Is p is equal to 3 and y equal to 4?  I predict true");
console.log(p == 3 || q == 4);
//Test10
console.log("Is p is equal to 5 and y equal to 5?  I predict false");
console.log(p == 5 || q == 5);
/*
25.Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message
that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)
*/
var alien_color = 'green'; // yellow or red
if (alien_color === 'green') {
    console.log('You just earn 5 dolllar.');
}
else {
    console.log("Congratulation! The player earn 10$ for shoting an ali of an different color.");
}
;
/*
25.Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message
that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)
*/
var alien_color1 = 'green'; // yellow or red
if (alien_color1 === 'green') {
    console.log('You just earn 5 dolllar.');
}
else {
    console.log("Congratulation! The player earn 10$ for shoting an ali of an different color.");
}
;
/*
26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
var alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log('The player just earned 5 points for shooting the alien.');
}
else if (alien_color2 != 'green') {
    console.log('The player just earned 10 points.');
}
else {
    console.log('Try Again!!...');
}
/*
27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
var alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log('The player earned 5 points.');
}
else if (alien_color3 === 'yellow') {
    console.log('The player earned 10 points.');
}
else if (alien_color3 === 'red') {
    console.log('The player earned 15 points');
}
alien_color3 = 'yellow';
if (alien_color3 === 'green') {
    console.log('The player earned 5 points.');
}
else if (alien_color3 === 'yellow') {
    console.log('The player earned 10 points.');
}
else if (alien_color3 === 'red') {
    console.log('The player earned 15 points');
}
alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log('The player earned 5 points.');
}
else if (alien_color3 === 'yellow') {
    console.log('The player earned 10 points.');
}
else if (alien_color3 === 'red') {
    console.log('The player earned 15 points');
}
/*
28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/
var personage = 20;
if (personage < 2) {
    console.log("the person is baby");
}
else if (personage < 4) {
    console.log("the person is a toddler");
}
else if (personage < 13) {
    console.log("the person is a kid");
}
else if (personage < 20) {
    console.log("the person is a teenager");
}
else if (personage < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
/*
29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
var fvrtFurit = ['watermelon', 'apple', 'orange'];
if (fvrtFurit.includes('apple')) {
    console.log('You really like apple!');
}
if (fvrtFurit.includes('orange')) {
    console.log('You really like orange!');
}
if (fvrtFurit.includes('watermelon')) {
    console.log('You really like watermelon!');
}
if (fvrtFurit.includes('bananas')) {
    console.log('You really like bananas!');
}
if (fvrtFurit.includes('mango')) {
    console.log('You really like mango!');
}
/*
30.Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log in to a website.
Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
var user_name = ['admin', 'Eric', 'john', 'leo'];
for (var i = 0; i < user_name.length; i++) {
    if (user_name[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(" Hello ".concat(user_name[i], ", thank you for logging in again."));
    }
}
;
/*
31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var user_name1 = ['admin', 'Eric', 'john', 'leo'];
if (user_name1.length == 0) {
    console.log('We need to find some users!');
}
// remove all user 
user_name1.pop();
user_name1.pop();
user_name1.pop();
user_name1.pop();
// printed empty list
console.log(user_name1);
/*
32.Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print
a message that the person will need to enter a new username. If a username has not been used, print a
message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ['bakar', 'hammad', 'fahad', 'shahid', 'usama'];
var new_users2 = ['bakar', 'fahad', 'zain', 'kamran'];
for (var i = 0; i < new_users2.length; i++) {
    var new_users1 = new_users2[i].toUpperCase();
    if (current_users.includes(new_users1)) {
        console.log("Sorry , the user ".concat(new_users2[i], " is already taken.Please enter a new username"));
    }
    else {
        console.log("Congratulations! ".concat(new_users2[i], " is taken"));
    }
}
/*
33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
var Ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Ordinal_numbers.forEach(function (number) {
    var suffix = 'th';
    if (number == 1) {
        suffix == 'st';
    }
    else if (number == 2) {
        suffix == 'nd';
    }
    else if (number == 3) {
        suffix == 'rd';
    }
    console.log(number + suffix);
});
/*
34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name
of the pizza. For each pizza you should have one line of output containing a simple statement
like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
such as I really love pizza!
*/
var pizza = [
    "Pepperoni Pizza",
    "Hawaiian Pizza",
    "Margherita Pizza",
    "Chicken Pizza",
    "Veggie Pizza",
    "Cheese Pizza",
];
for (var i = 0; i < pizza.length; i++) {
    console.log("I like ".concat(pizza[i], "."));
}
;
console.log('I really love pizza!');
/*
35.Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet!

*/
var animals = ['dog', 'cat', 'rabbait'];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
;
console.log("Any of these animals would make a great pet.");
/*
animals.forEach(animal => {
    console.log(`A ${animals} would make a great pet.`);
    
})

console.log("Any of these animals would make a great pet.");
*/
/*
36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
that should be printed on the shirt. The function should print a sentence summarizing the size of
the shirt and the message printed on it. Call the function.
*/
function make_shirt2(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the mesage of ").concat(message, "."));
}
make_shirt2("Medium", "The stuff of a shirt is pure");
/*
37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
a different message.

*/
//This introduces default function parameters
function make_shirt(shirt_size, shirt_color, message) {
    if (shirt_size === void 0) { shirt_size = "large"; }
    if (shirt_color === void 0) { shirt_color = "black"; }
    if (message === void 0) { message = "Coding is Life"; }
    console.log("Making a ".concat(shirt_size, " t-shirt color is ").concat(shirt_color, " with the message ").concat(message, " printed on it."));
}
make_shirt();
make_shirt("medium", "baby pink");
make_shirt("small", "off white", "Dream Big Work Hard");
/*
38.Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Paris", "France");
describe_city("Islamabad");
/*
39.City Names: Write a function called city_country() that takes in the name of a city and its country.

The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return "".concat(city, " is in ").concat(country, ".");
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));
/*
40.Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly. Add an optional
parameter to make_album() that allows you to store the number of tracks on an album. If the calling line
includes a value for the number of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    console.log(album);
}
make_album("artist1", "Metallic");
make_album("artist2", "Metallic");
make_album("artist3", "Metallic", 5);
/*
41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
var magicianName = ['jack', 'leo', 'john', 'boby'];
function show_magicians(magicianName) {
    for (var i = 0; i < magicianName.length; i++) {
        console.log(magicianName[i]);
    }
}
show_magicians(magicianName);
/*
42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
to see that the list has actually been modified.
*/
function make_greet(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' ' + "the Great Magician.";
    }
    return magicians;
}
var magician1 = make_greet(["Ali", "Fahad", "Bakar"]);
console.log(magician1);
/*
function make_great(magicians: string[]) {
    for(let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]} is the Great.`);
        
    }
    return magicians
}

const magicians1 = make_great(['zain', 'bakar', 'tayyab']);

console.log(magicians1);
*/
/*
43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to each
magician’s name.
*/
function make_greet1(magicians) {
    var greatMagicians = magicians.slice(); // Create a copy of the original array
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the Great';
    }
    return greatMagicians;
}
var originalMagicians = ["Ali", "Fahad", "Sameer"];
var greatMagicians = make_greet1(originalMagicians);
console.log("Original Magicians:", originalMagicians);
console.log("Great Magicians:", greatMagicians);
/*
44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/
function sandwiches() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Make a sandwich with: ".concat(ingredients, "."));
    //console.log(`Make a sandwich with: ${ingredients.join(' , ')}.`)
}
sandwiches('ham', 'cheese');
sandwiches('lettuce', 'turkey', 'cucumber');
sandwiches('mushrooms', 'onions', 'spinach', 'tomatoes');
/*
function sandwichSummary(items:string) {
    console.log(`You ordered a sandwich with ${items.length} `);
  }
  
  // Call the function three times with different number of arguments
  sandwichSummary("lettuce");
  sandwichSummary("katchup",);
  sandwichSummary("peanut butter", );
  */
/*
45.Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should
then accept an arbitrary number of keyword arguments. Call the function with the
required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
*/
function make_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("BMW", "M3", ["color", "white"], ["year", 2023]));
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
/*
function carsinfo(manufacturer:string,model:string){
    return manufacturer + " " + model
}
let finale=carsinfo("BMW","red")
console.log(finale)
*/
