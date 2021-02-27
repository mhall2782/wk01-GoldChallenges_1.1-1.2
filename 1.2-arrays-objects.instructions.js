/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


let movies = new Object();

console.log(movies)
//{}

movies.name = "Boyz N the Hood";
movies.releaseYear = "1991";
movies.genre = ["Crime", "Drama"];
movies.ratings = {
  IMDb: "7.8 / 10",
  Metacritic: "76%"
};


let characters = ["Tre Syles", "Doughboy"];
let char1 = {
    firstName: "Tre",
    lastName: "Styles",
    age: 18,
    school: "Crenshaw",
  };

  var person = {
    firstName: "Tre",
    lastName: "Styles"
  };
  
  alert(
  person.Tre
  );