function putObjectFunction(){
    const fName= document.querySelector('#first-name');
    const lName= document.querySelector('#last-name');
    const joob= document.querySelector('#job');
    const bYear= document.querySelector('#birth-year');
    
const objectRead = {
    firstName: fName,
    lastName: lName,
    job: joob,
    birthYear: bYear,
    calcAge: function () {
        this.age = 2024- this.birthYear;
        return this.age;
    },
    intro: function () {
    if(this.hasDriversLicense)
    return `${this.firstName} ${this.lastName} is ${this.calcAge()} year old ${this.job}.`;
    else
    return `${this.firstName} ${this.lastName} is ${this.calcAge()} year old ${this.job}.`;
    }
};
}




function getObjectFunction(){
    putObjectFunction();
    if(document.querySelector('#first-name').checked){
        document.querySelector('.fnobject').innerText = objectRead.firstName;
        console.log(objectRead.firstName);
    }
    if(document.querySelector('#last-name').checked){
        document.querySelector('.lnobject').innerText = objectRead.lastName;
    }
    if(document.querySelector('#job').checked){
        document.querySelector('.jbobject').innerText = objectRead.job;
    }
    if(document.querySelector('#birth-year').checked){
        document.querySelector('.byobject').innerText = objectRead.birthYear;
    }
    if(document.querySelector('#intro').checked){
        document.querySelector('.inobject').innerText = objectRead.intro();
    }
return false;
}