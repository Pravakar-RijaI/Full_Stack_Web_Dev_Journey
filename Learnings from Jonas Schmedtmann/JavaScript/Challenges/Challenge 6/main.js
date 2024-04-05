'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CHALLENGES

// //Challenge 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// // const dogsJulia = [9, 16, 6, 8, 3];
// // const dogsKate = [10, 5, 6, 1, 4];


// const dogsAge = function (value, index) {
//     if (value >= 3)
//         console.log(`Dog number ${index + 1} is an adult, and is ${value} years old.`);
//     else
//         console.log(`Dog number ${index + 1} is still a puppy🐶.`);
// }


// const checkDogs = function (dogsJulia, dogsKate) {
//     let [...Juliadogs] = dogsJulia;
//     Juliadogs = Juliadogs.splice(1, 2);
//     const [...dogs] = [...Juliadogs, ...dogsKate];
//     dogs.forEach(dogsAge);
// };

// checkDogs(dogsJulia, dogsKate);

// //Challenge 2
// const dogsAges = [5, 2, 4, 1, 15, 8, 3];
// // const dogsAges = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4);
//     const adultDogs = humanAges.filter(age => age >= 18);
//     const dogsAverageAge = adultDogs.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//     let str = "";
//     adultDogs.forEach((value, i) => str += `Dog ${i + 1} Age in Human Years: ${value} years.\n`);
//     str += `\nAverage Age of Dogs: ${dogsAverageAge} years.\n`
//     return str;
// };

// //Challenge 3
// const calcAverageHumanAge = function (dogsAges) {
//     const averageAdultDogAge =
//         dogsAges
//             .map((dogAge) => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)
//             .filter(adultAge => adultAge >= 18)
//             .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//     return `Average Age of Dogs older than 18 Human Years: ${averageAdultDogAge} years.`;
// }

// console.log(calcAverageHumanAge(dogsAges));


/////////////////////////////////////////////////



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const createUsername = function (accounts) {
    accounts.forEach(function (account) {
        account.username = account.owner.toLowerCase().split(' ').map((value) => value[0]).join('');
    })
};

createUsername(accounts);

const displayMovements = function (movements) {
    containerMovements.innerHTML = "";
    movements.forEach(function (value, i) {
        const type = (value > 0) ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${value} €</div>
        </div>`;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    })
}

const displayBalance = function (movements) {
    const balance = movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = balance + " €";
}

const calcDisplaySummary = function (account) {
    const sumIn = account.movements.filter(value => value > 0).reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = sumIn + " €";
    const sumOut = account.movements.filter(value => value < 0).reduce((acc, cur) => acc + Math.abs(cur), 0);
    labelSumOut.textContent = sumOut + " €";

    const sumInterest = account.movements.filter(value => value > 0).map(value => value * (account.interestRate) / 100).filter((value) => value >= 1).reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = sumInterest + " €";
}

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    const user = accounts.find(account => account.username == inputLoginUsername.value);
    if (user?.pin === Number(inputLoginPin.value)) {
        containerApp.style.opacity = 100;
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        labelWelcome.textContent = "Welcome back, " + user.owner.split(' ')[0] + " !!";
        displayMovements(user.movements);
        displayBalance(user.movements);
        calcDisplaySummary(user);
    }
    else if (user || user.pin) {
        containerApp.style.opacity = 0;
        labelWelcome.textContent = "Incorrect Credentials !!!";

    }

})
/////////////////////////////////////////////////