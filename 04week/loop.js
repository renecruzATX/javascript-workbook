//for loop
    //Use a for loop to console.log each item in the array carsInReverse.
    const carsInReverse = ['Ford', 'Lincoln', 'Mercury', 'Chevy', 'Chrysler', 'Dodge']

    for (x = 0; x < carsInReverse.length; x++) {
      console.log(carsInReverse[x]);
    }

//for...in loop
    /*Create an object (an array with keys and values) called persons with the following data:
        firstName: "Jane"
        lastName: "Doe"
        D: "Jan 5, 1925"
        gender: "female"*/

    const persons = {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: "Jan 5, 1925",
      gender: "female",
    };

    //Use a for...in loop to console.log each key.
      let x;
      for (x in persons) {
        console.log(x);
      }

    //Then use a for...in loop and if state to console.log the value associated with the key birthDate.
      for (x in persons) {
        if (x === 'birthDate'){
          console.log(persons[x])
        };
      }


//while loop
    //Use a for loop to console.log the numbers 1 to 1000.
    let num = 0;
    while (num < 1000){
      num ++;
      console.log(num);
    }


//do...while loop
    //Use a do...while loop to console.log the numbers from 1 to 1000.
    let doNum = 0;
    do{
      doNum++;
      console.log(doNum);
    }while (doNum < 1000);

//When is a for loop better than a while loop?
    // A for loop is better when you know how many times you need to run the code.  Such as the length of an array
    //A while loop is used when you have no idea how many times you need to run the code. Run it until a condition is met

  //How is the readability of the code affected?
  //I think the readability of the code increases with a while loop. All you need is a condition and some code to run.  Creating the conditions that a for loop will run is not my favorite thing to do.  I feel like I'm creating something from scratch that may be inaccurate. Where the while loop is a little more structured in my eyes.

//What is the difference between a for loop and a for...in loop?
  //With the for loop, you must create the conditions for the loop to run in.  Whereas the for...in loop is similar to for each method, where all you need to do is create a variable for the keys in an object and it will loop through them.
  //for in loop is used more often for objects.  for loop is used with anything but for each and for in are easier to code.


//What is the difference between a while loop and a do...while loop?
  //The difference is when the condition is checked. while loop check the condition for truthiness first before the code runs, where the do while loop will run the code at least once before it checks the condition for truthiness.
