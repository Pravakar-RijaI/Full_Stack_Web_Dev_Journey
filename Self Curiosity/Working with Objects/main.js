const person = {
    firstName: 'Hemsagar',
    lastName: 'Adhikari',
    job: 'Programmer',
    birthYear: 1992,
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2024- this.birthYear;
        return this.age;
    },
    intro: function () {
    if(this.hasDriversLicense)
    return `${this.firstName} ${this.lastName} is ${this.calcAge()} year old ${this.job} and has a driving license.`;
    else
    return `${this.firstName} ${this.lastName} is ${this.calcAge()} year old ${this.job} and does not have a driving license.`;
    }
};



function objectFunction(){
    if(document.querySelector('#first-name').checked){
        document.querySelector('.fnobject').innerText = person.firstName;
    }
    if(document.querySelector('#last-name').checked){
        document.querySelector('.lnobject').innerText = person.lastName;
    }
    if(document.querySelector('#job').checked){
        document.querySelector('.jbobject').innerText = person.job;
    }
    if(document.querySelector('#birth-year').checked){
        document.querySelector('.byobject').innerText = person.birthYear;
    }
    if(document.querySelector('#intro').checked){
        document.querySelector('.inobject').innerText = person.intro();
    }
return false;
}