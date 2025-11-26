const compliment = document.querySelector('.compliment');
const btn = document.querySelector('#compliment-btn');

const compliments = ["You have a great smile!",
  "You are very talented!",
  "You brighten up the room!",
  "Your ideas are amazing!"];

  const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF"];


  let count = 0;

  btn.addEventListener('click',()=>{
    count ++;

    const random = Math.floor(Math.random()*compliments.length);
    compliment.innerText = compliments[random];
    console.log('button clicked ${count} times');

    const randomcolor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomcolor];

  });