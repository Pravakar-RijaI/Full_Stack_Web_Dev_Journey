let submitBtn = document.querySelector('.main__submit');
let displayTextArea = document.querySelector('.textdisplay');

function onSubmit() {
    let input = document.querySelector('.textinput').value;
    const inputVariablesArray = input.toLowerCase().split('\n');
    let displayText = "";

    for (const [i, variables] of inputVariablesArray.entries()) {
        const [first, second] = variables.split('_');
        const variable = `${first.trim().toLowerCase()}${second.trim().replace(second[0], second[0].toUpperCase())}`
        console.log(variable.padEnd(20), `${"✅".repeat(i + 1)}`);
        displayText += variable + "\n";
    }
    displayTextArea.value = displayText;
}

submitBtn.addEventListener("click", onSubmit);