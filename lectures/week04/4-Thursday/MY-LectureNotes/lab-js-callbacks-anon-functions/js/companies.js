const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// //? 1
// for(let i = 0; i<= ages.length - 1; i++){
//   console.log(ages[i]);
// }

// //? 2
// for(let i = 0; i <= companies.length - 1; i++){
//   console.log(companies[i]);
// }

// //? 3
// ages.forEach(function(val){
//   console.log(val);
// })

// //? 4
// companies.forEach(function(val){
//   console.log(val);
// })

// //? 5
// let newAges = ages.map(function(val){
//   return val += 5;
// });
// console.log(newAges);

// //? 6
// let newCompanies = companies.map(function(val){
//   let newObject = {...val};
//   newObject.end = 2020;
//   return newObject;
// });
// console.log(newCompanies);
// console.log(companies);

//? 7

// let newAges = ages.filter(function(num){
//   if(num % 2 === 0){
//     return true;
//   } else return false;
// });
// console.log(newAges);

// //? 8

// let young = ages.filter(function(num){
//   if(num <= 35){
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(young);

// //? 9

// let newCompanies = companies.filter(function(company){
//   if(company.start <= 1990){
//     return true;
//   } else return false;
// });
// console.log(newCompanies);
// newCompanies[1].start = 1999;
// console.log(newCompanies);

//? 10

let equal21 = ages.some(function(num){
  return num === 21;
})
console.log(equal21);

//? 11

let less14 = ages.some(function(num){
  return num < 14;
})
console.log(less14);

//? 12

let earlyStart = companies.some(function(company){
  return company.start < 1990;
});

console.log(earlyStart);