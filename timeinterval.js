const text = document.querySelector('.text');
const btn = document.querySelector('#btn');

const messages =["You are amazing!",
  "You brighten the room!",
  "Your smile is contagious!",
  "Believe in yourself.",
  "Keep moving forward.",
  "Do what you love.",
  "Success comes from persistence."];

  let lastIndex = -1;

  function showmessage(){
    let random;
    do{
        random = Math.floor(Math.random()*messages.length);

    }while(random === lastIndex);
    lastIndex = random;

    text.innerText = messages[random];

  };

  setInterval(showmessage,3000);

  btn.addEventListener('click',showmessage);