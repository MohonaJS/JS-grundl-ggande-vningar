1. Boolean, number, string, array, object.

2. False

3. let name är local, var name är global

4. typeOf() . https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

5. [] - A = array
5. () - B = Parameter
5. {} - C = kodblock

6.  function hello(){
  console.log("Hello")
}

7. Good bye world!

8. Alla, men A är bäst?

9. let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
9. console.log(sentence.length);

10.
let name = 'Oskar';
console.log(`Hej ${name} din knasboll`)

11 + 12.
let frukter = ["banan", "äpple", "jeff", "kalle", "vattenmelon"];
console.log(frukter.unshift("björn"));
console.log(frukter.push("hej"));
console.log(frukter);

13.
console.log(frukter.pop());
console.log(frukter.shift());
console.log(frukter);

14.
let fruits = ['apple', 'orange', 'pear', 'kiwi'];
fruits.splice(1, 0, "päron", "mango");
console.log(fruits)

15.
let fruits = ['apple', 'orange', 'pear', 'kiwi']
fruits.splice(0, 1, "pineapple")
fruits;

16.
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8]
num.sort(function (a, b) {
    return b - a;
});
console.log(num);

17.
let a = [1,2,3];
let b = [4,5,6];
let copy = [...a, ...b];
copy;

18. 
let a = ['My', 'has', 'many', 'open'];
let b = ['brain', 'to', 'tabs', '!'];
let newArray = [];
for(let i = 0; i < a.length; i++){
    newArray += a[i] + " " + b[i] + " ";
}
newArray;

19. 
let a = [1, 2, 7, 8, 9, 10];
let b = [3, 4, 5, 6];
b.splice(2, 0, ...a);
b;

20. 
Gör alla bokstäver stora
.map() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
names = names.map(function(x) {
    return x.toUpperCase();
})
names;

// 21.
let names = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];

for(i = 0; i < names.length; i++) {
    if(names[i]["age"] >= 30){
        console.log(names[i]["name"])
    }
}

// 22.
// VARFÖR ILLEGAL RETURN????????
// ?????????????????????????????
let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];
for(i = 0; i < names.length; i++){
    if(names[i] != 'Ewa'){
        console.log("Det fanns ingen ewa ;C")
    }
    else {
        console.log("Det fanns en Ewa!!! :DDDD")
    }
}

// 23.
for(i = 0; i <= 1000; i++) {
    console.log(i)
}

// 24. 
for(i = 100; i >= 0; i--) {
    console.log(i)
}

// 25.
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// 26.
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for(i = 0; i < fruits.length; i++){
    console.log([i] + ". " + fruits[i])
}

// 27.
function makeDeck(){
    for (j = 2; j <= 14; j++) {
        console.log(`hjärter ${j}`)
    }
    for (j = 2; j <= 14; j++) {
        console.log(`klöver ${j}`)
    }
    for (j = 2; j <= 14; j++) {
        console.log(`spader ${j}`)
    }
    for (j = 2; j <= 14; j++) {
        console.log(`ruter ${j}`)
    }
}

// 28.
let book = {
    title: 'Scrap Recycler send Orcust Knightmare, Knightmare effect send World Wand, World Wand effect Summon Knightmare. Link into Galatea, Galatea effect set Orcustrated Climax, XYZ Rank up into Dingirus',
    author: 'Sixten faceplant',
    genres: ["Orcust", "Combo Tutorial", "Poggers"]
}
console.log(book)

// 29.
let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Orcustrated Babel'
    }
}
console.log(person.adress.city)

// 30
let book = {
    title: 'Scrap Recycler send Orcust Knightmare, Knightmare effect send World Wand, World Wand effect Summon Knightmare. Link into Galatea, Galatea effect set Orcustrated Climax, XYZ Rank up into Dingirus',
    author: 'Sixten faceplant',
    genres: ["Orcust", "Combo Tutorial", "Poggers"]
}

let book2 = [book]
console.log(book2)

// 31
    let dog = {
        name: "Dingirsu",
        breed: "Sheppard",
    }

    console.log(`Woff, jag heter ${dog.name}`);
}

woff();

