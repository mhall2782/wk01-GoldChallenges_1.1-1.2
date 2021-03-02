/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

let movies = new Object();

console.log(movies)

movies.name = "Boyz N the Hood";
movies.runTime = '1 hour, 52 minutes'
movies.releaseYear = 1991;
movies.genre = ["Crime", "Drama"];
movies.characters = ["Tre Styles", "Doughboy"]

console.log(movies);

let characters = ["Trey Styles", "Doughboy"];
    console.log(characters.sort());

let var1 = {
    firstName: 'Trey',
    lastName: 'Styles',
    age: 18,
    friend: {
        firstName: 'Ricky'
    }
};

let var2 = {
    firsName: 'Doughboy',
    age: 20
    }
};

console.log(var1.firsName);
console.log(var1.lastName);
//console.log(var.age);
console.log(var1.friend);

console.log(var2.firstName);
