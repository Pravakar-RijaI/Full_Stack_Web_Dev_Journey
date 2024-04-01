const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    noPlanes: 0,
    plane: "",

    book(flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({ name, flight: `${this.iataCode}${flightNum}` });
    },

    buyPlane() {
        this.noPlanes++;
        this.plane += "✈";
        planes.textContent = this.plane;
    }
}

const bookLuftFlight = lufthansa.book.bind(lufthansa);

let buyButton = document.querySelector('.buyplane__btn');
let planes = document.querySelector('.luft-planes');

buyButton.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));





const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = prompt(this.question + "\n" + this.options.join("\n"));
        if (answer >= 0 && answer < 4)
            this.answers[answer]++;
        this.displayResults();
        this.displayResults("string");
    },

    displayResults(type = "array") {
        if (type === "array")
            console.log(this.answers);
        if (type == "string")
            console.log(`The poll results are ${this.answers.join(", ")}`);

    }
};


let pollButton = document.querySelector('.answerpoll-btn');
pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

//poll.displayResults.call({ answers: [5, 2, 3] }, "string");