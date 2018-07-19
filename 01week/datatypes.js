//1. Write a JavaScript program to display the current day and time. getDay and toLocaleTimeString
const dayTime = () => {
  const d = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = weekday[d.getDay()];
  const time = d.toLocaleTimeString();

  return day + ' ' + time;

}
console.log(dayTime());

//2. Write a JavaScript program to convert a number to a string. toString method
const numToString = (numb1) => {
  const numString = numb1.toString();

  return numString;
}
console.log(numToString(15));
//3. Write a JavaScript program to convert a string to the number.  parseInt method
const stringToNumber = (word) => {
  const integer = parseInt(word, 10);

  return integer
}
console.log(stringToNumber("43"));
//4. Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean, Null, Undefined, Number, NaN, String. typeof method

const typeOfItem = (item) => {
  return typeof item;
}
console.log(typeOfItem(45));
//5. Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => num1 + num2;

console.log(addTwoNumbers(6, 3));
//6. Write a JavaScript program that runs only when 2 things are true. Boolean function

const bothAreTrue = (thing1, thing2) => {
  if (Boolean(thing1) && Boolean(thing2)) {
    return 'Both are True'
  } else {
    return 'One or both are not True'
  }
};

console.log(bothAreTrue((4 / 2), 0));

//7. Write a JavaScript program that runs when 1 of 2 things are true. Boolean function
const oneOfTwoThingsIsTrue = (thing1, thing2) => {
  if (Boolean(thing1) || Boolean(thing2)) {
    return 'One or the other is True'
  } else {
    return 'Both are False'
  }
};

console.log(oneOfTwoThingsIsTrue('Hello', 0));
//8. Write a JavaScript program that runs when both things are not true. Boolean function

const bothAreFalse = (thing1, thing2) => {
  if (!(Boolean(thing1)) && !(Boolean(thing2))) {
    return 'Both are False'
  } else {
    return 'One or both are True'
  }
};

console.log(bothAreFalse(0, 0));