// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for (var person in names) {

    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[person].charAt(0).toLowerCase();
    //console.log("firstletter is: " + firstLetter);

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter == "j") {
      byeSpeaker.speak(names[person]);
    } else {
      helloSpeaker.speak(names[person]);
    }
  }


  //=====PART 2: use a map function to create greetings===========
  //function to be used by map method, to determine which greeing to use and return as a string with the name
  var simpleMapFunc = function (name) {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  }

  //call to map function
  var greetedNames = names.map(simpleMapFunc);

  //debug
  //console.log(greetedNames);
  console.log("\n\n======PART 2: ");
  for( var human in greetedNames){
    console.log(greetedNames[human]);
  }



  //=====PART 3: Bonus using reduce============
  console.log("\n\n======Part 3 BONUS");
  var initialValue = {hello: [], bye: []};
  names.reduce( 
    (accumulatingObject, currentValue) => {
      //console.log("curval: " + currentValue );


      //console.log(currentValue.charAt(0).toLowerCase() );
      if(currentValue.charAt(0).toLowerCase() == "j"){
        //console.log("about to push to bye: " + currentValue);
        //var count = initialValue.bye.push(currentValue);
        var count = initialValue.bye.push(byeSpeaker.speakSimple(currentValue));
        //console.log("count of bye is now: " + count);
      } else {
        //console.log("about to push to hello: " + currentValue);
        //var count = initialValue.hello.push(currentValue);
        var count = initialValue.hello.push(helloSpeaker.speakSimple(currentValue));
        //console.log("count of hello is now: " + count);
      }
    }, initialValue
  );

  //output people in the hello array
  for(var helloPerson in initialValue.hello){
    console.log(initialValue.hello[helloPerson]);
  }

  //output people in the goodbye array
  for(var byePerson in initialValue.bye){
    console.log(initialValue.bye[byePerson]);
  }


//console.log(initialValue.hello);

//console.log(initialValue.bye);

})();