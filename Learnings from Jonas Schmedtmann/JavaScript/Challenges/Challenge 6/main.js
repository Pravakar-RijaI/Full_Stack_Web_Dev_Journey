//Challenge 1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];


const dogsAge = function (value, index) {
    if (value >= 3)
        console.log(`Dog number ${index + 1} is an adult, and is ${value} years old.`);
    else
        console.log(`Dog number ${index + 1} is still a puppy🐶.`);
}


const checkDogs = function (dogsJulia, dogsKate) {
    let [...Juliadogs] = dogsJulia;
    Juliadogs = Juliadogs.splice(1, 2);
    const [...dogs] = [...Juliadogs, ...dogsKate];
    dogs.forEach(dogsAge);
};

checkDogs(dogsJulia, dogsKate);