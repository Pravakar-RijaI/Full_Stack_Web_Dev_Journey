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

// Challenge 4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => dog.recommendedFood = (dog.weight ** 0.75 * 28));

const findDog = function (owner) {
    const ownerDog = dogs.find(value => value.owners.includes(owner));

    if (ownerDog.curFood > ownerDog.recommendedFood)
        console.log(`${owner}'s Dog is eating too much.`);

    else if (ownerDog.curFood < ownerDog.recommendedFood)
        console.log(`${owner}'s Dog is eating too little.`);

    else
        console.log(`${owner}'s Dog is eating right.`);

}

findDog("Sarah");

const ownersEatTooMuch = dogs.filter(value => value.curFood > value.recommendedFood).map(value => value.owners).flat();
const ownersEatTooLittle = dogs.filter(value => value.curFood < value.recommendedFood).map(value => value.owners).flat();

console.log(ownersEatTooMuch.join(" and ").concat("'s Dogs eat too much."));
console.log(ownersEatTooLittle.join(" and ").concat("'s Dogs eat too little."));

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkRightFood = dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10;

console.log(dogs.some(checkRightFood));

console.log(dogs.filter(checkRightFood));

console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));





/////////////////////////////////////////////////



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2024-01-01T21:31:17.178Z',
        '2024-01-11T07:42:02.383Z',
        '2024-02-28T09:15:04.904Z',
        '2024-03-01T10:17:24.185Z',
        '2024-04-05T14:11:59.604Z',
        '2024-04-07T17:01:17.194Z',
        '2024-04-08T23:36:17.929Z',
        '2024-04-10T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

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


const dateFormat = function (date1) {
    const now = new Date();
    const interval = Math.round(Math.abs(date1 - now) / (1000 * 60 * 60 * 24));

    if (interval === 0) return "Today";
    else if (interval === 1) return "Yesterday";
    else if (interval <= 7) return interval + " days ago";
    else {
        const year = `${date1.getFullYear()}`;
        const month = `${date1.getMonth() + 1}`.padStart(2, 0);
        const day = `${date1.getDate()}`.padStart(2, 0);
        return `${year}/${month}/${day}`;
    }
}
const displayMovements = function (account, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

    movs.forEach(function (value, i) {
        const date = new Date(account.movementsDates[i]);
        const displayDate = dateFormat(date);
        const type = (value > 0) ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${value.toFixed(2)} €</div>
        </div>`;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    })
}

const displayBalance = function (account) {
    account.balance = account.movements.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    labelBalance.textContent = account.balance + " €";
}

const calcDisplaySummary = function (account) {
    const sumIn = account.movements.filter(value => value > 0).reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = sumIn.toFixed(2) + " €";
    const sumOut = account.movements.filter(value => value < 0).reduce((acc, cur) => acc + Math.abs(cur), 0);
    labelSumOut.textContent = sumOut.toFixed(2) + " €";

    const sumInterest = account.movements.filter(value => value > 0).map(value => value * (account.interestRate) / 100).filter((value) => value >= 1).reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = sumInterest.toFixed(2) + " €";
}

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentUser, !sorted);
    sorted = !sorted;
});

const updateUI = function (account) {
    displayMovements(account);
    displayBalance(account);
    calcDisplaySummary(account);
}
let currentUser;

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentUser = accounts.find(account => account.username == inputLoginUsername.value);
    if (currentUser?.pin === Number(inputLoginPin.value)) {
        containerApp.style.opacity = 100;
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        const now = new Date();
        const year = `${now.getFullYear()}`;
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const day = `${now.getDate()}`.padStart(2, 0);
        const hour = `${now.getHours()}`.padStart(2, 0);
        const min = `${now.getMinutes()}`.padStart(2, 0);
        labelDate.textContent = `${year}/${month}/${day} ${hour}:${min}`;
        labelWelcome.textContent = "Welcome back, " + currentUser.owner.split(' ')[0] + " !!";
        updateUI(currentUser);
    }
    else if (!currentUser || !currentUser.pin) {
        containerApp.style.opacity = 0;
        labelWelcome.textContent = "Incorrect Credentials !!!";
    }

});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();

    const receiverAcc = accounts.find(account => account.username === inputTransferTo.value.trim());
    if (receiverAcc && receiverAcc.username != currentUser.username) {
        const transferAmount = Number(inputTransferAmount.value);
        if (transferAmount > 0 && currentUser.balance >= transferAmount) {
            inputTransferTo.value = inputTransferAmount.value = "";
            inputTransferAmount.blur();
            currentUser.movements.push(-transferAmount);
            currentUser.movementsDates.push(new Date().toISOString());
            updateUI(currentUser);
            receiverAcc.movements.push(transferAmount);
            receiverAcc.movementsDates.push(new Date().toISOString());
            labelWelcome.textContent = "Balance Transfer Successful !!!";

        } else {
            inputTransferTo.value = inputTransferAmount.value = "";
            labelWelcome.textContent = "Invalid Balance !!!";
        }
    }
    else {
        inputTransferTo.value = inputTransferAmount.value = "";
        labelWelcome.textContent = "Invalid User !!!";
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const loanAmount = Math.floor(inputLoanAmount.value);
    if (loanAmount > 0 && currentUser.movements.some(value => value >= (10 / 100 * loanAmount))) {
        currentUser.movements.push(loanAmount);
        currentUser.movementsDates.push(new Date().toISOString());
        labelWelcome.textContent = "Loan Approved !!!";
    }
    else
        labelWelcome.textContent = "Insufficient Deposits !!!";
    inputLoanAmount.value = "";
    updateUI(currentUser);
})

btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    const deleteUsername = inputCloseUsername.value;
    const deletePin = Number(inputClosePin.value);

    if (currentUser.username === deleteUsername && currentUser.pin === deletePin) {
        const deleteIndex = accounts.findIndex((account) => account.username === deleteUsername);
        containerApp.style.opacity = 0;
        labelWelcome.textContent = `User ${accounts[deleteIndex].owner.split(' ').at(0)} deleted Successfully.`;
        accounts.splice(deleteIndex, 1);
    }
    else {
        inputCloseUsername.value = inputClosePin.value = "";
        labelWelcome.textContent = "Invalid Credentials !!!";
    }
});

/////////////////////////////////////////////////



// //Practise

// //total deposits in movements
// const totalAccountDeposit = accounts.flatMap((account) => account.movements).filter(value => value > 0).reduce((acc, cur) => acc + cur, 0);
// console.log(totalAccountDeposit);

// const deposits1000 = accounts.flatMap(account => account.movements).filter(value => value >= 1000).length;
// console.log(deposits1000);

// // const deposits1000Reduce = accounts.flatMap(account => account.movements).reduce(function (acc, cur) {
// //     if (cur >= 1000)
// //         acc++;
// //     return acc;
// // }, 0);
// // console.log(deposits1000Reduce);

// const accountDetails = accounts.flatMap(account => account.movements).reduce((acc, cur) => {
//     acc[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
//     return acc;
// }, { deposits: 0, withdrawls: 0 });

// console.log(accountDetails);

// const convertTitleCase = function (sentence) {
//     const exceptions = ["an", "a", "the", "but", "in", "on", "with", "or"];
//     const titleCase = sentence.
//         toLowerCase()
//         .split(' ')
//         .map(value => exceptions
//             .includes(value) ? value : value[0]
//                 .toUpperCase() + value
//                     .slice(1))
//         .join(' ');
//     return titleCase;
// }

// console.log(convertTitleCase("this is a nice title"));