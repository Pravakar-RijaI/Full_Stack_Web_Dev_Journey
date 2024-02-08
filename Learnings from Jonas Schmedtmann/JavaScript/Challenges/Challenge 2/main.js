//Using Strict Mode
//  'use strict';
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,3));

// const isAdult = function(birthYear){
//     return (((2024-birthYear)>=18) ? true: false);
// }   
// console.log(isAdult(2009));

// const ageCalculator = age => `Your age is ${2024-age}`;

// console.log(ageCalculator(2002));

// const cutFruitPieces = (fruit) => fruit*4;
// const fruitProcessor = function (apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     return `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces is ready...`
// }
// console.log(fruitProcessor(4,7));

// 'use strict';
// const calcAverage = (a,b,c) => (a+b+c)/3;

// // console.log(`Average Score for Dolphins is ${calcAverage(44,23,71)}.`);
// // console.log(`Average Score for Koalas is ${calcAverage(65,54,49)}.`);
// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// const checkWinner = function (avgDolphins,avgKoalas){
//     if(avgDolphins > 2*avgKoalas)
//     return `Dolphins Win (${avgDolphins} vs. ${avgKoalas})`
//     else if(avgKoalas > 2*avgDolphins)
//     return `Koalas Win (${avgKoalas} vs. ${avgDolphins})`
//     else
//     return `No team wins..`
// }

// console.log(checkWinner(avgDolphins,avgKoalas));

// 'use strict';
// const friends = ['Ramesh','Dinesh','Hari'];
// console.log(friends.unshift('Rakesh'));
// console.log(friends[0].charAt(0));

// 'use strict';
// let friends = ['Ram','Shyam'];
// console.log(friends);
// friends = ['Hari','Ghimire'];
// console.log(friends);

// 'use strict';
// const birthYear = [1991,2002,1890,1956];
// const age = (birthYear)=> 2024 - birthYear;
// const ageYear = [];
// ageYear[0] = age(birthYear[0]);

// // STRING METHODS
// const arr=['Mohan','Hari','Gopi','Rajesh'];
// console.log(arr);
// // push
// console.log(arr.push(23));
// console.log(arr);
// // pop
// console.log(arr.pop());
// console.log(arr);
// //push at first
// console.log(arr.unshift('ram'));
// console.log(arr);
// //pop at first
// console.log(arr.shift());
// console.log(arr);
// //index
// console.log(arr.indexOf('Hari'));
// console.log(arr);
// //includes
// console.log(arr.includes('Rajesh'));

// // CHALLENGE2
// const calcTip = function(bill){
//     return (bill > 50 && bill <300)? (bill*(15/100)) : (bill * (20/100))
// }

// const bill = [125,555,44];
// const tip = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
// const total = [bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];

// console.log(bill);
// console.log(tip);
// console.log(total);

// OBJECTS IN JAVASCRIPT
// const james = {
//     firstName: 'James',
//     lastName: 'Shrestha',
//     age: 23,
//     occupation: 'IT-Officer',
//     friends: ['Rakesh','Hari','Mukesh']
// };

// const person ={
//     firstName: 'Ramesh',
//     lastName: 'Shrestha',
//     job: 'Halwai',
//     age: 23,
//     hasDriversLicense: true,
//     read: function(){
//         console.log('Reading...');
//     }
// };

// person.read();

// const person = {
//     firstName: 'Hari',
//     lastName: 'Ghimire',
//     birthYear: '2002',
//     job: 'Teacher',
//     hasChildren: false,
//     calcAge: function(){
//         return 2024-this.birthYear;
//     }
// };

// // CHALLENGE
// const person = {
//     firstName: 'Jonas',
//     lastName: 'Schedtmann',
//     birthYear: '2002',
//     job: 'Teacher',
//     hasDriversLicense: false,
    
//     calcAge: function(){
//         this.age = 2024-this.birthYear;
//         return this.age;
//     },
    
//     intro: function(){
//         if(this.hasDriversLicense)
//         console.log(this.firstName +" "+ this.lastName + " is a "+ this.calcAge() + " year old "+ this.job +", and has a driver's license.")
//         else
//         console.log(this.firstName +" "+ this.lastName + " is a "+ this.calcAge() + " year old "+ this.job +", and does not have a driver's license.")
//     }
// };
// console.log(person.firstName);

// const friends = {
//     '0': 'Ramesh',
//     '1': 'Hari',
//     '2': 'Sagar',
//     '3': 'Pravakar',
//     lengthCounter: function (){
//         this.length = 0;
//         for(let i=0;i<50;i++)
//             {
//                 // if(this.i == 'Ramesh')
//                 // this.length++;
//                 // console.log(this.'0');
//             }
//         // return this.length;
//         }

// };
// // friends.lengthCounter();
// // console.log(friends.length);

// const arrat = [1,2,2,4,6];
// console.log(arrat['length']);

// 'use strict';
// const ans = prompt("Choose between various property like firstName, lastName, job, birthYear, intro: ");
// const person = {
//     firstName: 'Rakesh',
//     lastName: 'Shah',
//     job: 'pilot',
//     hasDriverLicense: false,
//     birthYear: 1934,
//     calcAge: function () {
//         this.age = 2024-this.birthYear;
//         return this.age;
//     },
//     intro: function () {
//         if(this.hasDriverLicense)
//         {    
//             return(`${this.firstName} ${this.lastName} is a ${this.calcAge()} year old ${this.job} and has a Drivers License.`);
//         }
//         else
//         {
//             return(`${this.firstName} ${this.lastName} is a ${this.calcAge()} year old ${this.job} and does not have a Drivers License.`);
//         }
//     }
// };
// if(person[ans])
// ans === 'intro' ? console.log(person[ans]()) : console.log(person[ans]);
// else
// console.log("Invalid Command!!!");

// 'use strict';
// const animal = {
//     identity: 'Tiger',
//     scientific: 'panthera tigris',
//     family: ['cat','lion','leopard'],
//     summary: function() {
//         return `"${this.identity} has ${this.family.length} family members and it's closest relative is ${this.family[0]}."`;
//     }
// }
// console.log(animal.summary());

// CHALLENGE3
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass/this.height**2;
//         return this.BMI;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height**2;
//         return this.BMI;
//     }
// }

// if(mark.calcBMI() > john.calcBMI())
// {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}).`);
// }
// else
// {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI}).`);
// }

// LOOPS
// 'use strict';
//  const randArray = ['Rakesh',true,'Teacher',2002,['mahesh','rajesh']];
//  const typeArray = [];
// for(let i=0;i<randArray.length;i++)
// {
//     typeArray[i] = typeof(randArray[i]);
//     console.log(typeArray[i]);
// }

// const birthYear = [2002,1991,1990,2021,1985];
// const age = [];

// for(let i=0;i<birthYear.length;i++)
// {
//     age.push(2024-birthYear[i]);
//     console.log(age[i]);
// }
// for(let i=0;i<randArray.length;i++)
// {
//     if(typeof(randArray[i]) === 'string')
//     {
//         continue;
//     }
//     else
//     {
//     typeArray[i]= typeof(randArray[i]);
//     }
//     console.log(typeArray[i]);
// }

// for(let i=0;i<randArray.length;i++)
// {
//     if(randArray[i] === 2002)
//     {
//         break;
//     }
//     console.log(randArray[i]);
// }

// for(let i=(randArray.length)-1;i>=0;i--)
// {
//     console.log(randArray[i]);
// }

// for(let i=1;i<=3;i++)
// {
//     console.log(`Starting Exercise ${i}..`);
//     for(let j=1;j<=5;j++)
//     {
//         console.log(`On Repetition ${j}.`);
//     }
// }

// 'use strict';
// let dice = Math.trunc(Math.random()*6)+1;
// while(dice != 6)
// {
//     console.log(dice);
//     dice = Math.trunc(Math.random()*6)+1;
// }

'use strict';
// tip calculator
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

// let tips = [];
// const calcTip = function (bills){
//     let tips = [];
//     for(let i=0;i<bills.length;i++)
//     {
//         if(bills[i] > 50 && bills[i] < 300)
//         {
//             tips[i] = bills[i]*0.15;
//         }
//         else
//         {
//             tips[i] = bills[i]*0.2;
//         }
//     }
//     return tips;
// }
// tips = calcTip(bills);

const calcTip = function (bills) {
    for(let i = 0; i < bills.length; i++)
    {
        if(bills[i] > 50 && bills[i] < 300)
        {
            tips.push(bills[i]*0.15);
            totals.push(bills[i]+tips[i]);
        }
        else
        {
            tips.push(bills[i]*0.20);
            totals.push(bills[i]+tips[i]);
        }

    }
}

calcTip(bills);
console.log(tips);
console.log(totals);

const arr = [1,2,3,4,5];

const calcAverage = function (arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum/arr.length;
}

console.log(arr);
console.log(`The average is ${calcAverage(arr)}.`)