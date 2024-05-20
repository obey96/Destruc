// obj 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// obj 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanet, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846,
//    yearMarsDiscovered: 1659}

// obj 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  // Your name is Ale and you like purple
  
  getUserData({firstName: "Melissa"})
  // Your name is Mel and you like green
  
  getUserData({})
  // Your name is undefined and you like green

  console.log(getUserData({firstName: 'Ale', favoriteColor: 'purple'}));

  console.log(getUserData({firstName: 'Mel'}));

  
//   Array 1

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// array 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings);
  // ["Bright copper kettles", "warm woolen mittens",
//    "Brown paper packages tied up with strings"]

// array 3

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

// 2015
// // var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

/* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

//   array swap

let arr = [1, 2];
// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

console.log(arr);


// Race
const raceResults = ([first, second, third, ...losers]) => ({first, second, third, losers})

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

