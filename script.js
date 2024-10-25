/* QUESTION 1:
Using the question where you declared and called the add_three_num function:

1. Write a multi-line comment at the top of your script describing what your code does.
2. Add single-line comments inside your code explaining each step.*/

//SOLUTION
/*
This function add_three_num that takes three numbers as arguments,
adds them together, and returns the result.
*/
//Function to add three numbers
function add_three_num(num1, num2, num3) {
  //Add the three numbers
  const sum = num1 + num2 + num3;

  //Return the result
  return sum;
}

//Call the function with any numbers
const result = add_three_num(10, 20, 30);

//Log the result
console.log(result);

/* QUESTION 2:
1. Create a variable without assigning any value (leave it undefined).
2. Print the variable to see the output.
3. Now, assign null to the same variable and print it again.*/

//SOLUTION
let variable;
console.log(variable);

variable = null;
console.log(variable);

/* QUESTION 3:
1. Create two variables, x and y, and assign them any number of your choice.

2. Perform addition, subtraction, multiplication, division and modulo operation on these variables.

3. Print the results of each of the operations.*/

//SOLUTION
let x = 10;
let y = 3;

let addition = x + y;
console.log(addition);

let subtraction = x - y;
console.log(subtraction);

let multiplication = x * y;
console.log(multiplication);

let division = x / y;
console.log(division);

let modulo = x % y;
console.log(modulo);

/* QUESTION 4:
1. Create two boolean variables, isPublicHoliday and isWeekDay, and assign them appropriate values.
2. Combine them using && (and) and || (or) operators to check if the weekday is a public holiday.
3. Print the result.*/

//SOLUTION
let isPublicHoliday = true;
let isWeekDay = false;

const isHolidayAndWeekday = isPublicHoliday && isWeekDay;
const isHolidayORWeekday = isPublicHoliday || isWeekDay;
console.log(isHolidayAndWeekday);
console.log(isHolidayORWeekday);

/* QUESTION 5:
1. Write a function called add_three_num that takes three numbers as arguments.
2. The function should return the addition of the three numbers.
3. Call the function with three numbers and print the returned value.*/

//SOLUTION
function add_three_num(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(add_three_num(2, 5, 8));

/* QUESTION 6:
1. Create a variable with today_day and assign it a value (e.g., 23).
2. Use a comparison operator to check if the today_day is greater than 30.
3. Store the result of the comparison in a variable and print it.*/

//SOLUTION

let today_day = 23;
let check_day = today_day > 30;
console.log(check_day);

/* QUESTION 7:
1. Declare a function named greet that takes a person's name and time of day as an argument.
2. Inside the function, print a message like: "Good [day], [name]".
3. Call the function and pass any name and time of day to it.*/

//SOLUTION
function greet(name, dayTime) {
  console.log(`Good ${dayTime}, ${name}`);
}
greet("Yinka", "morning");
/* QUESTION 8:
1. Create a variable with your best meal as a string.
2. Use string concatenation or template literals to combine it with your name (e.g., "John loves ${best_meal}").
3. Print the final message*/

//SOLUTION
const bestMeal = "plantain and egg";

let preference = `Yinka loves ${bestMeal}`;
console.log(preference);

/* QUESTION 9:
1. Create a variable called nick_name and assign it your nick name.

2. Create a variable called count and assign it any number of your choice.

3. Print both variables using console.log().*/

//SOLUTION
let nick_name = "TaiB";
let count = 17;
console.log(nick_name, count);

/* QUESTION 10:
1. Create a variable count and assign it an initial value of 0.
2. Add 10 to the count variable.
3. Multiply 20 by the count variable.
4. Print the final value of count.*/

//SOLUTION
let counts = 0;
count += 10;
count *= 20;
console.log(count);
