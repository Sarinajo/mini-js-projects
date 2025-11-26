const text = document.querySelector('.display-text');
const btn = document.querySelector('#new-msg');
const input = document.querySelector('#user-input');

const compliments = [
    "You are amazing!",
  "You brighten the room!",
  "Your smile is contagious!",
  "You are very talented!"
];

const quotes = [
    "Believe in yourself.",
  "Keep moving forward.",
  "Do what you love.",
  "Success comes from persistence."
];


let lastIndex = -1;
btn.addEventListener('click',()=>{
    let option = input.value.toLowerCase().trim();
    let random;

    if(option === 'c'){
        do{
        random = Math.floor(Math.random()*compliments.length);
        }while(random === lastIndex);
        lastIndex = random;
        text.innerText = compliments[random];

    }
    else if(option === 'q'){
        do{
        random = Math.floor(Math.random()*quotes.length);
        }while(random === lastIndex);
        lastIndex = random;
        text.innerText = quotes[random];

    }
    else{
        text.innerText = "invalid type! use 'c' or 'q'";
    }
    input.value="";
});
