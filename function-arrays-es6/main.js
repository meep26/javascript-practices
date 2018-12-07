const companies = [
   {name: "Company One", category: "Finance", start: 1981, end: 2003},
   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
 
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* forEach */
// ES5
// for (let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
// }

// ES6
// companies.forEach(company => {
//    console.log(company);
// });


/* FILTER */
// ES5
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//    if (ages[i] > 21) {
//       canDrink.push(ages[i]);
//    }
// }

// ES6
// const canDrink = ages.filter(age => {
//    if (age > 21) {
//       return true;
//    }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);


/* FILTER retail companies */
// ES5
// const retailCompanies = companies.filter(function(company) {
//    if ( company.category === 'Retail' ) {
//       return true;
//    }
// })

// ES6
// const retailCompanies = companies.filter(company => company.category === 'Retail')

/* Get all the companies that are at 1980s */
// ES6
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989) )

/* Get companies that lasted 10 years or more */
// const lastedTenYears = companies.filter(company => ( (company.end - company.start) >= 10) )

/* MAP */
// ES6
// const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

/* All ages multiply by itself and divide by two*/
// const ageMapping = ages
//    .map(age => age * age)
//    .map(age => age / 2);

/* SORT */
// Sort companies by start years
// const sortedCompanies = companies.sort((c1, c2) => {
//    if (c1.start > c2.start) {
//       return 1;
//    }
//    else {
//       return -1;
//    }
// })

// Short method
// const sortedCompanies = companies.sort( (a, b) => (a.start > b.start ? 1 : -1) )

// Sort ages ASCENDING
// const sortedAges = ages.sort((a, b) => a - b);

/* REDUCE */
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//    ageSum += ages[i];
// }

// Long method
// Get the total SUM of the ages
// const ageSum = ages.reduce( (total, age) => {
//    return total + age;
// }, 0);

// Short method
// const ageSum = ages.reduce( (total, age) => total + age, 0);

// Get total years of all companies
// const totalYearsOfCompanies = companies.reduce( (total, company) => {
//    return total + (company.end - company.start);
// }, 0);

/* Combine Methods */
// const combined = ages
//    .map(age => age * 2)
//    .filter(age => age >= 40)
//    .sort((a, b) => a - b)
//    .reduce((a, b) => a + b, 0)