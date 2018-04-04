const numArray = [3.44, -9.64, 4.11, 6.06, -.01]

 const newArray = []
for (let i = 0; i < numArray.length; i++) {
  newArray.push(Math.round(numArray[i]));
}
//const newArray = numArray.map(Math.round);

function makeTen(){
  const results = [];
  for (let i = 0; i < 10; i++){
    results.push(Math.ceil(Math.random()* 100));
  }
  return results;
}

function displyDate() {
  const now = new Date()
  const wholeDate = now.getDate();
  const currentHour = now.getHour();
  const currentMinute = now.getMinute();
  const currentSecond = now.getSecond();
  const currentDay = now.getDay();
  const currentMonth = now.getMonth() = 1;
  const currentYear = now.getFullyear();
  console.log(`${currentHour}:${currentMinute}:${currentSecond}`);
  console.log(`${wholeDate}/${currentMonth}/${currentYear}`);
}
setInterval(displayDate, 1000);
