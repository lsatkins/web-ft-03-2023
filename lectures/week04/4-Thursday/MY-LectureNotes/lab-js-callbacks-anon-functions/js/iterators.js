
// 1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. 
// For example, I want to eat a mango.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// let eat = fruits.forEach(function(fruit){
//   console.log(`I want to eat a ${fruit}`);
// })

// 2. Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// let secretMessage = [...animals];

// let arr = secretMessage.map(function(animal){
//   return animal[0];
// });
// console.log(arr);

// 3. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];

// let smallNumbers = [...bigNumbers];

// let div = smallNumbers.map(function(num){
//   return num / 100;
// })

// console.log(div);

// 4. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// let smallNumbers = [...randomNumbers];

// let less = smallNumbers.filter(function(num){
//   return num < 250;
// })

// console.log(less);

// 5. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// let longFavoriteWords = [...favoriteWords];

// let long = longFavoriteWords.filter(function(word){
//   return word.length > 7;
// })

// console.log(long);

// 6. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// let foundAnimal = animals2.findIndex(function(animal){
//   return animal === "elephant";
// });

// console.log(foundAnimal);

// 7. Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

// let startsWithS = animals2.findIndex(function(animal){
//   return animal[0] === "s";
// });

// console.log(startsWithS);

// 8. Sum the numbers in the newNumbers array using the reduce method

const newNumbers = [1, 3, 5, 7]; 

  // let sum = newNumbers.reduce(function(total, num){
  //   return total + num;
  // }, 0);

  // console.log(sum);


// *** Replace "method" with correct array method 

// 9. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']; 

// let short = words.some(function(word){
//   return word.length < 6;
// })

// console.log(short);

// console.log(words.some((word) => {
//   return word.length < 6;
// }));

//9b. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

// const interestingWords = words.filter(function(word){
//   return word.length > 5;
// })

// console.log(interestingWords);

//** Chose the right iterator */


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];


//  Choose a method that will return undefined
// let undef = cities.reduce(city => console.log('Have you visited ' + city + '?'));

// console.log(undef);


// Choose a method that will return a new array
// const longCities = cities.filter(city => city.length > 7);

// console.log(longCities);

// Choose a method that will return a single value
// const word = cities.reduce((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word);

// Choose a method that will return a new array

let nums = [1, 2, 6, 7, 4]

// const smallerNums = nums.map(num => num - 5);

// console.log(smallerNums);


// Choose a method that will return a boolean value
let less0 = nums.some(num => num < 0);

console.log(less0);










