
/*
The hard part about this challenge comes from figuring out how to access objects using arguments.  
Notice that the argument and the name of the key for each object is the same.  As such, you cannot access the "firstName" key using brackets.

In addition the prop argument cannot be accessed using dot notation.  I made both these mistakes and was unable to get a result until I toyed around with the brackets and dot notation.  
*/


//Setup:  from fCC
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// My code is below this line
 
  for (var i = 0;i<contacts.length;i++){
    
    if (contacts[i].firstName === firstName) {
      if (contacts[i].hasOwnProperty(prop)){
        console.log(contacts[i][prop]);
        return contacts[i][prop];
        } else {
          console.log("No such property");
          return "No such property";
        }
    } 
  }
  console.log("No such contact");
  return "No such contact";
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "lastName");
