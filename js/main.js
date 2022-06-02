let name1 = 'John';

let admin;

admin = name1;

alert(admin);

let ourPlanet = "Earth";

let currentUsername = "Andrea";

//nextpage

let name2 = "Ilya";

alert(`hello ${1}`); // "hello 1"

alert(`hello ${"name1"}`); // "hello name1"

alert(`hello ${name2}`); // "hello Ilya"

//nextpage

let newName = prompt("What is your name", "");
alert(newName);

//nextpage

let a = 1, 
    b = 1;
alert(++a);
alert(b++);
alert(a);
alert(b);

let y = 2;
let x = 1 + (y *= 2);
alert(x);