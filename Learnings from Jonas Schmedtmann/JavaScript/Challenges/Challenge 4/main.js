let submitBtn = document.querySelector('.main__submit');

function onSubmit() {
    let input = document.querySelector('.textinput').value;
    input = input.trim().toLowerCase();
    // console.log(input);
    const inputVariablesArray = input.split('\n');
    // console.log(inputVariablesArray);
    let variablesArray;
    let variables;
    let variable;
    let camelCase = "";
    let camelCaseArray = [];
    for (let i = 0; i < inputVariablesArray.length; i++) {
        variables = inputVariablesArray[i].trim();
        variablesArray = variables.split('_');
        if (variablesArray.length >= 2) {
            for (let i = 0; i <= 1; i++) {
                variable = variablesArray[i];
                variable = i == 0 ? variable.toLowerCase() : variable.replace(variable.slice(0, 1), variable.slice(0, 1).toUpperCase());
                camelCase += variable;
                variable = "";
            }
        }
        camelCaseArray.push(camelCase);
        camelCase = "";
    }
    let i = 0;
    for (let i = 0; i < 5; i++) {

        for (let j = 0; j <= i; j++) {
            console.log(`\n✅ ${i} ${j}`);

        }
    }
}

submitBtn.addEventListener("click", onSubmit);