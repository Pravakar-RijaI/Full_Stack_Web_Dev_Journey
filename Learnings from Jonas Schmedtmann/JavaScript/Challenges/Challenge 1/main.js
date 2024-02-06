/*let javaScript="amazing";
alert(javaScript);
*/
// let x= 23;
// let y=20;
// console.log(x+y);
// let javaScriptIsFun= true;
// console.log(javaScriptIsFun);

// Store Mark's and John's mass and height in variables
// TEST DATA1
// const massMark= 78;
// const heightMark= 1.69;
// const massJohn= 92;
// const heightJohn= 1.95;

// TEST DATA2
// const massMark= 95;
// const heightMark= 1.88;
// const massJohn= 85;
// const heightJohn= 1.76;

// let markBMI= massMark/(heightMark**2);
// let johnBMI= massJohn/(heightJohn**2);

// let markHigherBMI= markBMI > johnBMI;

// if(markHigherBMI)
// console.log(`Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI}).`);
// else
// console.log(`John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI}).`);

// TRUTHY AND FALSY VALUES
// let money="";
// if(money)
// {
//     console.log("Congratulations Congratulations Successfull Person....");
// }
// else
// {
//     console.log("Be on the fastlane..");
// }

// CHALLENGE3
// TEST DATA1
// const averageDolphins = (96+108+89)/3;
// const averageKoalas= (88+91+110)/3;

// TEST DATA2
// const averageDolphins = (97+112+101)/3;
// const averageKoalas= (109+95+123)/3;

// TEST DATA3
const averageDolphins = (97+112+101)/3;
const averageKoalas = (109+95+106)/3;

if(averageDolphins > averageKoalas && averageDolphins >= 100)
console.log(` Dolphins🐬 (${averageDolphins}) win over Koalas🐨 (${averageKoalas}).`);
else if(averageDolphins === averageKoalas && averageDolphins >= 100)
console.log(` Dolphins🐬 (${averageDolphins}) draw with Koalas🐨 (${averageKoalas}).`);
else if(averageKoalas > averageDolphins && averageKoalas >= 100)
console.log(` Koalas🐨 (${averageDolphins}) win over Dolphins🐬 (${averageKoalas}).`);
else
{
    console.log("No team wins the trophy🏆.");
}
