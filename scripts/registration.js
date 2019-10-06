let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = false;
const age = 10;
let adult = age > 18;

if (adult && earlyRegister) {
  raceNumber += 1000;
  console.log(`You will race at 9.30am your racernumber is ${raceNumber}`);
} else if (adult && !earlyRegister){
  console.log(`You will race at 11.00am your racernumber is ${raceNumber}`);
} else if (age==18){
  console.log(`Come to registration desk`);
} else {
  console.log(`You will race at 12.30pm your racenumber is ${raceNumber}`);
}
