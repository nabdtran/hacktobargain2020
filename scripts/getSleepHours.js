// Get Sleep hours


const getSleepHours = day => {
  switch (day) {
  case 'monday':
    return 2;
  case 'tuesday':
    return 9;
  case 'wednesday':
    return 7;
  case 'thursday':
    return 8;  
  case 'friday':
    return 12;
  case 'saturday':
    return 10;
  case 'sunday':
    return 8;
  }; 

}
//console.log(getSleepHours('sunday'));

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');  {
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
  console.log('Perfecto Mundo');
} else if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
} else {
  console.log('Too much sleep!');
}
};

calculateSleepDebt();















